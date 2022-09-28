
const cookieClicker = document.querySelector(`.cookieImg`)
let cookies = 0;

cookieClicker.addEventListener(`click`, function(){
    if (cookieClicker) {
        cookies++;
    }
    document.querySelector(`#score`).innerHTML = cookies;
})

