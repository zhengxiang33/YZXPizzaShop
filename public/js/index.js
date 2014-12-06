/**
 * Created by Administrator on 2014/11/23.
 */
 (function () {
  "use strict";
  /**
   * Submits on order
   * @param parameters
   */
  function submitOrder(parameters) {
   var validate = parameters.validate;
   var size = parameters.size;
   var crust = parameters.crust;
   var toppings = parameters.toppings;
   alert("not implemented");
  }

  $(document).ready(function(){
   $("#orderForm").on("submit", function(){

    submitOrder({validate: false, size: "larg", crust: "thin", toppings: ["pepperoni", "sausage"]});
    return false;

   });

  });

  var dog = new Animal();
  dog.name = "Lucky";
  dog.legCount = 3;
  dog.feed("Lamb Shank");

  var toInsert = "<div>\n  <ul>\n    <li>fasdjflasj</li>\n    <li>fasdjflasj</li>\n    <li>fasdjflasj</li>\n    <li>fasdjflasj</li>\n    <li>fasdjflasj</li>\n  </ul>\n</div>"
  var toExecute = "var x=0;\nx++;\nx = 5;";
  var ex = "[0-9A-Za-z ]*";
 })();
