'use strict'
// Questions:

// Change document background color to
// silver
document.body.style.backgroundColor = '#c0c0c0'

// Change the font color for h1 title tag to
// green
document.getElementById('title').style.color = '#076d08'
// Change the font case for h3 title tags to
// uppercase
const h3 = document.querySelectorAll('h3')
console.log(h3)
for(let h of h3){
    h.style.textTransform ='uppercase'

}
// Add one more fruit to the fruits list
// const list = document.querySelector('#fruList')
const fruit = document.createElement('li')
fruit.appendChild(document.createTextNode('Oranges'))
document.getElementById('fruList').appendChild(fruit);
// Add one more vegetable to the vegetables
// list
const veg = document.createElement('li')
veg.appendChild(document.createTextNode('Onions'))
document.getElementById('vegList').appendChild(veg);