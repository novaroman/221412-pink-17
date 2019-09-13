var mainPageWrapper = document.querySelector(".main-page__wrapper");
var mainPageTitlePhoto = document.querySelector(".main-page__title-photo");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    mainPageTitlePhoto.style.paddingTop = "98px";
  } else {
    mainPageTitlePhoto.style.paddingTop = "30px";
    mainPageWrapper.style.paddingBottom = "0px";
  }
});
