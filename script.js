let cartItems = 0;
let product_card = document.getElementsByTagName('h3');
// const addToCartButton = document.getElementsByClassName('.add-to-cart');
const addToCartButton = document.getElementById('add-to-cart');
const clearToCartButton = document.getElementById('clear-to-cart');
const cartDiv = document.getElementById('cart');

addToCartButton.addEventListener('click', function() {
  cartItems++;
  cartDiv.innerHTML = `${cartItems} <i class="fa-solid fa-cart-shopping"></i> `;
//    + `<div class='cpro'>
//   <ul>
//     <h3> ${product_card} </h3>
//   </ul>
// </div>`;
const btn = document.querySelector("#add-to-cart");
const btnText = document.querySelector("#btnText");
    btnText.innerHTML = "Added" + "<i class='fa-sharp fa-solid fa-check fa-bounce'></i>";
    btn.classList.add("active");

});
clearToCartButton.addEventListener('click', function() {
  if(cartItems < 1) {
    clearToCartButton.style.display = "";
  }else{
    clearToCartButton.style.display = "block";
    cartItems--;
  }
  cartDiv.innerHTML = `${cartItems} <i class="fa-solid fa-cart-shopping"></i>`;
});

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

function Calculate() {
let input = document.getElementById("input");
let h2 = document.getElementById("h2");
let cost = Number(input.value);
let cst = cost;
if(cost < 40 ) {
  cost+=10;
}
document.getElementById("h2").innerHTML = ` <p style="font-size:1.2rem">price of Product = ${cst}</p> <br><p style="font-size:1.2rem">Ship Charges =  $10 </p> <hr> <br><p style="font-size:1.2rem">Total Cost = ${cost} </p>`;
}

//ship
function ship() {
  const ship = document.getElementById("ship");
  ship.style.display = "block";
}
function closee() {
  let ship = document.getElementById("ship");
  ship.style.display = 'none';
}


//meassages
