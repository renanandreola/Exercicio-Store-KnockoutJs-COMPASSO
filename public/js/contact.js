function send (event) {
event.preventDefault();

var name = $("#name").val();
var message = $("#message").val();
var email = $("#email").val();
var subject = $("#subject").val();
var response = $("#response").val();
var date = new Date();

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

// VÁLIDAÇÃO DOS CAMPOS DO FORMULÁRIO
if (name == "") {
    toastr["error"]("Campo NOME obrigatório");
    return;
}

if (message == "") {
    toastr["error"]("Campo MENSAGEM obrigatório");
    return;
}

if (email == "") {
    toastr["error"]("Campo EMAIL obrigatório");
    return;
}


    var data = {
    name: name,
    message: message,
    email: email,
    date: date.toLocaleDateString('pt-BR', options),
    subject: subject,
    response: response
    }

    // ENVIA DADOS PARA O MONGODB
    $.post('/contact', data, function (res) {
            if(res === 'ok') {
                toastr["success"]("Mensagem enviada com sucesso!");
                setTimeout(function(){
                location.reload();
            },1500);
                $('form').trigger('reset');
            } else {
                toastr["error"]("Erro: " + res);
            }
    })
    } 


// LIMPA CAMPOS DO FORMULÁRIO
function clear (){
$("#name").val("");
$("#message").val("");
$("#email").val("");
}


// EXCLUIR ITENS DA TABELA
$('.btn-remove').click(function () {
$.ajax({
    url: '/admin/contact/' + $(this).attr('id'),
    type: 'delete',
    success: function (r) {
    if (r == 'ok') {
        toastr["error"]("Mensagem removida!");
        setTimeout(function(){
        location.reload();
        },1500);
    } else {
        toastr["error"]("Mensagens ", "Erro na exclusão");
    }
    }
});
});

// $('.btn-response').click(function () {
//   $.ajax({
//     url: '/admin/contact/' + $(this).attr('id'),
//     type: 'delete',
//     success: function (r) {
//       if (r == 'ok') {
//         toastr["error"]("Mensagem removida!");
//         setTimeout(function(){
//           location.reload();
//         },1500);
//       } else {
//         toastr["error"]("Mensagens ", "Erro na exclusão");
//       }
//     }
//   });
// });

// $(document).ready(function(){
//     $('#hideshow').on('click', function(event) {        
//         $('#response').toggle('show');
//     });
// });


$('.btn-response').click(function () {

var id = $(this).attr('id');

$( ".inner" + id).append($('.response').toggle());
var email = $(this).attr('value');
$(".btn-send").attr('value', email);
$(".btn-send").attr('id', id);
console.log(email)
});


$('.btn-send').click(function () {
console.log('enviarrr')

var subject = $("#subject").val();
var response = $("#response").val();
var email = $(this).attr('value');
var id = $(this).attr('id');


if (subject == "") {
toastr["error"]("Campo ASSUNTO obrigatório");
return;
}

if (response == "") {
toastr["error"]("Campo MENSAGEM obrigatório");
return;
}


var data = {
    subject: subject,
    response: response,
    email: email,
    id: id
    }

// ENVIA DADOS PARA O MONGODB
$.post('/contact', data, function (res) {
        if(res === 'ok') {
            toastr["success"]("Resposta enviada com sucesso!");
            setTimeout(function(){
            location.reload();
        },1500);
            $('form').trigger('reset');
        } else {
            toastr["error"]("Erro: " + res);
        }
}) 
});