document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  $(".button-collapse").sideNav();

  $('body').removeClass('fade-out');
});
