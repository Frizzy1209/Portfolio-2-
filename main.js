
const sunGlassClicker = document.querySelector(`.sunGlass`)
let speed = 0;

sunGlassClicker.addEventListener(`click`, function(){
    if (sunGlassClicker) {
        speed++;
    }
    document.querySelector(`#score`).innerHTML = speed;
})

// Buttons

let img = document.querySelector(`.sunGlass`)

let btn1 = document.querySelector(`#btn1`)
let btn2 = document.querySelector(`#btn2`)
let btn3 = document.querySelector(`#btn3`)
let btn4 = document.querySelector(`#btn4`)
let btn5 = document.querySelector(`#btn5`)
let btn6 = document.querySelector(`#btn6`)

btn1.addEventListener(`click`, function (){
    img.src = `Level1.png`;
})

btn2.addEventListener(`click`, function (){
    img.src = `Level2.png`;
})

btn3.addEventListener(`click`, function (){
    img.src = `Level3.png`;
})

btn4.addEventListener(`click`, function (){
    img.src = `Level4.png`;
})

btn5.addEventListener(`click`, function (){
    img.src = `Level5.png`;
})

btn6.addEventListener(`click`, function (){
    img.src = `Level6.png`;
})


