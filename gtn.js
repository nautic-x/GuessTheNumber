"use strict";

let input = document.getElementById("inp")

let display = document.getElementById("header-two")

let submit = document.getElementById("btn")

let random = Math.floor(Math.random() * 20)
console.log(random)

const checkNumber = function (){
    let x =  Number(input.value)
    
    if (x === random){
        display.innerHTML = "YAY!! YOU GOT IT"
    }

    if (x > random){
        display.innerHTML = "TOO HIGH, GO LOWER"
    }

    if (x < random){
        display.innerHTML = "TOO LOWER, GO HIGHER!"
    }
}

submit.addEventListener("click", checkNumber)


const changeColor = function(){
    header.style.color = "green"
}

const changeColorOut = function(){
    header.style.color = "black"
}

header.addEventListener("mouseout",changeColorOut)
header.addEventListener("mouseover",changeColor)

let inp = document.getElementById("inp")
   inp.onclick = function(){
      inp.style.backgroundColor = "Yellow"
   }
   inp.onblur = function(){
      inp.style.backgroundColor = "White"
   }