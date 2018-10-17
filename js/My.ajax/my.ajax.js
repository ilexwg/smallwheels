var ajax = {
  getXHR: function () {
    var ids = [
      'MSXML2.XMLHTTP.3.0',
      'MSXML2.XMLHTTP',
      'Microsoft.XMLHTTP'
    ];
    var xhr;
    if (typeof XMLHttpRequest === 'function') {
      xhr = new XMLHttpRequest();
    } else {
      for (var i = 0; i < ids.length; i++) {
        try {
          xhr = new ActiveXObject(ids[i]);
          break;
        } catch (e) {}
      }
    }
  },
  request: function (url, method, callback, postBody) {
    var xhr = this.getXHR();
    xhr.onreadystatechange = (function (myxhr) {
      return function () {
        if (myxhr.readyState === 4 && myxhr.status === 200) {
          callback(myxhr);
        }
      };
    })(xhr);
    xhr.open(method.toUpperCase(), url, true);
    xhr.send(postBody || '');
  }
};

function myCallback(xhr) {
  alert(xhr.responseText);
}
ajax.request('1.css', 'get', myCallback);
ajax.request('1.css', 'post', myCallback, 'first=John&last=Smith');
