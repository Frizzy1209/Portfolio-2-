
// The Clicker

const sunGlassClicker = document.querySelector(`.sunGlass`)
let speed = 0;

sunGlassClicker.addEventListener(`click`, function(){
    if (sunGlassClicker) {
        speed++;
    }
    document.querySelector(`#score`).innerHTML = speed;
})


// Upgrade Buttons

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
    }
    document.querySelector(`#score`).innerHTML = speed;
})

btn2.addEventListener(`click`, function (){
    if (speed >= (20)) {
        speed = speed - (20);
        img.src = `Level3.1.png`;
    }
    document.querySelector(`#score`).innerHTML = speed;
})

btn3.addEventListener(`click`, function (){
    if (speed >= (30)) {
        speed = speed - (30);
        img.src = `Level4.png`;
    }
    document.querySelector(`#score`).innerHTML = speed;
})

btn4.addEventListener(`click`, function (){
    if (speed >= (40)) {
        speed = speed - (40);
        img.src = `Level5.png`;
    }
    document.querySelector(`#score`).innerHTML = speed;
})

btn5.addEventListener(`click`, function (){
    if (speed >= (50)) {
        speed = speed - (50);
        img.src = `Level6.png`;
    }
    document.querySelector(`#score`).innerHTML = speed;
})



// Auto Clicker

let speedCount = 0;
let autoClicker = 0;

autoUpdateBtn = document.querySelector(`#autoUpdate`)

autoUpdateBtn.addEventListener(`click`, function (){
    if (speed >= (20)) {
        speed = speed - (20)
    }
    document.querySelector(`#score`).innerHTML = speed;
})


function timer() {
    speedCount = speedCount + autoClicker;
}
setInterval(timer, 2000)