$(document).ready(function(){
    $('#carousel-imagem').slick({
        autoplay: true
    });

    $('.menu-hamburger').click (function(){
        $('nav').slideToggle();
    })
    
    $('#tel').mask('(00) 00000-0000', {
    });

    $('form').validate({
        rules: {
            name:{
                required: true
            },
            tel:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            interesse:{
                required: false
            },
            mensagem:{
                required: true
            },
        },
        messages:{
            name: 'Por favor, insira o seu nome',
            tel: 'Por favor, insira número de celular para contato',
            interesse: 'Digite a marca e/ou modelo do carro desejado',
            mensagem: 'Escreva mais detalhes sobre seu pedido ou deixe uma mensagem'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert (`Existem ${camposIncorretos} campos não preenchidos`)
            }
        }
    });

    $('.lista-veiculos button').click(function(){
        const destino = $('#contact-us');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

});