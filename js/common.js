// Pagetop
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('#myBtn').fadeIn();
        } else {
            $('#myBtn').fadeOut();
        }

        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        var footHeight = $('footer').innerHeight();

        if (scrollHeight - scrollPosition <= footHeight) {
            $('#myBtn').css({
                "position": "absolute",
                "bottom": footHeight + 10
            });
        } else {
            $('#myBtn').css({
                "position": "fixed",
                'bottom': '140px'
            });
        }
    });

    $('#myBtn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});