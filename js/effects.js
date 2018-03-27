

$(document).ready(function () {
    $("#anchor").on("click", "a", function (event) {

        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        // console.log(id);
        if (id == '#company_spreedsheet') {
            top = top - 200;
            // return top;
            $('body,html').animate({scrollTop: top}, 1000);
        }

        $('body,html').animate({scrollTop: top}, 1000);
    });
});


$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    if (wScroll > $('#last_section').offset().top) {

        $('#last_section').addClass('fourth');

    }
    else if (wScroll > $('#last_section').offset().top-100){
        $('#last_section').removeClass('fourth');
    }
});