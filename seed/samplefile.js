var Product = require("../models/product");
var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://sahilk:sahilk123@ds235197.mlab.com:35197/purticart",
  { useNewUrlParser: true }
);

result = Product.find();
console.log(result);
mongoose.disconnect();
// var done = 0;
// for (var i = 0; i < products.length; i++) {
//   products[i].save(function(err, result) {
//     done++;
//     if (done === products.length) {
//       exit();
//     }
//   });
// }

// function exit() {
//   mongoose.disconnect();
// }
