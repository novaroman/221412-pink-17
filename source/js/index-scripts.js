var download = document.querySelector(".download");
var downloadTagline = document.querySelector(".download__tagline");
var downloadPhotoExample = document.querySelector(".download__photo-example");

var container = document.querySelector(".container");
var widthContainer = container.width;

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    downloadTagline.style.paddingTop = "91px";
    downloadPhotoExample.style.height = "460px";
    download.style.backgroundPosition = "0 2px";

    if (document.body.clientWidth >= 660) {
      download.style.minHeight = "728px";
    }

  } else {
    downloadTagline.style.paddingTop = "21px";
    downloadPhotoExample.style.height = "393px";
    download.style.backgroundPosition = "0 -65px";
  }
});
