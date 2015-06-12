$(function () {

    


    $('[data-mask]').each(function (i, item) {
        var diz = $(item);
        diz.mask(diz.data('mask'), {placeholder: ' '});
    });

    $('.image-zoom').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });

    $('ul', '#main-menu').addClass('dropdown-menu');
    $('.menu_level_1.dropdown-menu').prev('a').append(' <span class="caret"></span>');
    var dd = $('.dropdown-menu', '#main-menu');
    $('.menu_level_1 li.dropdown', '#main-menu').addClass('dropdown-submenu').removeClass('dropdown');

    dd.prev('a').addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
    $('#main_menu > li > a').dropdown();

//
//
//
    $('.dropdown-submenu > a', '#main-menu').submenupicker();


    $('.phone').mask('(99) 99999999?9', {placeholder: ' '});


    $('.money').autoNumeric({
        aSep: '.',
        aDec: ',',
        aSign: 'R$ ',
        mDec: '2',
        wEmpty: 'empty',
        lZero: 'deny'
    });

    $('.number').autoNumeric({
        aSep: '.',
        aDec: ',',
        aSign: '',
        mDec: '0',
        wEmpty: 'empty',
        lZero: 'deny'
    });

    $('.rich').summernote({
        height: 200,
        lang: 'pt-BR'
    });

    $('.date').each(function (i, item) {

        var diz = $(item);

        var val = diz.val();

        var hidden = $('<input type="hidden" name="' + diz.attr('name') + '">');



        diz.after(hidden);

        if (val) {
            diz.val(moment(diz.val()).format('L'));
            hidden.val(val);
        }

        diz.on('dp.change', function (evt) {
            if (evt.date) {
                hidden.val(evt.date.format('YYYY-MM-DD'));
            } else {
                hidden.val('');
                diz.val('');
            }
        }).datetimepicker({
            format: 'L',
            useCurrent: false,
            icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-bookmark',
                clear: 'fa fa-trash'
            }
        });

    });

    $('.datetime').each(function (i, item) {

        var diz = $(item);

        var val = diz.val();

        var hidden = $('<input type="hidden" name="' + diz.attr('name') + '">');

        diz.after(hidden);

        if (val) {
            diz.val(moment(val).format('L LT'));
            hidden.val(val);
        }

        diz.on('dp.change', function (evt) {
            if (evt.date) {
                hidden.val(evt.date.format('YYYY-MM-DD HH:mm:ss'));
            } else {
                hidden.val('');
                diz.val('');
            }
        }).datetimepicker({
            useCurrent: false,
            icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-bookmark',
                clear: 'fa fa-trash'
            }
        });

    });

    $('.multiselect').select2({
        placeholder: 'Selecione as opções',
        allowClear: true,
        SelectOnClose: true,
        closeOnSelect: false
    });





});
