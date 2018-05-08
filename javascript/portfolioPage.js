document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    $('#modal1').modal();
    $('body').removeClass('fade-out');
});
