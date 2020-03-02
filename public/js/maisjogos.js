
function games() {
    this.nameGame = ko.observable("teste jogo");
    this.descriptionGame = ko.observable("teste de descricao de jogo");
    this.priceGame = ko.observable("39,90");

    this.addToCart = function() {
        
    }

}

ko.applyBindings(new games());