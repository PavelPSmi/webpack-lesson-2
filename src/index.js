import { timers } from "./timer/timers.js";
import { timersFuncAll } from "./timer/actions.js";
import { calculate } from "./calc/calculate.js";
import { calculateLogic } from './calc/calculateLogic.js'
import './css/style.css'

const header = document.getElementById('header')
const main = document.querySelector('main')


header.innerHTML = `<nav>
<a class='calc'>Calc</a>
<a class='timer'>Timer</a>
</nav>`;


const a = document.querySelectorAll('a')
const timer = document.querySelector(".timer");
const calc = document.querySelector('.calc')


const clickNav = (e) => {

    if (e.target == timer) {
        // e.target.classList.toggle("a-nav");
        main.innerHTML = timers();
        timersFuncAll()
    } else if (e.target == calc) {
        
        main.innerText = ``;
        main.innerHTML = calculate();
        calculateLogic()
    }

}
a.forEach(item => {
    item.addEventListener("click", clickNav);
    // item.classList.remove("a-nav");
})




