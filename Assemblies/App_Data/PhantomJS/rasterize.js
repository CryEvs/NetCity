var page = require('webpage').create(),
    system = require('system'),
    address, output;

    address = system.args[1];
    output = system.args[2];
    page.paperSize = { format: system.args[3], orientation: system.args[4], margin: system.args[5] }
    page.zoomFactor = system.args[6];
    page.viewportSize = { width: 600, height: 600 };
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
            phantom.exit();
        } else {
            window.setTimeout(function () {
                page.render(output);
                phantom.exit();
            }, 200);
        }
    });
