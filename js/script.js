$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('#form-footer').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: {
                required: 'Por favor, informe seu nome'
            },
            email: {
                required: 'Por favor, informe seu e-mail',
                email: 'Por favor, informe um e-mail válido'
            },
            telefone: {
                required: 'Por favor, informe seu telefone'
            }
        },
        errorPlacement: function(error, element) {
            $(element).attr('title', error.text()).tooltip('show');
        },
        success: function(label, element) {
            $(element).tooltip('dispose');
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});