var headerHeight = $('.header-img').height();

$(window).scroll(function () {
    var windowScroll = $(this).scrollTop();

    if (windowScroll <= headerHeight) {
        $('.header-container').css({
            'transform': 'translate(0px,-' + windowScroll * 0.1 + '%)'
        });
        $('.header-img').css({
            'background-position': '0% -' + windowScroll * 0.1 + '%'
        });
    }
});