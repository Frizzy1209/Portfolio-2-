
const sunGlassClicker = document.querySelector(`.sunGlass`)
let speed = 0;

sunGlassClicker.addEventListener(`click`, function(){
    if (sunGlassClicker) {
        speed++;
    }
    document.querySelector(`#score`).innerHTML = speed;
})

