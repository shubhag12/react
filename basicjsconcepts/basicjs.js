function x(){
    const a=10;
}
var xyz=30;
x();
var x=function (){
    console.log("i am an anonynous function");
}

//expression is a someting that evalutates to something which evalutates

//how to create an arrow function what is the need of arrow function
//like there is no arrow funcion for a long time

//in es6
/**
 * 
 * let
 * const
 * arrowfunction
 * promise
 */

//arrow function

const fn = ()=>{

}
/**
 * difference between function statement and function expression
 * main difference between them is hoisting
 * funcion statement 
 * x();//it will work fine because its memory is already allocated to the x variable
 * y();//this will give error because y is initially undefinded and u cannot call undefined
 *  
 * function statement aka funciton decleration
 * function x(){
 * console.log("hi")
 * }
 * 
 * funcion expression
 * 
 * var y=function(){
 * console.log("b is called");
 * }
 * named function expression
 * var x=function xyz(){
 * console.log("named function expression")
 * }
 * 
 * note xyz()  will be given error 
 * 
 * 
 * anonymous fns are used when fns are used as a value  
 * 
 * 
 * difference between parameters and arguments
 * 
 * var b=function(params1,params2){//these are parameters
 * }
 * 
 * b(5,6)//these are arguments to a functions
 * 
 * first class functions
 * we can pass a function inside a function 
 * 
 * var x=function (params1){
 * console.log(params1);
 * }
 * 1 st method
 * x(function(){
 * });
 * 
 * another way 
 * function xyz(){
 * }
 * 
 * x(xyz)
 * 
 first class function the ability of a function to use as a value or pass a parameter as function
 or returned from a function this ability is called first class function
 */

