// const colors = ["red", "green", "yellow", "blue", "grey", "orange", "purple", "pink"];

// var colorName = document.querySelector('span')

// function colorHandler(){
//     const randomGeneratedNumber = Math.floor(Math.random() *8)
//     console.log('Chal gaya')
//     console.log(randomGeneratedNumber);
//     colorName.textContent = colors[randomGeneratedNumber];
//     document.styleSheets.body.backgroundColor = colors[randomGeneratedNumber]
// }

const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'violet','grey', 'orange', 'purple']

var colorName = document.querySelector('span')


function colorHandler() {
    const randomGeneratedNumber = Math.floor(Math.random() * 9)
    console.log(randomGeneratedNumber)
    colorName.textContent = colors[randomGeneratedNumber]
    document.body.style.backgroundColor = colors[randomGeneratedNumber]
}
