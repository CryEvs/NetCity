// Windows service wrapper for NetCity.Services.QueueProcessor.exe.
//
// The queue processor is a console program that initializes its task pools and then blocks on
// Console.ReadLine(). When NetCity.ServicesHost starts it from a Windows service there is no console,
// ReadLine() returns immediately and the processor exits ~10 s later without processing anything
// (queued tasks stay "InQueue" forever). This service starts the processor with a stdin pipe that is
// kept open, restarts it if it exits, and stops it together with the service.
//
// Build: csc /target:exe /out:NetCity.QueueProcessorHost.exe /r:System.ServiceProcess.dll QueueProcessorHost.cs
// Use together with <add key="QUEUEPROC" value="manual" /> in ns.config.
using System;
using System.Diagnostics;
using System.IO;
using System.ServiceProcess;
using System.Threading;

class QueueProcessorHost : ServiceBase
{
    const string ProcessorExe = "NetCity.Services.QueueProcessor.exe";
    readonly string _dir;
    readonly string _log;
    Process _child;
    Thread _monitor;
    volatile bool _stopping;

    QueueProcessorHost()
    {
        ServiceName = "NetCityQueueProcessor";
        _dir = Path.GetDirectoryName(typeof(QueueProcessorHost).Assembly.Location);
        _log = Path.Combine(_dir, "Logs", "QueueProcessorHost.log");
    }

    void Log(string message)
    {
        try
        {
            Directory.CreateDirectory(Path.GetDirectoryName(_log));
            File.AppendAllText(_log, DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") + " " + message + Environment.NewLine);
        }
        catch { }
    }

    void StartChild()
    {
        var psi = new ProcessStartInfo(Path.Combine(_dir, ProcessorExe), "/shadow")
        {
            WorkingDirectory = _dir,
            UseShellExecute = false,
            CreateNoWindow = true,
            RedirectStandardInput = true,   // never written, never closed -> Console.ReadLine() blocks
            RedirectStandardOutput = true,
            RedirectStandardError = true
        };
        _child = Process.Start(psi);
        // drain output so the child never blocks on a full pipe
        _child.OutputDataReceived += (s, e) => { };
        _child.ErrorDataReceived += (s, e) => { if (!string.IsNullOrEmpty(e.Data)) Log("stderr: " + e.Data); };
        _child.BeginOutputReadLine();
        _child.BeginErrorReadLine();
        Log("started " + ProcessorExe + " pid " + _child.Id);
    }

    void MonitorLoop()
    {
        while (!_stopping)
        {
            try
            {
                if (_child == null || _child.HasExited)
                {
                    if (_child != null) Log("processor exited with code " + _child.ExitCode + ", restarting");
                    StartChild();
                }
            }
            catch (Exception ex) { Log("monitor error: " + ex); }
            for (int i = 0; i < 30 && !_stopping; i++) Thread.Sleep(1000);
        }
    }

    protected override void OnStart(string[] args)
    {
        _stopping = false;
        _monitor = new Thread(MonitorLoop) { IsBackground = true, Name = "monitor" };
        _monitor.Start();
    }

    protected override void OnStop()
    {
        _stopping = true;
        try
        {
            if (_child != null && !_child.HasExited)
            {
                _child.Kill();
                _child.WaitForExit(15000);
            }
        }
        catch (Exception ex) { Log("stop error: " + ex); }
        Log("service stopped");
    }

    static void Main(string[] args)
    {
        if (Environment.UserInteractive)
        {
            var host = new QueueProcessorHost();
            host.OnStart(args);
            Console.WriteLine("QueueProcessorHost running (console mode). Press Enter to stop.");
            Console.ReadLine();
            host.OnStop();
            return;
        }
        Run(new QueueProcessorHost());
    }
}
