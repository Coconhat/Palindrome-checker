import { reverseCurseTechnique } from "./reverseword.js";

function check(){
    let value = document.querySelector('.check').value;

    let reverseValue = reverseCurseTechnique(value);

    if (value === reverseValue){
        document.querySelector('.alert').innerHTML = `${value} is a palimdrome!`
    }
    else {
        document.querySelector('.alert').innerHTML = `${value} is NOT a palimdrome!`
    }
    }

let button = document.querySelector('.button');
let enter = document.querySelector('.check');

button.addEventListener('click', check)
enter.addEventListener('keypress', () => {
    if (event.key === 'Enter'){
        check();
    }
})
