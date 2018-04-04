$(document).ready(function () {
    $("#anchor").on("click", "a", function (event) {

        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        // console.log(id);
        if (id === '#section') {
            top = top - 200;
            // return top;
            $('body,html').animate({scrollTop: top}, 1000);
        }

        $('body,html').animate({scrollTop: top}, 1000);
    });

    window.onload = init();

    function init() {
        var index = document.getElementById('index');
        var company = document.getElementById('company');
        var banks = document.getElementById('banks');
        var about_us = document.getElementById('about_us');
        var contacts = document.getElementById('contacts');

        console.log(index,company,banks,about_us,contacts);

        $(window).scroll(function () {

            var wScroll = $(this).scrollTop();




            if( index !== null){
                if (wScroll > $('#last_section').offset().top) {

                    $('#last_section').addClass('fourth');

                }
                else if (wScroll > $('#last_section').offset().top - 100) {
                    $('#last_section').removeClass('fourth');
                }
            }

            if( company|| banks || about_us || contacts!== null){
                if (wScroll > $('#section').offset().top - 200) {
                    $('.header-site').css({
                        'background': 'rgba(255, 255, 255, 0.57)',
                        'transition': '.8s'
                    })
                }
                else if (wScroll >$('#section').offset().top - 250) {
                    $('.header-site').css({
                        'background': 'transparent',
                        'transition': '.8s'
                    })
                }
            }
        });

    }


    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }



});



