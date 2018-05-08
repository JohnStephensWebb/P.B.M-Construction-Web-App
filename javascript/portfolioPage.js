document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    $('#modal1').modal();
    $('#modal2').modal();
    $('#modal3').modal();
    $('#modal4').modal();
    $('#modal5').modal();
    $('#modal6').modal();

    $(".button-collapse").sideNav();

    $('body').removeClass('fade-out');
});
