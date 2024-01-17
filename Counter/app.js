let numberPara = document.querySelector('.number');
console.log(numberPara);

let number = 0;

function dHandler(){
    if (number >= -100 ){
        number--;
        numberPara.textContent = number;
        numberPara.style.color = "red"
    }
}

function rHandler(){
     number = 0 
     numberPara.textContent = number;
     numberPara.style.color = "blue";

}

function iHandler(){
        ++number;
        numberPara.textContent = number;
        numberPara.style.color = "green";
}