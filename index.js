//31
let container = document.getElementById('container') 
console.log('my container   --- ', container);

//32
let collTd = document.querySelectorAll('td')

//33
//for(let i = 0; i < collTd.length; i++){
     //collTd[i].innerText = 'ALL GOOD' + i}

//34
function changeHead(){
    let head = document.getElementsByTagName('h1')
    head[0].innerText = 'ALL GOOD'
}

//35
function addRo(){
    let table = document.getElementsByTagName('table')
    let newRow = document.createElement('tr')
    table[0].appendChild(newRow)
}

//36
function addClass(){
let myTrs = document.getElementsByTagName('tr')
for(let i = 0; i < myTrs.length; i++){
    myTrs[i].setAttribute('class', 'test')
}
}

//37
function colorItABit(){
    let myAs = document.getElementsByTagName('a')
    for(let i = 0; i < myAs.length; i++){
        myAs[i].style.backgroundColor = 'red'
    }
}

//38
window.onload = function() {
     (console.log('Page loaded'));
}

//39
function addNewUlLi(){
    let ulist = document.getElementsByTagName('ul') 
    let newLi = document.createElement('li')
    newLi.innerText = 'Step five: ENJOY!'
    ulist[0].appendChild(newLi)
}

//40
let newButton = document.createElement('button')
newButton.innerText = 'EMPTY A LIST'
document.getElementsByTagName('body')[0].appendChild(newButton)

function emptyList(){
    let list = document.getElementsByTagName('li')
     for(let i =0; i <list.length; i++){   
    list[i].innerText = ' '
     }
}
newButton.addEventListener('click', emptyList)