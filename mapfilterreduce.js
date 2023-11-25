function double(x){
     return 2*x;   
}
function triple(x){
     return 3*x;   
}
function binary(x){
     return x.toString(2);
}
const arr=[2,3,5,7,8];

console.log(arr.map(double));
console.log(arr.map(triple)); 
console.log(arr.map(binary));


//filter
function isodd(x){
     return x%2==0;
}
const output=arr.filter(isodd);

const output1=arr.filter((x)=>x>4)
console.log(output);
console.log(output1);


//reduce

//to find the sum maximum 

const nums=[2,7,8,8,9];
function sumvalue(nums){
     let sum=0;
     for(let i=0;i<nums.length;i++){
          sum+=nums[i];
     }
     return sum;

}
console.log(sumvalue(nums));
const output2=nums.reduce(function(acc,curr){
     acc=acc+curr;
     return acc;
},0);//the second value of reduce is the initail value of the accumulator

//to find the maximum value  
const maxi=nums.reduce(function(acc,curr){
     if(curr>=acc)
     acc=curr;
     return acc;
},0);//the second value of reduce is the initail value of the accumulator
console.log(maxi);
