const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

buttons.addEventListener('click', trafficLight);

const turnOn = {
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':      () => img.src = './img/verde.png',
    'automatic':  () => intervalId = setInterval( changeColor, 1000)    
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}


const nextIndex = () => 
    colorIndex = colorIndex < 2 ? ++colorIndex : 0;



const stopAutomatic = () => {
    clearInterval (intervalId);
}



