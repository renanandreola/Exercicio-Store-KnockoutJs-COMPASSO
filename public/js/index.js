
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
  var self = this;

  // Non-editable catalog data - would come from the server
  self.availableMeals = [
      { mealName: "Standard (sandwich)", price: 0 },
      { mealName: "Premium (lobster)", price: 34.95 },
      { mealName: "Ultimate (whole zebra)", price: 290 }
  ];    

  // Editable data
  self.seats = ko.observableArray([
      new SeatReservation("Steve", self.availableMeals[0]),
      new SeatReservation("Bert", self.availableMeals[0])
  ]);

  // Computed data
  self.totalSurcharge = ko.computed(function() {
     var total = 0;
     for (var i = 0; i < self.seats().length; i++)
         total += self.seats()[i].meal().price;
     return total;
  });    

  // Operations
  self.addSeat = function() {
      self.seats.push(new SeatReservation("", self.availableMeals[0]));
  }
  self.removeSeat = function(seat) { self.seats.remove(seat) }


  // TITLE CARS - GAMES 
  self.titleWD2 = ko.observable("WHATCH DOGS 2");
  self.descriptionWD2 = ko.observable("Um jogo de ação em 3ª pessoa, com mundo aberto e ótima interação"
                                   +  "entre o player e a cidade de São Francisco, na Califórnia, Watch" 
                                   +  "Dogs 2 PS4 chega bem mais leve e divertido do que sua primeira edição.")
}




// Activates knockout.js
ko.applyBindings(new indexViewModel());
  



