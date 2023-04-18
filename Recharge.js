let network = document.getElementById("network")
let amount = document.getElementById("amount")
let show = document.getElementById("result")
let show1 = document.getElementById("result1")
let input1 = document.getElementById("pin")
let cardpin = Math.floor(Math.random() * 1000000000000000)
function generate(){
    if (network.value === "empty" && amount.value === "empty1") {
        alert("Select Your Network Provider and Airtime Amount")
    } else if (amount.value === "empty1"){
        alert("Select Airtime Amount")
    } else if (network.value === "empty") {
        alert("Select Your Network Provider")
    
    } else {
        show.innerHTML = cardpin;
        console.log(cardpin);
    }    
}

function load(){
    if (network.value === "GLO" && input1.value.startsWith("*123*") && input1.value.includes(cardpin) && input1.value.endsWith("#")) {
       alert("You have successfully recharge"+" " + "#"+ amount.value +" "+ network.value) 
    }
     else if (network.value === "MTN" && input1.value.startsWith("*555*") && input1.value.includes(cardpin) && input1.value.endsWith("#")) {
       alert("You have successfully recharge"+" " + "#"+ amount.value +" "+ network.value) 
    }
    else if (network.value === "AIRTEL" && input1.value.startsWith("*126*") && input1.value.includes(cardpin) && input1.value.endsWith("#")) {
       alert("You have successfully recharge"+" " + "#"+ amount.value +" "+ network.value) 
    }
    else if (network.value === "9MOBILE" && input1.value.startsWith("*222*") && input1.value.includes(cardpin) && input1.value.endsWith("#")) {
       alert("You have successfully recharge"+" " + "#"+ amount.value +" "+ network.value) 
    } else {
        alert("The recharge card is invalid")
    }
}