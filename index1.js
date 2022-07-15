/* JS EXERCISES
21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
22) Create an object with properties such name, surname, email
23) Delete the email property from the previously created object
24) Create an array with 10 strings in it
25) Print in the console every string from the previous array
26) Create an array with 100 random numbers in it
27) Write a function to get the maximum and minimum values from the previously created array
28) Create an array of arrays, in which every array has 10 random numbers
29) Create a function that gets 2 arrays as parameters and returns the longest one
30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
*/
console.log("\n--------------------------n.21--------------------------");

let x = "John"
let y = "Doe"
console.log(x + ' <> '+ y);

console.log("\n--------------------------n.22--------------------------");

let me = {
  name: "Tereza",
  surname: "Dankova",
  email: "tereza.dankova@ied.edu"
}
console.log(me);

console.log("\n--------------------------n.23--------------------------\n");

delete me.email
console.log(me.email);

console.log("\n--------------------------n.24--------------------------\n");

let myArr = ['1','2','3','4','5','6','7','8','9','10']
console.log(myArr.length)

console.log("\n--------------------------n.25--------------------------\n");

for(let i = 0; i < myArr.length; i++){
  console.log(myArr[i]);
}

console.log("\n--------------------------n.26--------------------------\n");

let myRanArr = []
for(let i = 0; i < 100; i++){
  let myRan = Math.floor(Math.random() * 101)
  myRanArr.push(myRan)
}
console.log(myRanArr);

console.log("\n--------------------------n.27--------------------------\n");

let myMinMax = function(arr){
  return 'Max: ' + Math.max(...myRanArr) + ' and min: ' + Math.min(...myRanArr)
}
console.log(myMinMax());

console.log("\n--------------------------n.28--------------------------\n");

let newArr = []
let helpArr= []

for(let i = 0;  i < 100; i++){
    let myRan = Math.floor(Math.random() * 101)
    helpArr.push(myRan)
    if (helpArr.length === 10){
      for (let y = 0; y < 10; y++){
      newArr.push(helpArr.slice(0,10))}
    }
} 
console.log("Every array has 10 random numbers", newArr);

console.log("\n--------------------------n.29--------------------------\n");
//29) Create a function that gets 2 arrays as parameters and returns the longest one
function verifyArr(a, b){
  if (a.length > b.length){
  return a
} else {
   return b
}
}
console.log('which one is longer: ', verifyArr(myArr, myRanArr));

console.log("\n--------------------------n.30--------------------------\n");
//30) Create a function that gets 2 arrays of numbers as parameters and returns the one w
let firstArr = [5, 3, 5, 7, 8, 8, 9]
let secondArr = [7,9,8,8,9,9,7,7,7]

function arrOfNum (c, z){
    let i = c.reduce((a, b) => a + b, 0)
    let x = z.reduce((a, b) => a + b, 0)
    if (i > x ){
    return i
 } else {
     return x
 }
}

console.log('The higher sum of values: ', arrOfNum(firstArr, secondArr));

console.log("\n--------------------------------------------------------\n");