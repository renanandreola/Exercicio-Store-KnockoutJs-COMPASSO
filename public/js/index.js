
  // $(document).ready(function() {
    
  //     $('form').submit(function (event) {
  //       event.preventDefault();

  //       var email = $("#email").val();
  //       var password =  $("#password").val();
    
  //       if(email === "") {
  //         toastr["error"]("Campo email vazio")
  //         return
  //       };
    
  //       if(password === "") {
  //         toastr["error"]("Campo senha vazio")
  //         return
  //       };
    
  //       // else {
  //       //   toastr["success"]("Carregando...")
  //       // }
        
  //       $.post("/index", {email: email, password: password}, function (res) {
  //         if (res === 'ok') {
  //           console.info('Logado');
  //           toastr["success"]("Login efetuado...");
  //           window.location.href = "/afterlogin?email=" + email;  //http://localhost:3000/afterlogin
  //         } else {
  //           toastr["error"]("Senha inválida, reveja os campos")
  //           console.info('Senha de usuario incorreta');
  //         }
  //       })
  //     })
  //  });

 function showTitle() {
   this.underCaroussel = ko.observable("Os melhores descontos")
 }
  
 
 
 
 
 ko.applyBindings(new showTitle());




