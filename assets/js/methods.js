/* let arr = [50 , 70 , 30 ,10]
 *//* let deleteItem = arr[arr.length-1];
console.log(deleteItem)
let arr2=[];
for(let i=0 ; i< arr.length-1 ; i++){
  arr2[i] = arr[i]
}
arr = arr2;
console.log(arr) */

/* let deleteItem= arr.pop();

console.log(deleteItem)
console.log(arr) */

/* let arr = [50 , 70 , 30 ,10]
let deleteItem = arr[0];
console.log(deleteItem)
let arr2=[];
for(let i=1 ; i< arr.length ; i++){
    arr2[i-1] = arr[i]
}
arr = arr2;
console.log(arr) */


/* let arr = [50 , 70 , 30 ,10]
let deleteItem = arr.shift();

console.log(deleteItem)
console.log(arr) */

/* let arr = [50 , 70 , 30 ,10]; */
/* let arr2=[];

arr2=[20 , 40]

for (let index = 0; index < arr.length; index++) {
    arr2[index+2] = arr[index]
}

arr = arr2;

console.log(arr) */

/* console.log(arr.unshift(20 , 40))

console.log(arr) */


/* let arr = [50 , 70 , 30 ,10]; */

/* arr[arr.length]= 90;
arr[arr.length]= 100;

console.log(arr) */

/* console.log(arr.push(90 , 100))

console.log(arr) */


/* let season = ["Spring", "Autumn", "Summer", "Winter"];
let str = "";
for (let index = 0; index < season.length; index++) {
    str = str + season[index]
}

console.log(str) */


/* let season = ["Spring", "Autumn", "Summer", "Winter"];

console.log(season.join('/')) */

/* let arr1=["C","C++","Python"]; 
let arr2=["Java","JavaScript","Android"];  */

/* let arr3 = arr1;

let length = arr1.length

console.log(arr1.length)

3 4 5
for (let index = 0; index < arr2.length; index++) {
    arr3[index +length] = arr2 [index]
}

console.log(arr3)
console.log(arr1) */

/* console.log(arr1.concat(arr2)) */

/* let arr = [10 , 20 , 30] */

/* console.log(Array.isArray(arr)) */

/* let arr = [10 , 20 , 30 ,20] */
/* let i=-1;
for (let index = 0; index < arr.length; index++) {
    if (arr[index] == 50) {
        i = index;
        break;
    }
}

console.log(i) */

/* console.log(arr.indexOf(20 , 2)) */

/* let result = arr.find((element)=>{
return element > 10;
})

console.log(result) */

/* console.log(arr.splice(1 , 0 , "delete"))

console.log(arr) */

/* console.log(arr.slice(1 , 3))

console.log(arr) */

/* let arr = [10 , 20 , 30 ,20] */

/* console.log(arr.sort().reverse())
console.log(arr) */

/* let result = arr.every((element)=>{
    return element > 10;
})

console.log(result) */

/* arr.forEach((element)=>{

}) */


/* let arr = [10 , 20 , 30 ,20]

let result = arr.map((element)=>{
    return element *2;
})

console.log(result) */

/* let arr = [10 , 20 , 33 ,21] */

/* let result = arr.filter(element => {
    return element % 2 == 0
})

console.log(result) */

/* console.log(arr.fill(0 , 2)) */


/* var arr = [2, 3, 1, 5];
var a = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // accumulator=11
document.write("The sum of the array elements is: " + a);
// The sum of the array elements is: 11



function fun(num) {
    if (num==1) {
        return 1;
    }
    else{return num * fun(num-1)}
} */

/* 
5 * (4 * (3 * (2 * 1)))
 */


/* var arr = ["AngularJS", "Node.js", "JQuery", "Bootstrap"]
    // place from 0th position, the elements between 1st and 3rd position. 
var result = arr.copyWithin(1, 1, 3); // ["AngularJS" , "Node.js", "JQuery", "Bootstrap" ]
console.log(result);  */

/* let str = "Do visit facebook because facebook is the best learning platform"
let m = str.replace("facebook", "Errorsea");
console.log(m) */

/* var x = "Do visit facebook because facebook is the best learning platform";
var arr = x.split(" ");

console.log(arr) */

/* var x = "HTML, CSS, JAVASCRIPT";
var result = x.slice(6,9);
console.log(x)  */

/* var x = 123;
var result = x.toString(); 
console.log(x) */

/* var x = "Errorsea is love" */
/* console.log(x.search("love")) */
/* x.charAt(0) */

/* var x = "Errorsea test";
var result = x.valueOf();
console.log(result) */

/* var c = "String";
var d = "50String";
var e = "50.25String"
console.log(Number.parseInt(e)) */