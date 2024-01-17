// const listName = ["All","Breakfast","Lunch","Icecream"];
// const btnList = document.querySelector('.btnlist')
// const foodItems = [
//     {
//         imgSrc : './asset/All-1.jpg',
//         foodName: 'Dinner Double',
//         price: '$20.99',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, nemo unde natus tenetur at porro!',
//         category: 'lunch'
    
//     },
//     {
//         imgSrc : './asset/All-2/jpg',
//         foodName : 'Dinner Double',
//         price : '$20.99',
//         description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, nemo unde natus tenetur at porro!',
//         category: 'Breakfast'
//     },
//     {
//         imgSrc: './asset/breakfast-2.jpg',
//         foodName: 'Dinner Double',
//         price: '$20.99',
//         descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
//         category: 'breakfast'
//     },
//     {
//         imgSrc: './asset/breakfast-4.jpg',
//         foodName: 'Dinner Double',
//         price: '$20.99',
//         descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
//         category: 'breakfast'
//     },
//     {
//         imgSrc: './asset/breakfast-3.jpg',
//         foodName: 'Dinner Double',
//         price: '$20.99',
//         descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
//         category: 'breakfast'
//     },
//     {
//         imgSrc: './asset/Fast-Food-1.jpg',
//         foodName: 'Dinner Double',
//         price: '$20.99',
//         descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
//         category: 'lunch'
//     },
//     {
//         imgSrc: './asset/Fast-Food-3.jpg',
//         foodName: 'Dinner Double',
//         price: '$20.99',
//         descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
//         category: 'lunch'
//     },
//     {
//         imgSrc: './asset/ice-cream-2.jpg',
//         foodName: 'Dinner Double',
//         price: '$20.99',
//         descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
//         category: 'sweets'
//     },
//     {
//         imgSrc: './asset/ice-cream-3.jpg',
//         foodName: 'Dinner Double',
//         price: '$20.99',
//         descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
//         category: 'sweets'
//     },
//     {
//         imgSrc: './asset/ice-cream-4.jpg',
//         foodName: 'All in one ',
//         price: '$7.99',
//         descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
//         category: 'sweets'
//     },
//     {
//         imgSrc: './asset/ice-cream.jpg',
//         foodName: 'Strawberry',
//         price: '$5.99',
//         descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
//         category: 'sweets'
//     },
//     {
//         imgSrc: './asset/pizza-1.jpg',
//         foodName: 'Pizza Yummy Cheese',
//         price: '$50.99',
//         descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
//         category: 'lunch'
//     },
//     {
//         imgSrc: './asset/pizza-2.jpg',
//         foodName: 'Pizza Plus',
//         price: '$40.99',
//         descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
//         category: 'lunch'
//     },
// ]

// listName.forEach((val) =>{
//     btnList.parent.innerHTML += `<button onclick="showItems('${val.toLocaleLowerCase()}')">${val}</button>` 
// })

// let foodList =document.querySelectorAll('.foodList');
// function showItems(categoryName){

//     foodList.innerHTML = ''
//     let filteredItems = foodItems.filter((val) =>{
//         if(categoryName == val.category){
//             return true;
//         }
//     });
//     if(filteredItems = ""){
//         filteredItems = foodItems;
//     }
//     filteredItems.forEach((food) =>{
//         foodItems.innerHTML += `<div class="foodItems">
//         <img src= "${food.imgScr}" alt="">
//             <div class="paraList">
//             <p id="para1">${food.foodName}<span>${food.price}</span></p>
//             <p id="para2">${food.description}</p>
//             </div>
//             </div>`
//     });
// }
// showItems(listName)

const listNames = ['All','Breakfast','Lunch','Sweets'];
const btnlistParent = document.querySelector('.btnlist');
const foodItems = [
    {
        imgSrc: './Assets/All-1.jpg',
        foodName: 'Dinner Double',
        price: '$20.99',
        descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
        category: 'lunch'
    },
    {
        imgSrc: './Assets/breakfast-3.jpg',
        foodName: 'Dinner Double',
        price: '$20.99',
        descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
        category: 'breakfast'
    },
    {
        imgSrc: './Assets/breakfast-2.jpg',
        foodName: 'Dinner Double',
        price: '$20.99',
        descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
        category: 'breakfast'
    },
    {
        imgSrc: './Assets/breakfast-4.jpg',
        foodName: 'Dinner Double',
        price: '$20.99',
        descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
        category: 'breakfast'
    },
    {
        imgSrc: './Assets/breakfast-3.jpg',
        foodName: 'Dinner Double',
        price: '$20.99',
        descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
        category: 'breakfast'
    },
    {
        imgSrc: './Assets/Fast-Food-1.jpg',
        foodName: 'Dinner Double',
        price: '$20.99',
        descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
        category: 'lunch'
    },
    {
        imgSrc: './Assets/Fast-Food-3.jpg',
        foodName: 'Dinner Double',
        price: '$20.99',
        descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
        category: 'lunch'
    },
    {
        imgSrc: './Assets/ice-cream-2.jpg',
        foodName: 'Dinner Double',
        price: '$20.99',
        descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
        category: 'sweets'
    },
    {
        imgSrc: './Assets/ice-cream-3.jpg',
        foodName: 'Dinner Double',
        price: '$20.99',
        descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
        category: 'sweets'
    },
    {
        imgSrc: './Assets/ice-cream-4.jpg',
        foodName: 'All in one ',
        price: '$7.99',
        descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
        category: 'sweets'
    },
    {
        imgSrc: './Assets/ice-cream.jpg',
        foodName: 'Strawberry',
        price: '$5.99',
        descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
        category: 'sweets'
    },
    {
        imgSrc: './Assets/pizza-1.jpg',
        foodName: 'Pizza Yummy Cheese',
        price: '$50.99',
        descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
        category: 'lunch'
    },
    {
        imgSrc: './Assets/pizza-2.jpg',
        foodName: 'Pizza Plus',
        price: '$40.99',
        descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore fuga iure eaque voluptas eius.',
        category: 'lunch'
    },
]
listNames.forEach((ele) => {
    btnlistParent.innerHTML += `<button onclick="showItems('${ele.toLocaleLowerCase()}')">${ele}</button>`
})
let foodList = document.querySelector('.foodList')
function showItems(categoryName){
    
    foodList.innerHTML = ''
    let filteredItems = foodItems.filter((ele) => {
        if(categoryName == ele.category){
            return true
        }
    })
    if(filteredItems == ""){
        filteredItems = foodItems;
    }
    filteredItems.forEach((food) => {
       foodList.innerHTML += `<div class="foodItems">
       <img src="${food.imgSrc}" alt="">
       <div class="paralist">
           <p id="para1">${food.foodName} <span>${food.price}</span></p>
           <p id="para2">${food.descript}</p>
       </div>
   </div>`
    })
}
showItems(listNames)
