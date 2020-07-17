$(document).ready(function (){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.slider').slider({
        fullWidth: true
    });
    $('.parallax').parallax();
    $('.reviews').carousel({
        numVisible: 5,
        shift: 55,
        padding: 55
    });

});

function openModal () {
    var instance = M.Modal.getInstance($("#modal1"));
    instance.open();
}