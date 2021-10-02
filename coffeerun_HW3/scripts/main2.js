(function(window){
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;

    var truck = new Truck('ncc-1705', new DataStore());
    window.truck = truck;


    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function(data) {
        truck.createOrder.call(truck, data);
    });

    //Click outside the window to close modal
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }

      }

    console.log(formHandler);
})(window);

var modal = document.getElementById("Modal");

function Open_Modal(){
    modal.style.display = "block";
    /*
    console.log("Inside open_modal")
    var Person_Name = document.getElementById("name")
    Name = Person_Name.getAttribute("name");
    console.log(Person_Name.getAttributeNames())
    */
    var thanks_text = document.getElementById("payment_stuff")
    thanks_text.textContent = "Thank you for your payment";
    //Unfinished, requires + title + name (don't know how and ran out of time)
   // console.log("End of Open_Modal")

}
/*
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
detailImage.setAttribute('src', imageUrl);
detailImage.setAttribute('detail-image-index', index_value)
*/
