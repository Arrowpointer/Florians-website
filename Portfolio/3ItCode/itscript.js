const itButtonOne = document.getElementById('itbutton1');
const itbuttonclose = document.getElementById('itbutton1close');

const popoutOne = document.getElementById('popoutwindow1');


const itButtonTwo = document.getElementById('itbutton2');
const itbuttoncloseTwo = document.getElementById('itbutton2close');

const popoutTwo = document.getElementById('popoutwindow2');



itButtonOne.addEventListener('click', () => {
        popoutOne.style.visibility='visible';
        itButtonOne.style.visibility = 'hidden';
})

itbuttonclose.addEventListener('click', () => {
    popoutOne.style.visibility='hidden';
    itButtonOne.style.visibility = 'visible';
})



itButtonTwo.addEventListener('click', () => {
    popoutTwo.style.visibility='visible';
    itButtonTwo.style.visibility = 'hidden';
})

itbuttoncloseTwo.addEventListener('click', () => {
popoutTwo.style.visibility='hidden';
itButtonTwo.style.visibility = 'visible';
})