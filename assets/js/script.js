/* number : integer , doable
char 'm'
string "mohammed"
bolean true , false
 */

/* 0 , 1 */

/* var x;


x=50;

x= "mohammed" */

/* ES6  2015*/

/* let z; */



/* _____________________________________ */


/* const pi=3.14; */


/* let firstNumber =20;

console.log(firstNumber)

firstNumber = 50;
console.log(firstNumber)

let arr=[10 , 20 , 50];
console.log(arr[0]) */

/* console.log("test")
console.log("test")
console.log("test")
console.log("test")
console.log("test")
console.log("test") */

/* for
while
do while */


/* for (let i=0 ; i<10 ; i++){
console.log("hello from loop")
console.log("first")



} */

/* > < == >= <= != */

/* > < >= <= */


/* + - * / % */



/* let y = 50;
let z = x + y ; */

/* console.log(z) */




/* x += 1; */  /* x = x +1  */  /* x++ */

/* console.log(x) */


/* x++;
++x */

/* let x=10; */

/* console.log(x++)

console.log(x) */

/* console.log(++x) */


/* let arr = [10 , 20 , 30 , 40] */

/* console.log(arr[0])
console.log(arr[1])
console.log(arr[2]) */

/* console.log(arr.length)
for (let i = 0; i < arr.length ; i++) {
    console.log(arr[i])
} */


/* let x = 50;

if(x>5){
    console.log("x bigger than five")
}else if(x<5){
    console.log("x smaller than five")
}else{
    console.log("x equal 5")
} */

/* break
continue */

/* for (let i = 0; i < 10; i++) {
    if (i==5) {
        continue;
    }
    console.log(i)
} */


/* while
do while */

/* let R="n";
let x=10;
while (R=="y") { */

//R=/* القيمة المدخلة Y أو N */

/* } */

/* for (let i=0 ; i<5;i++){
    console.log(i)
} */

/* do {
    
} while (R=="y"); */


/* and or not */

/* if(!(x>5)){

} */
/* let op = '+'; 
let x=10;
let y=50;
let r;
switch (op) {
    case 1:
        r=x+y;
        break;
    case '-':
        r=x-y;
        break;
    default:
        break;
} */
/* 
if(x>5){
    console.log(x)
}else{
    console.log("test")
} */

/* let x=10;
let y;
y= (x>5) ? ++x : --x; //y=11 x=11
y= (x>5) ? x++ : x--; //y=11 x=12

if(x>5){
    y=++x;
}else{
    y=--x;
} */
/* 
if(x>5){
    console.log(x)
}else{
    console.log("test")
}

(x>5) ? console.log(x) : console.log("test"); */


/* let x=10;
let y=20;
let z;

z=x+y;
console.log(z)















z=x+y;
console.log(z)









z=x+y;
console.log(z) */

/* let x=10;
let y=20;
let z;

function fun() {
    x++;
    console.log(x)
    return x;
}


fun() */


/* function test(x , y) {
    let result = x + y
    x++;
    console.log(x)
    return result;
}


let x = 10;
let y = 30;

console.log(test(x , y))
console.log(x)
console.log(test(30 , 100)) */

/* let name="mohammed"
let age = "25";

let result = name + age; mohammed25

console.log(result) */

/* function (){

} */

/* () =>{} */  /* arrow function */




/* let firstNumber;
let secNumber;
let op;
let r;
let result;


do {
    firstNumber = Number(prompt("enter the first number"))
    op = prompt("enter the operator")
    while (op != '+' && op != '-' && op != '/' && op != '*') {
        op = prompt("enter the operator (+ or - or * or /)")
    }
    secNumber = Number(prompt("enter the sec number"))
    switch (op) {
        case '+':
            result = firstNumber + secNumber;
            break;
        case '-':
            result = firstNumber - secNumber;
            break;
        case '*':
            result = firstNumber * secNumber;
            break;
        case '/':
            while (secNumber == 0) {
                secNumber = prompt("enter the sec number")
            }
            result = firstNumber / secNumber;
            break;
        default:
            break;
    }

    console.log(result)
    r= prompt("enter y to repeat or n to close")
    while (r != 'y' && r != 'n' && r != 'Y' && r != 'N') {
        r = prompt("enter y to repeat or n to close")
    }
}while (r == "y" || r == "Y");
 */


/* let num;
let result=1;
num =Number( prompt("enter the number"))
if (num < 0) {
    num = -1 * num
}
for (let index = num; index >= 1; index--) {
    result = result * index
}

console.log(result) */

/* let arr = [4 , 5 , 6 , 3 , 2] */ /* arr[i]=2 arr[j]= 3 
 arr[j]=2 arr[i]=2
  arr[j]=2 arr[i]=2*/

/* for (let i= 0 ; i < arr.length-1 ; i++ ){
    for(let j=i+1 ; j <arr.length ; j++){
        if(arr[i] < arr[j]){
            let x = arr[j]
            arr[j]=arr[i]
            arr[i]=x
        }
    }
}

console.log(arr) */

/* i=1 j=0 arr[i]=5 arr[j]=4 */
/* i=2 j=0->1 
arr[i]=6 arr[j]=4 
arr[i]=6 arr[j]=5 */

/* i=3 j=0->2 
arr[3]=3 arr[0]=4   [3 , 5 , 6 , 4 , 2]
arr[3]=4 arr[1]=5  [3 , 4 , 6 , 5 , 2]
arr[3]=5 arr[2]=6  [3 , 4 , 5 , 6 , 2]*/

/* i=4 j=0->3 
arr[4]=2 arr[0]=3   [2 , 4 , 5 , 6 , 3]
arr[4]=3 arr[1]=4  [2 , 3 , 5 , 6 , 4]
arr[4]=4 arr[2]=5  [2 , 3 , 4 , 6 , 5]
arr[4]=5 arr[3]=6  [2 , 3 , 4 , 5 , 6]*/

let user = {
    name : "mohammed alkordy",
    age : 24,
    email : "test@gmail.com"
}

console.log(user.name)


let json = [{
    name : "mohammed alkordy",
    age : 24,
    email : "test@gmail.com",
},{
    name : "Ali",
    age : 30,
    email : "test2@gmail.com"
}]


console.log(json[1].name)
