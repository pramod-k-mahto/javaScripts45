// console.log(" ksjdgbskdhvbslhjbvljb pijbnpieubpirugpiwurn")
// prompt()
// alert("Hello JS")
// a=prompt("Enter your Name")
// console.log(a)
// alert(a)
// variable
// a=9
// a ,23,_,$
// fullName="xyz"
// _fullName="pramod"
// $fullName="xyz $"
//  fullName1="xyz"  //  Not allowed
// console.log(fullName1)
// let ,var ,const
// var  a=9
// let a=90
// console.log(a)
// a=11
// var a=30
// console.log(a)
// let x=90
//  x=90
//  console.log(x)
// let y;
// const data=100
// data=200
// console.log(data)
// {
// let y =12
// const a=90
// var m=9
// }
// // console.log(y)
// console.log(m)
// data type 2

//  data type
//1 primitive   data type  >> number , string,boolean,Symbol,BigInteger,null ,undefined

// number
// let data=213  // 1.5
// console.log( typeof data )
// //string
// let name=`Total number is  ${data} `
// console.log( typeof name)
// boolean
// let isBool=true // true  || false
// console.log( typeof   isBool)
// Symbol
// let id=Symbol("Ram")
// let id2=Symbol("Ram")
// console.log(id==id2)
// let num =12121211212121212121223232323245656689n
// console.log(num)
// let x=null
// x={
//     name:"ram",
//     age:23,
//     address:{
//         city:"pune",
//         state:"MH"
//     }
// }
// console.log(typeof x)
// let x;
// console.log(x)
// console.log(x)
// 2 non-privative  data type  >> object ,array
//  console.log("Hello ")
// //object
// const person={
//     name:"Xyz",
//     age:25,
//     phone:980081208
// }
// console.log(person.phone)
// // array
// const arr=[1,"Ram",true,undefined]
// arr={
//     0:1,
//     1:"Ram",
//     2:true,
//     3:undefined
// }
// console.log(arr[3])
// function
//  f(x)=x
// function sum(a){
//     return a+5
// }
// let x=sum(100)
// console.log(x)

// Arithmetic Operators
// +,-,/,%,*,** ,--,++
// console.log(1+5)
// console.log(1-5)
// console.log(10/5)
// console.log(10*5)
// console.log(5**2)
// let x=5
// // x++;
// console.log(++x)
// let y=5
// console.log(--y)
// console.log(--y)
// console.log(1231231212227%2)
// console.log(false+5+true)

// Assignment Operators
// =,+=,-=,/=,%=,*=,**=
// let x=5
// x+=5  // x=x+5
// x-=5  // x=x-5
// x*=5  // x=x*5
// x/=5  // x=x/5
// x%=5  // x=x%5
// x**=2  // x=x**5
// console.log(x)
// Comparison Operators  (true or false)
// == ,===,>,<,>=,<=,!=,!==,
// let a=5
// let b="5"
// // console.log(a===b)
// //  console.log(a>=b)
//  console.log(a!=b)
//  console.log(a!==b)

// logical Operators (and >> &&  , or  >> || )
// and
// cond1 &&  cond2
// true and true >> true
// true and false >> false
// false and true >> false
// false and false >> false
// or
// cond1 || cond2
// true || true >> true
// true || false >> true
// false || true >> true
// false and false >> false

//  !
//  (!) not Operators
/// !true >> false
/// !false >> true
// ternary Operators
// false? console.log(true) :console.log(false)
// let x=5;
// let y=5
// // console.log(x==y && y==x)
// console.log(x>y || y>x)
// let t=false
// console.log(!t)
// ternary Operators
// false? console.log("true") : console.log("false")

// conditional statement > >> if ,else

// let x=9
// if(x==9){
//     console.log("Hello if")
// }
// else{
//     console.log("Hello else")
// }
// 1. Age Check: Write an `if-else` statement to check if a
// person is 18 years old or older. Print "Adult" if
// true, otherwise "Not an adult."

// let age=4
// if(age>=18){
//     console.log("Adult")
// }else{
//     console.log(" Not Adult")
// }

// loop >>for , while ,do-while

// loop >>for
// for(let i=1;i<=100;i++){
//     // console.log(i)
//  console.log("Hello world")
// }

// let sum=1+2+3+4+5+6+7+8+9+10+11....1000

// let sum =0;   // 10
// for(let i=1;i<=100;i++){
//     sum=sum+i   // 6+4==10
// }
// console.log(sum)

// let count=0
// let sum=0
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         // console.log(i)
//         sum=sum+i
//         count++
//     }
// }
// console.log(`Total Even   number   is - ${count}`)
// console.log('Total Even   number   is - '+count)
// console.log(`total sum of  Even number is - ${sum}`)

// While Loop
// let i = 1;
// let sum = 0;
// while (i <= 10) {
//   if (i % 2 == 0) {
//     // console.log(i);
//     sum = sum + i;
//   }
//   i++;
// }
// console.log(sum)

// do while loop
// let i = 1;
// let sum = 0;
// do {
//   if (i % 2 != 0) {
//     sum = sum + i;
//   }
//   i++;
// } while (i <= 100);

// console.log(sum);

// function   in js

// function sum(a,b) {
//   console.log(a+b);
// }
// sum(300,500);
// console.log(1 + 2 + 3 + 4 + 5);
// function sum(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
// }

// sum(5);

// function largestNumber(a, b) {
//   if (a > b) {
//     console.log(`${a}  is larger  number `);
//   } else {
//     console.log(`${b}  is larger  number `);
//   }
// }
// largestNumber(12, 5);

// function reverse(a) {
//   for (let i = a; i >= 0; i--) {
//     console.log(i);
//   }
// }

// reverse(10);

// function sum(a, b) {
//   let c=a+b
//   return c;

// }
// let x=sum(1, 2);
// console.log(x)

// Arrow Function

// const sum = (a, b) => {
//   console.log(a-b);
// };
// sum(3, 5);

// const sum =function(a){
//     console.log(a)
// }
// sum(100)

// (function () {
//   console.log("Hello");
// })()

// (function () {
//   console.log("Hello");
// })();

// array

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 4;
// const numbers = [1, 2, 3, 4, 5, 6, 7,8,9,10,23,34,4,43];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  //5 >> 6
// for (let i = arr.length-1 ; i >= 0; i--) {
//   console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //5 >> 6
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     count++;
//   }
// }
// console.log(count);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,111];
// // arr.push(100,200,34,34,3,434)

// // let x=arr.pop()
// // let y=arr.pop()
// // console.log(arr)

// // let m=arr.shift()
// // console.log(m)
// arr.unshift(900,77,7887)

// console.log(arr)

// const arr=[1,2,3,4,5]

// //let newArr=[3,1,5,2,4]
// let a=arr.pop()
// let b=arr.pop()
// let c=arr.pop()
// let d=arr.pop()
// let e=arr.pop()

// let newArr=[]
// newArr.push(c)
// newArr.push(e)
// newArr.push(a)
// newArr.push(d)
// newArr.push(b)

// console.log(newArr)

// write a function that will  take a list of numbers
//  and return a list of a reverse orders list

// const arr=[1,2,3,4,5] >> [5,4,3,2,1]

// function reverseList(list) {
//   let newList = [];
//   for (let i = list.length - 1; i >= 0; i--) {
//     newList.push(list[i]);
//   }
//   return newList;
// }
// let r = reverseList([100, 200, 300, 400, 500]);
// console.log(r);

// write a function that will  take a list of numbers
//  and returns only odd numbers of list.

// function oddNumber(list) {
//   let odd = [];
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] % 2 != 0) {
//       odd.push(list[i]);
//     }
//   }
//   return odd;
// }
// let z = oddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
// console.log(z);

// write a function that will  take a list of numbers
// and find the largest value  from the list.

// function getMaxValue(list) {
//   let max = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (list[i] > max) {
//       max = list[i];
//     }
//   }
//   console.log(max);
// }
// getMaxValue([100, 2, 30, 4, 5, 6]);

// console.log(arr[arr.length ]);
// let newArr=arr.slice(4,arr.length)
// console.log(newArr)
// console.log(arr)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let x=arr.splice(2,5,22,11,4,4,4)
// console.log(x)
// console.log(arr)
// const a1 = [1, 2, 3, 4, 5];
// const a2=[11,12,13,14,15]
// const a3=[111,112,113,114,115]
// let x=a2.concat(a1,a3)
// console.log(a1.join("m"));
// console.log(a1.toString());

// let str="Hello world!"
// console.log(str.toUpperCase())
// console.log(str.startsWith("h"))
// console.log(str.endsWith("!"))

// let str="       Hello world     "
// // let str1="bye world!"
// // // let newStr=str+" "+str1
// // let newStr=str.concat(" ",str1)
// console.log(str)
// console.log(str.trim())

// let str="Hello world"
// let x=str.replaceAll("l","b")
// console.log(x)
// console.log(str)

// let str="Hello world"
// let x=str.split("")
// console.log(x)
// console.log(x[1])
//  let str="Hello world"
// //  console.log(str[str.length-1])
// let x=str.slice(1,5)
// console.log(x)
// let fullName = "Hello world";
// // dlrow olleh

// let newStr = "";
// for (let i = fullName.length - 1; i >= 0; i--) {
//   newStr = newStr + fullName[i];
// }
// console.log(newStr);
// let str=radar


//jhasvdsdhv ouhbdsvulshbviusbdviubnd
