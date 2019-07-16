var Product = require("../models/product");
var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://heroku_xhr4ljlx:p4jd3p9258485j74p6dse9mlg5@ds249267.mlab.com:49267/heroku_xhr4ljlx"
);
var products = [
  new Product({
    imagePath:
      "https://upload.wikimedia.org/wikipedia/en/5/59/Clash_of_Clans_Logo.png",
    title: "Clash of Clans",
    description: "Awesome Game",
    price: 10
  }),
  new Product({
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Valued_image_seal.svg/800px-Valued_image_seal.svg.png",
    title: "Clash of Clans 2",
    description: "Awesome Game",
    price: 10
  }),
  new Product({
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Visnu_of_Cericitised_Slate_at_Varendra_Research_Museum.jpg/800px-Visnu_of_Cericitised_Slate_at_Varendra_Research_Museum.jpg",
    title: "Clash of Clans 3",
    description: "Awesome Game",
    price: 10
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
