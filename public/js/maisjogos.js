
   /*
    //this.product = ko.observable("");
    //this.description = ko.observable("");
    //this.price = ko.observable("");
    //var product = $("#product").val();
    //var description = $("#description").val();
    //var price = $("#price").val();
function games() {
 

    this.product = ko.observable("");
    this.description = ko.observable("");
    this.price = ko.observable("");
    this.url = ko.observable("")

    this.games = ko.observableArray([{ nameGame: this.product, 
                                           descriptionGame: this.description, 
                                           priceGame: this.price, 
                                           someValue: this.url }]);
    
    this.send = function() {
        
        
    }

}

ko.applyBindings(new games());
*/
function addToCart(product) {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    if (!cart) {
      cart = [];
    }
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }
  
  $(document).ready(function () {
    $('form').submit(function () {
        var productName = $('#product').val();
        var productPrice = $('#price').val();
        var productImage = $('#image').val();
        addToCart({
          name: productName,
          price: productPrice,
          image: productImage
        });
    });
  
    var cart = sessionStorage.getItem("cart");
    if (cart !== null) {
      cart = JSON.parse(cart);
      var total = 0;
      for (var i = 0; i < 1000; i++) {
        $("#test").html(i);
        $("#result").append("<li id="+i+"> → Produto: " + cart[i].name + "</br>" +"→ Preço: "+"R$" + cart[i].price + "</br>" + "<img src='" + cart[i].image + "' width='150px' height='150px'></li>" + "</br>" + "<button onclick='excluir("+ i +")' type='button' id='button" + i +"'>Excluir Produto</button>" + "</br>"+ "</br>");
        total += parseInt(cart[i].price);
  
        $("#total").html("R$: " + total);
      }
    }
  })
  
  function excluir(value) {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    console.info(cart)
    console.info(cart[value])
    var removeItem = cart[value];
    var newcart = [];
    newcart = cart.splice($.inArray(removeItem, cart), 1);
    location.reload();
    return sessionStorage.setItem("cart", JSON.stringify(cart));
    // for (var i = 0; i < 1000; i++) {
    //   $("#result").hide();
    //   $("#result").style.display = "none";
    }
