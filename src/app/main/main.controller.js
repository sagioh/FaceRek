export class MainController {
  constructor($timeout, webDevTec, toastr, $scope) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1515396878539;
    this.toastr = toastr;
    this.existingPhoto = false;

    this.activate($timeout, webDevTec);
  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }

  takePhoto() {
    this.existingPhoto = true;
  }

  /*
   -------------------------------------------------
   */
  videoPlayer() {

// Grab elements, create settings, etc.
    var video = document.getElementById('video');

// Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      });
    }

// Elements for taking the snapshot
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');

// Trigger photo take
    document.getElementById("snap").addEventListener("click", function() {
      context.drawImage(video, 0, 0, 640, 480);

      // Get an image dataURL from the canvas.
      var imageDataURL = canvas.toDataURL('image/png');
      console.log("################# imageDataURL="+imageDataURL)

      // Set the dataURL as source of an image element, showing the captured photo.
      //image.setAttribute('src', imageDataURL);

      // Set the href attribute of the download button.
      document.querySelector('#dl-btn').href = imageDataURL;
    });

  }
}
