function clickSocials() {
    var self = this;

    self.clickFacebook = ko.observable();
    self.clickTwitter = ko.observable();
    self.clickGoogle = ko.observable();
    self.clickLinkedin = ko.observable();

    self.clickFacebook = function() {
        window.open('https://pt-br.facebook.com/');
    }
    self.clickTwitter = function() {
        window.open('https://twitter.com/login?lang=pt');
    }
    self.clickGoogle = function() {
        window.open('https://plus.google.com/?hl=pt-BR');
    }
    self.clickLinkedin = function() {
        window.open('https://br.linkedin.com');
    }



}
// Activates knockout.js
ko.applyBindings(new clickSocials());