
// navbar ressponsiveness 
let menu = document.querySelector('.fa-bars');
let navRight = document.querySelector('.nav-right');

menu.onclick = () =>{
     menu.classList.toggle('fa-times');
     navRight.classList.toggle('active');
}

// bank information show hide

// selecting the images of banks
let unionImg = document.querySelector('.unionImg');
let bitcoinImg = document.querySelector('.bitcoinImg');
let coinsImg = document.querySelector('.coinsImg');
let gcashImg = document.querySelector('.gcashImg');
let paymayaImg = document.querySelector('.paymayaImg');
let paypalImg = document.querySelector('.paypalImg');

// selecting the information of bank
let unionBank = document.querySelector('.union-bank');
let bitcoin = document.querySelector('.bitcoin');
let coinsph = document.querySelector('.coins-ph');
let gcash = document.querySelector('.gcash');
let paymaya = document.querySelector('.paymaya');
let paypal = document.querySelector('.paypal');


// event on click to show information of the bank
unionImg.onclick = () =>{
     unionBank.classList.toggle('hover');
     bitcoin.classList.remove('hover');
     coinsph.classList.remove('hover');
     gcash.classList.remove('hover');
     paymaya.classList.remove('hover');
     paypal.classList.remove('hover');
}

// event on hover to show information of the bank
unionImg.onmouseover = () =>{
     unionBank.classList.toggle('hover');
     bitcoin.classList.remove('hover');
     coinsph.classList.remove('hover');
     gcash.classList.remove('hover');
     paymaya.classList.remove('hover');
     paypal.classList.remove('hover');
}
// event on click to show information of the bank
bitcoinImg.onclick = () =>{
     unionBank.classList.remove('hover');
     bitcoin.classList.toggle('hover');
     coinsph.classList.remove('hover');
     gcash.classList.remove('hover');
     paymaya.classList.remove('hover');
     paypal.classList.remove('hover');
}

// event on hover to show information of the bank
bitcoinImg.onmouseover = () =>{
     unionBank.classList.remove('hover');
     bitcoin.classList.toggle('hover');
     coinsph.classList.remove('hover');
     gcash.classList.remove('hover');
     paymaya.classList.remove('hover');
     paypal.classList.remove('hover');
}
// event on click to show information of the bank
coinsImg.onclick = () =>{
     unionBank.classList.remove('hover');
     bitcoin.classList.remove('hover');
     coinsph.classList.toggle('hover');
     gcash.classList.remove('hover');
     paymaya.classList.remove('hover');
     paypal.classList.remove('hover');
}

// event on hover to show information of the bank
coinsImg.onmouseover = () =>{
     unionBank.classList.remove('hover');
     bitcoin.classList.remove('hover');
     coinsph.classList.toggle('hover');
     gcash.classList.remove('hover');
     paymaya.classList.remove('hover');
     paypal.classList.remove('hover');
}
// event on click to show information of the bank
gcashImg.onclick = () =>{
     unionBank.classList.remove('hover');
     bitcoin.classList.remove('hover');
     coinsph.classList.remove('hover');
     gcash.classList.toggle('hover');
     paymaya.classList.remove('hover');
     paypal.classList.remove('hover');
}

// event on hover to show information of the bank
gcashImg.onmouseover = () =>{
     unionBank.classList.remove('hover');
     bitcoin.classList.remove('hover');
     coinsph.classList.remove('hover');
     gcash.classList.toggle('hover');
     paymaya.classList.remove('hover');
     paypal.classList.remove('hover');
}
// event on click to show information of the bank
paymayaImg.onclick = () =>{
     unionBank.classList.remove('hover');
     bitcoin.classList.remove('hover');
     coinsph.classList.remove('hover');
     gcash.classList.remove('hover');
     paymaya.classList.remove('hover');
     paypal.classList.toggle('hover');
}

// event on hover to show information of the bank
paymayaImg.onmouseover = () =>{
     unionBank.classList.remove('hover');
     bitcoin.classList.remove('hover');
     coinsph.classList.remove('hover');
     gcash.classList.remove('hover');
     paymaya.classList.toggle('hover');
     paypal.classList.remove('hover');
}
// event on click to show information of the bank
paypalImg.onclick = () =>{
     unionBank.classList.remove('hover');
     bitcoin.classList.remove('hover');
     coinsph.classList.remove('hover');
     gcash.classList.remove('hover');
     paymaya.classList.remove('hover');
     paypal.classList.toggle('hover');
}

// event on hover to show information of the bank
paypalImg.onmouseover = () =>{
     unionBank.classList.remove('hover');
     bitcoin.classList.remove('hover');
     coinsph.classList.remove('hover');
     gcash.classList.remove('hover');
     paymaya.classList.remove('hover');
     paypal.classList.toggle('hover');
}
