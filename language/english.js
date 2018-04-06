var arrLang ={
    'uk':{
        'header':{
            'logo':"logo",
            'Company':'Company',
            'Banks':'Banks',
            'About':'About Us',
            'Contact':'Contact'
        },
        'main':{
            'title':'',
            'detail':'',
            'forex_title':'',
            'forex_text':'',
            'e-commerce_title':'',
            'e-commerce_text':'',
            'license_title':'',
            'license_text':'',
            'legal_title':'',
            'legal_text':''
        }
    },
    'ru-RU':{
        'header':{
            'logo':"логотип",
            'Company':'Компании',
            'Banks':'Банки',
            'About':'О нас',
            'Contact':'Контакты'
        },
        'main':{
            'title':'',
            'detail':'',
            'forex_title':'',
            'forex_text':'',
            'e-commerce_title':'',
            'e-commerce_text':'',
            'license_title':'',
            'license_text':'',
            'legal_title':'',
            'legal_text':''
        }
    }

};

$(function () {
    $(document).ready(function () {

        // var lang = $(this).attr('id');
        // console.log(arrLang[lang].header.logo);
        var lang = navigator.language;
        console.log(lang);


        $('.lang').each(function (index, element) {
            console.log(typeof  arrLang[lang][$(this).attr('key')]);
            $(this).text(arrLang[lang][$(this).attr('data-key-parent')][$(this).attr('data-key-child')]);

        })

    })
});
console.log(arrLang.header.logo);