/*window.onload = showValues;

function showValues()
{
  console.log("Hello World!");

  var veg = document.getElementById("checkVeggies");
  //veg.defaultChecked = true;
  var name = document.getElementById("orderName");
  //name.value = "Pat";

  console.log("Finished Running JavaScript");

}*/

function checkoutOrders()
{
  var checkoutName = getCookie("name");
  console.log(checkoutName);
}

function order(){

  var name = document.getElementById("orderName");
//get the status of the check box
  var veg = document.getElementById("checkVeggies").checked;
  var pep = document.getElementById("checkPepperoni").checked;
  var sausage = document.getElementById("checkSausage").checked;

  if(veg == true && pep == true && sausage == true)
  {
    console.log("Order received by " + name.value);
    console.log("Order is a supreme pizza");
  }
  else if (pep && sausage && !veg) //short hand for the above syntax
  {                               //since veg and the others are booleans
    console.log("Order received by " + name.value);
    console.log("Order is a meatlovers pizza");
  }
  else if(!veg && !pep && !sausage)
  {
    console.log("Order received by " + name.value);
    console.log("Order is a cheese pizza");
  }
  else if(veg && !pep && !sausage)
  {
    console.log("Order received by " + name.vaule);
    console.log("Order is a veggie pizza");
  }
  else if(!veg && pep && !sausage)
  {
    console.log("Order recieved by " + name.value);
    console.log("Order is a pepperoni pizza");
  }
  else if(!veg && !pep && sausage)
  {
    console.log("Order received by " + name.value);
    console.log("Order is a sausage pizza");
  }

  setCookie("name", name.value, 1)
  window.location.href="checkout.html";
}

//setCookie and getCookie are courtesy of w3schools
//https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
