$(function () {

    var extraFieldControls = function (diz) {
        var add = $('<button type="button" class="btn btn-small btn-success">Adicionar campo</button>');
        var remove = $('<button type="button" class="btn btn-small btn-danger">Remover campo</button>')

        var extra = $('<div class="extra_fields">');

        var group = $('<div class="btn-group btn-group-xs pull-right">');
        group.append(add);
        group.append(remove);


        add.on('click', function (evt) {
            evt.preventDefault();
            var dat = diz.clone();
            extra.append(dat);
        });

        remove.on('click', function (evt) {
            evt.preventDefault();
            var el = extra.find('.multifile').last();
            var p = el.parents('.multifile_container');
            if (p.length) {
                p.remove();
            } else {
                el.remove();
            }
        });

        diz.before(group);

        diz.after(extra);

    }

    $('form').on('click', '.filemanager-delete', function () {
        if (confirm('Confirma exclusão de arquivo?')) {
            var diz = $(this);
            var preset = diz.data('preset');
            var manager = diz.closest('.filemanager_view');

            var url = $(location).attr('href');

            $.ajax({
                'url': url,
                'data': {'delete_file': 1, 'preset': preset, 'fileid': diz.data('id')},
                'success': function (data, textStatus, jqXHR) {
                    manager.html(data);
                }
            });
        }
    });

    var fileManager = function (diz) {

        if (diz.hasClass('multifile_container')) {
            var preset = diz.find('input').attr('name');
        } else {
            var preset = diz.attr('name');
        }


        var manager = $('<div class="filemanager_view">Aguarde, carregando arquivos...</div>');

        var url = $(location).attr('href');

        diz.parent().append(manager);

        $.ajax({
            'url': url,
            'data': {'get_files': 1, 'preset': preset},
            'success': function (data, textStatus, jqXHR) {
                manager.html(data);
            }
        });
    }


    $('.singlefile').each(function (i, item) {
        var diz = $(item);
        fileManager(diz);
    });


    $('.multifile').each(function (i, item) {
        var diz = $(item);

        var p = diz.parents('.multifile_container');

        if (p.length) {
            return;
        }
        extraFieldControls(diz);
        fileManager(diz);
    });


    $('.multifile_container').each(function (i, item) {
        var diz = $(item);
        extraFieldControls(diz);
        fileManager(diz);
    });
});

