
// The constants that will be used multible times

const totalSpeedScore = document.querySelector(`#score`)

const sunGlassClicker = document.querySelector(`#sunGlass`)




// The Clicker -----

let speed = 0;

sunGlassClicker.addEventListener(`click`, function()
{
    if (sunGlassClicker)
    {
        speed++;
    }
    totalSpeedScore.innerHTML = speed;
})






// Upgrade Buttons -----
// The buttons that lets you change teh sunglasses


const img = document.querySelector(`#sunGlass`)

const btn1 = document.querySelector(`#btn1`)
const btn2 = document.querySelector(`#btn2`)
const btn3 = document.querySelector(`#btn3`)
const btn4 = document.querySelector(`#btn4`)
const btn5 = document.querySelector(`#btn5`)


// First upgrade button - tha changes the sunglasses

btn1.addEventListener(`click`, function ()
{
    if (speed >= (10))
    {
        speed = speed - (10);
        img.src = `Level2.png`;
        btn1.style.display = "none";
    }
    totalSpeedScore.innerHTML = speed;
})

// Second upgrade button - tha changes the sunglasses

btn2.addEventListener(`click`, function ()
{
    if (speed >= (20))
    {
        speed = speed - (20);
        img.src = `Level3.1.png`;
        btn2.style.display = "none";
    }
    totalSpeedScore.innerHTML = speed;
})

// Third upgrade button - tha changes the sunglasses

btn3.addEventListener(`click`, function ()
{
    if (speed >= (30))
    {
        speed = speed - (30);
        img.src = `Level4.png`;
        btn3.style.display = "none";
    }
    totalSpeedScore.innerHTML = speed;
})

// Forth upgrade button - tha changes the sunglasses

btn4.addEventListener(`click`, function ()
{
    if (speed >= (40))
    {
        speed = speed - (40);
        img.src = `Level5.png`;
        btn4.style.display = "none";
    }
    totalSpeedScore.innerHTML = speed;
})

// Fifth upgrade button - tha changes the sunglasses

btn5.addEventListener(`click`, function ()
{
    if (speed >= (50))
    {
        speed = speed - (50);
        img.src = `Level6.png`;
        btn5.style.display = "none";
    }
    totalSpeedScore.innerHTML = speed;
})








// Auto Clicker -----
// Street credz button
// Automatic "clicker"


let autoClicker = 0;

const autoCLickButton = document.querySelector(`#autoClickBtn`)
const levelAutoClick = document.querySelector(`#autoClickLevel`)
const costAutoCLick = document.querySelector(`#autoClickCost`)


autoCLickButton.addEventListener(`click`, function ()
{
    if (speed >= ((autoClicker + 1) * 75))
    {
        speed = speed - (autoClicker + 1) * 75;
        autoClicker = autoClicker + 1;
        setInterval(function ()
        {
            totalSpeedScore.innerHTML = speed++
        }, 2000);
    }
    totalSpeedScore.innerHTML = speed;
    levelAutoClick.innerHTML = autoClicker;
    costAutoCLick.innerHTML = (autoClicker + 1) * 75;
})









// Multi Clicker -----
// Multi click button
// Lets every click have more value


let multiClicker = 0;

const multiClickBtn = document.querySelector(`#multiClickBtn`)
const amountOfMultiCLick = document.querySelector(`#multiClick`)
const costOfMultiClick = document.querySelector(`#multiClickCost`)

multiClickBtn.addEventListener(`click`, function ()
{
    if (speed >= ((multiClicker + 1) * 10))
    {
        speed = speed - (multiClicker + 1) * 10;
        multiClicker = multiClicker + 1;
    }
    totalSpeedScore.innerHTML = speed;
    amountOfMultiCLick.innerHTML = multiClicker;
    costOfMultiClick.innerHTML = (multiClicker + 1) * 10;
})