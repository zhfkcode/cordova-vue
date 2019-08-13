export function cameraTakePic(onSuccess, onFail) {
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 25,
    destinationType: Camera.DestinationType.DATA_URL
  });

  // function onSuccess(imageData) {
  //   var image = document.getElementById('myImage');
  //   image.src = "data:image/jpeg;base64," + imageData;
  // }

  // function onFail(message) {
  //   alert('Failed because: ' + message);
  // }
}
