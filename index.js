const display = document.querySelector ('.display')
const controlBtns = document.querySelector('.controls').children
const allSymbol = ['x', '-', '%', '+', 'C', '=', '÷', '⬅']


let firstValue = ''
let secondValue = ''
let symbol = ''
let result = ''

const calculate =  ()=>{

    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)

    if(symbol == '+') result = firstValue + secondValue
    if(symbol == '-') result = firstValue - secondValue
    if(symbol == '÷') result = firstValue / secondValue
    if(symbol == '%') result = firstValue/100 * secondValue
    if (symbol == 'x') result = firstValue * secondValue

    display.innerText = result
    firstValue = result
    secondValue = ''

}


for(let button of controlBtns){
    button.addEventListener('click', ()=>{
        const {innerText:btnValue} = button

        const btnValueIsSymbol = allSymbol.includes(btnValue)

         // Backspace Functionality
        if(btnValue == '⬅'){
            return display.innerText = display.innerText.slice(0, -1)
         }

        //Clear Button Functionality
         if(btnValue == 'C'){
           firstValue = secondValue = symbol = ''
           return display.innerText = ''
        }

        if(firstValue && btnValueIsSymbol){
            secondValue && calculate()
            symbol = btnValue
        } 
        else if(!symbol) firstValue+= btnValue
        else if(symbol)  secondValue+= btnValue


        if(btnValue !== '=') display.innerText += btnValue

    })
}

const hrs = document.querySelector('.hour')
const mins = document.querySelector('.minute')

const updateTime = ()=>{

    const currentTime = new Date()
    let currentHour = currentTime.getHours()
    const currentMinute = currentTime.getMinutes()

    

    hrs.innerText = currentHour.toString()
    mins.innerText = currentMinute.toString().padStart(2, '0')
}

setInterval(updateTime, 1000)
updateTime()