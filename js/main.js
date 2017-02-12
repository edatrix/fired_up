require('../templates/home.hbs');
// var homeTemplate = require("./home.hbs");

// var context = {title: "My New Post", body: "This is my first post!"};

// function createThePage(context) {
// 	var homeContainer = document.getElementById("home-container");
// 	homeContainer.innerHTML = homeTemplate(context);
// }


var source   = document.getElementById("some-template").html();
var template = Handlebars.compile(source);
var context = {title: "My New Post", body: "This is my first post!"};
document.getElementById("home-container").html(template(data));