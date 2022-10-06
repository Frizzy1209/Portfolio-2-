
// The constants that will be used multible times

const totalSpeedScore = document.querySelector(`#score`)

const sunGlassClicker = document.querySelector(`#sunGlass`)





// The Clicker -----
// every click gives more speed

let speed = 0;

sunGlassClicker.addEventListener
(`click`, function()
    {
        if (sunGlassClicker)
        {
            speed++;
        }
        totalSpeedScore.innerHTML = speed;
    }
)





// Info & Rules window
// pop up window with the rules

const openInfoRulesBtn = document.querySelector(`.openPopUp`)
const closeInfoRulesBtn = document.querySelector(`.closePopUpBtn`)
const showInfoRulesPopUp = document.querySelector(`.popUpInfo`)
const overlay = document.querySelector(`#overlay`)

openInfoRulesBtn.addEventListener
(`click`, function()
    {
        if (showInfoRulesPopUp == null) return
        showInfoRulesPopUp.classList.add(`active`)
        overlay.classList.add(`active`)
    }
)

closeInfoRulesBtn.addEventListener(`click`, function (){
    if (showInfoRulesPopUp == null) return
    showInfoRulesPopUp.classList.remove(`active`)
    overlay.classList.remove(`active`)
})





// Audio player ------

const playMusic1 = document.querySelector(`#playMusic1`)
const playMusic2 = document.querySelector(`#playMusic2`)
const playMusic3 = document.querySelector(`#playMusic3`)

const playBtn1 = document.querySelector(`#play1`)
const pauseBtn1 = document.querySelector(`#pause1`)

const playBtn2 = document.querySelector(`#play2`)
const pauseBtn2 = document.querySelector(`#pause2`)

const playBtn3 = document.querySelector(`#play3`)
const pauseBtn3 = document.querySelector(`#pause3`)

function playAudio1 (){
    playMusic1.play();
}

function pauseAudio1 (){
    playMusic1.pause()
}

function playAudio2 (){
    playMusic2.play();
}

function pauseAudio2 (){
    playMusic2.pause()
}

function playAudio3 (){
    playMusic3.play();
}

function pauseAudio3 (){
    playMusic3.pause()
}


playBtn1.addEventListener(`click`, playAudio1)
pauseBtn1.addEventListener(`click`, pauseAudio1)

playBtn2.addEventListener(`click`, playAudio2)
pauseBtn2.addEventListener(`click`, pauseAudio2)

playBtn3.addEventListener(`click`, playAudio3)
pauseBtn3.addEventListener(`click`, pauseAudio3)





// Upgrade Buttons -----
// The buttons that lets you change teh sunglasses

const img = document.querySelector(`#sunGlass`)

const classMusic1 = document.querySelector(`.music1`)
const classMusic2 = document.querySelector(`.music2`)
const classMusic3 = document.querySelector(`.music3`)

const btn1 = document.querySelector(`#btn1`)
const btn2 = document.querySelector(`#btn2`)
const btn3 = document.querySelector(`#btn3`)
const btn4 = document.querySelector(`#btn4`)
const btn5 = document.querySelector(`#btn5`)


// First upgrade button - tha changes the sunglasses

btn1.addEventListener
(`click`, function ()
    {
        if (speed >= (500))
        {
            speed = speed - (500);
            img.src = `Level2.png`;
            btn1.style.display = "none";
            classMusic1.style.visibility = "visible"
        }
        totalSpeedScore.innerHTML = speed;
    }
)

// Second upgrade button - tha changes the sunglasses

btn2.addEventListener
(`click`, function ()
    {
        if (speed >= (1500))
        {
            speed = speed - (1500);
            img.src = `Level3.1.png`;
            btn2.style.display = "none";
        }
        totalSpeedScore.innerHTML = speed;
    }
)

// Third upgrade button - tha changes the sunglasses

btn3.addEventListener
(`click`, function ()
    {
        if (speed >= (5000))
        {
            speed = speed - (5000);
            img.src = `Level4.png`;
            btn3.style.display = "none";
            classMusic2.style.visibility = "visible"
        }
        totalSpeedScore.innerHTML = speed;
    }
)

// Forth upgrade button - tha changes the sunglasses

btn4.addEventListener
(`click`, function ()
    {
        if (speed >= (15000))
        {
            speed = speed - (15000);
            img.src = `Level5.png`;
            btn4.style.display = "none";
        }
        totalSpeedScore.innerHTML = speed;
    }
)

// Fifth upgrade button - tha changes the sunglasses

btn5.addEventListener
(`click`, function ()
    {
        if (speed >= (25000))
        {
            speed = speed - (25000);
            img.src = `Level6.png`;
            btn5.style.display = "none";
            classMusic3.style.visibility = "visible"
        }
        totalSpeedScore.innerHTML = speed;
    }
)





// Auto Clicker -----
// Street credz button
// Automatic "clicker"

let autoClicker = 0;

const autoCLickButton = document.querySelector(`#autoClickBtn`)
const levelAutoClick = document.querySelector(`#autoClickLevel`)
const costAutoCLick = document.querySelector(`#autoClickCost`)


autoCLickButton.addEventListener
(`click`, function ()
    {
        if (speed >= ((autoClicker + 1) * 65))
        {
            speed = speed - (autoClicker + 1) * 65;
            autoClicker = autoClicker + 1;
            setInterval(function ()
            {
                totalSpeedScore.innerHTML = speed++
            }, 1000);
        }
        totalSpeedScore.innerHTML = speed;
        levelAutoClick.innerHTML = autoClicker;
        costAutoCLick.innerHTML = (autoClicker + 1) * 65;
    }
)





// Multi Clicker -----
// Multi click button
// Lets every click have more value

let multiClicker = 0;

const multiClickBtn = document.querySelector(`#multiClickBtn`)
const amountOfMultiCLick = document.querySelector(`#multiClick`)
const costOfMultiClick = document.querySelector(`#multiClickCost`)


multiClickBtn.addEventListener
(`click`, function ()
    {
        if (speed >= ((multiClicker + 1) * 35))
        {
            speed = speed - (multiClicker + 1) * 35;
            multiClicker = multiClicker + 1;
        }
            sunGlassClicker.addEventListener
            (`click`, function ()
                {
                    speed++
                }
            )
        totalSpeedScore.innerHTML = speed;
        amountOfMultiCLick.innerHTML = multiClicker;
        costOfMultiClick.innerHTML = (multiClicker + 1) * 35;
    }
)