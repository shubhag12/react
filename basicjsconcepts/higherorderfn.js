const radius=[3,4,1,2];

//function to calculate the area of all circles

const area=function(radius){
    return Math.PI*radius*radius;
}

const calculate=function(arr,logic){
    const output=[];

    for(let i=0;i<arr.length;i++){
        output.push(logic(arr[i]));
    }

    return output;
}
console.log(calculate(radius,area));
console.log(radius.map(area));//so our cal is same as map function

//if we have to make the exactly same implementation as map function
//array.protopype helps to make .function with array then we have to use this keyword inside
Array.prototype.calculate=function(logic){
  const output=[];

    for(let i=0;i<this.length;i++){
    output.push(logic(this[i]));
    }

return output;
}
console.log(radius.calculate(area));


//this calculate fn implementation is generally same as the map function in javascript
/**
 * the above concept is the non repeatability of code and we can just pass the diff logic
 * and we are done and we donot have to every time code reusability and modularity
 */
















const calcuateArea= function (radius){
    const output=[];

    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }

    return output;
}
const calcuateCircumpherence= function (radius){
    const output=[];

    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*2);
    }

    return output;
}
const calcuateDiameter= function (radius){
    const output=[];

    for(let i=0;i<radius.length;i++){
        output.push(radius[i]*2);
    }

    return output;
}

console.log(calcuateArea(radius));
//console.log(calcuateCircumpherence(radius));
//console.log(calcuateDiameter(radius));

/*

the problem here is like 
*repetiting our code to much dry principle donot repeat your code

the only thing changing here is the logic and the rest is the same thing
 */