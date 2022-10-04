
// The Clicker -----

const sunGlassClicker = document.querySelector(`.sunGlass`)
let speed = 0;

sunGlassClicker.addEventListener(`click`, function(){
    if (sunGlassClicker) {
        speed++;
    }
    document.querySelector(`#score`).innerHTML = speed;
})



// Upgrade Buttons -----

let img = document.querySelector(`.sunGlass`)

/* let btn1 = document.querySelector(`#btn1`) */
let btn1 = document.querySelector(`#btn1`)
let btn2 = document.querySelector(`#btn2`)
let btn3 = document.querySelector(`#btn3`)
let btn4 = document.querySelector(`#btn4`)
let btn5 = document.querySelector(`#btn5`)


btn1.addEventListener(`click`, function (){
    if (speed >= (10)) {
        speed = speed - (10);
        img.src = `Level2.png`;
        btn1.style.display = "none";
    }
    document.querySelector(`#score`).innerHTML = speed;
})

btn2.addEventListener(`click`, function (){
    if (speed >= (20)) {
        speed = speed - (20);
        img.src = `Level3.1.png`;
        btn2.style.display = "none";
    }
    document.querySelector(`#score`).innerHTML = speed;
})

btn3.addEventListener(`click`, function (){
    if (speed >= (30)) {
        speed = speed - (30);
        img.src = `Level4.png`;
        btn3.style.display = "none";
    }
    document.querySelector(`#score`).innerHTML = speed;
})

btn4.addEventListener(`click`, function (){
    if (speed >= (40)) {
        speed = speed - (40);
        img.src = `Level5.png`;
        btn4.style.display = "none";
    }
    document.querySelector(`#score`).innerHTML = speed;
})

btn5.addEventListener(`click`, function (){
    if (speed >= (50)) {
        speed = speed - (50);
        img.src = `Level6.png`;
        btn5.style.display = "none";
    }
    document.querySelector(`#score`).innerHTML = speed;
})



// Auto Clicker -----

let autoClicker = 0;

let autoUpdateBtn = document.querySelector(`#streetCredBtn`)

autoUpdateBtn.addEventListener(`click`, function (){
    if (speed >= ((autoClicker + 1) * 50)) {
        speed = speed - (autoClicker + 1) * 50;
        autoClicker = autoClicker + 1;
    }
    document.querySelector(`#score`).innerHTML = speed;
    document.querySelector(`#streetCredLevel`).innerHTML = autoClicker;
    document.querySelector(`#nextLevelCost`).innerHTML = (autoClicker + 1) * 50;
})



// Multi Clicker -----

let multiClicker = 0;

let multiClickBtn = document.querySelector(`#multiClickBtn`)

multiClickBtn.addEventListener(`click`, function (){
    if (speed >= ((multiClicker + 1) * 25)) {
        speed = speed - (multiClicker + 1) * 25;
        multiClicker = multiClicker + 1;
    }
    document.querySelector(`#score`).innerHTML = speed;
    document.querySelector(`#multiClick`).innerHTML = multiClicker;
    document.querySelector(`#multiClickCost`).innerHTML = (multiClicker + 1) * 25;
})