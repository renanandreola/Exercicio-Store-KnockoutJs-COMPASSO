function promo(){
this.game1 = ko.observable("Grand Teft Auto");
this.game2 = ko.observable("Dirt 4");
this.game3 = ko.observable("Watch Dogs 2");

this.value1 = ko.observable("R$: 33.99");
this.value2 = ko.observable("R$: 40.59");
this.value3 = ko.observable("R$: 70.10");

var data = "22/03/2020";
this.date1 = ko.observable(data);
this.date2 = ko.observable(data);
this.date3 = ko.observable(data);
}

ko.applyBindings(new promo());

