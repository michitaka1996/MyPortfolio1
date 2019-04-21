$(function () {
    // var targetHeight = $('.js-hero-target').height();
    $('.js-toggle-icon-menu').on('click', function () {
        $(this).toggleClass('active'); 
        $('.js-toggle-menu').toggleClass('active');
    });

});