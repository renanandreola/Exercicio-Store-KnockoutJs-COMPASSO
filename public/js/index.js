
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





// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
  var self = this;
  self.name = name;
  self.meal = ko.observable(initialMeal);

  self.formattedPrice = ko.computed(function() {
      var price = self.meal().price;
      return price ? "$" + price.toFixed(2) : "None";        
  });    
}

// Overall viewmodel for this screen, along with initial state
function indexViewModel() {

  // TITLE CARS - GAMES 
  this.titleWD2 = ko.observable("WHATCH DOGS 2");
  this.descriptionWD2 = ko.observable("Um jogo de ação em 3ª pessoa, com mundo aberto e ótima interação"
                                   +  "entre o player e a cidade de São Francisco, na Califórnia, Watch" 
                                   +  "Dogs 2 PS4 chega bem mais leve e divertido do que sua primeira edição.")
}


// Activates knockout.js
ko.applyBindings(new indexViewModel());
  



