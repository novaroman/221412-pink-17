var mainPageWrapperForm = document.querySelector(".main-page__wrapper--form");
var mainPageTitleContest = document.querySelector(".main-page__title-contest");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    mainPageTitleContest.style.paddingTop = "97px";
  } else {
    mainPageTitleContest.style.paddingTop = "30px";
    mainPageWrapperForm.style.paddingBottom = "0px";
  }
});
