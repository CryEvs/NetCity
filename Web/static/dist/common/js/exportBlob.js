var exportBlobToExcel, maxContentLength, sendPartReport, submit;

maxContentLength = 20000;

sendPartReport = function(reportHtml) {
  var end, length, maxReportPartsLen, partIndex, promiseArr, start;
  promiseArr = new Array();
  length = reportHtml.length;
  partIndex = 0;
  start = 0;
  end = maxContentLength;
  maxReportPartsLen = Math.ceil(length / maxContentLength);
  while (start < length) {
    promiseArr.push((function() {
      return jsSubmit({
        action: '/asp/ajax/GetReportParts.asp',
        data: {
          "PARTINDEX": partIndex,
          "REPORTPART": reportHtml.slice(start, end),
          "REPORTPARTSLEN": maxReportPartsLen
        }
      });
    })());
    partIndex = partIndex + 1;
    start = end;
    end = end + maxContentLength;
  }
  return promiseArr;
};

submit = function(exportData, action, fileName) {
  var length;
  if (exportData) {
    length = exportData.length;
    if (length > maxContentLength) {
      extDeferred.when(sendPartReport(exportData)).then(function() {
        return postTo(action, {
          filename: fileName
        }, {
          download: true
        });
      });
      return;
    }
  }
  return postTo(action, {
    exportdata: exportData,
    filename: fileName
  }, {
    download: true
  });
};

exportBlobToExcel = function(mimeType, action, exportData, fileName) {
  var blob, doc, iframe, link;
  fileName = fileName.normalizeFileName();
  if (bowser.msie > 0) {
    iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.write(exportData);
    doc.execCommand("SaveAs", true, fileName);
    return $(iframe).remove();
  } else if (bowser.safari || (bowser.opera && !bowser.webkit) || !window.Blob) {
    return submit(exportData, action, fileName);
  } else {
    blob = new Blob([exportData], {
      type: mimeType
    });
    link = document.createElement("a");
    link.download = fileName;
    link.style.display = 'none';
    link.href = window.URL.createObjectURL(blob);
    link = document.body.appendChild(link);
    link.click();
    return $(link).remove();
  }
};
