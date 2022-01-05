/* eslint-disable no-unused-vars */
export function fetchLoginCall(callback, url, method, payload) {
  return new Promise(function (resolve, reject) {
    const options = {
      method,
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        callback(res);
        resolve(res);
      })
      .catch((err) => {
        callback(err);
        return err;
      });
  });
}

export function fetchCall(callback, url, method, payload) {
  const token = localStorage.getItem('token');
  return new Promise(function (resolve, reject) {
    const options = {
      method,
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        auth_token: token
      }
    };
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        callback(res);
        resolve(res);
      })
      .catch((err) => {
        callback(err);
        return err;
      });
  });
}

export const uploadFiles = (callback, url, method, formData) =>
  new Promise((resolve) => {
    const ajax = new XMLHttpRequest();

    // ajax.upload.addEventListener('progress', progressHandler, false);
    ajax.upload.addEventListener('progress', callback, false);
    // ajax.addEventListener('load', callback, false);
    ajax.addEventListener('error', callback, false);
    ajax.addEventListener('abort', callback, false);

    ajax.onreadystatechange = function () {
      if (ajax.readyState === 4) {
        callback(JSON.parse(ajax.response));
      }
    };

    ajax.open(method, url); // http://www.developphp.com/video/JavaScript/File-Upload-Progress-Bar-Meter-Tutorial-Ajax-PHP
    // use file_upload_parser.php from above url

    // ajax.setRequestHeader(
    //   'auth_token'
    // );

    ajax.send(formData);
  });
