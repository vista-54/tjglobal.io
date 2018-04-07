var arrLang = {
    'uk': {
        'header': {
            'logo': "logo",
            'Company': 'Company',
            'Banks': 'Banks',
            'About': 'About Us',
            'Contact': 'Contact'
        },
        'footer': {
            'condition': "Terms of service",
            'policy_company': "Company policy",
            'policy': "Privacy",
            'kyc': "KYC",
            'allrights': "All rights reserved."

        },
        'main': {
            'title': 'We transform relationships between brands and people.',
            'detail': 'Detail',
            'forex_title': 'FOREX AND BINARY OPTIONS',
            'forex_text': 'Providing a full range of services to create  a Forex Broker or Binary Options.',
            'e-commerce_title': 'E-COMMERCE',
            'e-commerce_text': 'A full range of services for Financial Licenses for E-Commerce.',
            'license_title': 'LICENSE',
            'license_text': 'A full range of services for Financial Licenses.',
            'legal_title': 'LEGAL OPINION',
            'legal_text': 'Legal Opinion from a lawyer from the UK and lawyer from St Vincent and the Grenadines  for offshore offshore companies Forex, Binary, Crypto, ICO.'
        },

    },
    'ru': {
        'header': {
            'logo': "логотип",
            'Company': 'Компании',
            'Banks': 'Банки',
            'About': 'О нас',
            'Contact': 'Контакты'
        },
        'footer': {
            'condition': "Условия сервиса",
            'policy_company': "Политика Компании",
            'policy': "Конфиденциальность",
            'kyc': "KYC",
            'allrights': "Все права защищены."

        },

        'main': {
            'title': 'Мы трансформируем отношения между брендами и людьми.',
            'detail': 'Подробнее',
            'forex_title': 'ФОРЕКС И БИНАРНЫЕ ОПЦИОНЫ',
            'forex_text': 'Предоставление полного спектра услуг по созданию Форекс Брокера или Бинарные Опционы.',
            'e-commerce_title': 'Электронная комерция',
            'e-commerce_text': 'Предоставление полного спектра услуг на получение Финансовых Лицензий для Электронной коммерции.',
            'license_title': 'ЛИЦЕНЗИЯ',
            'license_text': 'Предоставление полного спектра услуг для финансовых лицензий',
            'legal_title': 'ЮРИДИЧЕСКИЕ ЗАКЛЮЧЕНИЯ',
            'legal_text': 'Юридическое заключение адвоката из Великобритании и адвокат из Сент-Винсент и Гренадины для оффшорных компаний Форекс, Бинарные Опционы, Крипта, ICO.'
        }
    }

};

$(function () {
    // https://www.tjglobal.org/en/

    // $(document).ready(function () {
    //
    //     // var lang = $(this).attr('id');
    //     // console.log(arrLang[lang].header.logo);
    //     var lang = navigator.language;
    //     console.log(lang);
    //
    //
    //     $('.lang').each(function (index, element) {
    //         console.log(typeof  arrLang[lang][$(this).attr('key')]);
    //         $(this).text(arrLang[lang][$(this).attr('data-key-parent')][$(this).attr('data-key-child')]);
    //
    //     })
    //
    // })

    // $(function () {
    $('.translate').click(function () {

        var lang = $(this).attr('id');
        // console.log(arrLang[lang].header.logo);


        $('.lang').each(function (index, element) {
            console.log(typeof  arrLang[lang][$(this).attr('key')]);
            $(this).text(arrLang[lang][$(this).attr('data-key-parent')][$(this).attr('data-key-child')]);

        })

    })
    // });
});
// console.log(arrLang.header.logo);