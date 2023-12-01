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





const user=[{firstname:"shubh",lastname:"agarwal",age:22},
          {firstname:"skund",lastname:"agarwal",age:22},
          {
          firstname:"yogesh",lastname:"agarwal",age:49
          }];

          //task is to find the list of the full name

const ans=user.map((x)=>x.firstname+" "+x.lastname);
console.log(ans);


//now the second task is to print how many people are there with particular age

//for example in above 22:2,49:1
//the concept use here is of reduce 

const ans1=user.reduce(function(acc,curr){
     if(acc[curr.age]){
          acc[curr.age]+=1;
     }
     else{
          acc[curr.age]=1;
     }
     return acc;
},{});
console.log(ans1);

//next task is to filter all the people and print the first namewhose age is less than 30

const ans2=user.filter((x)=>x.age<30).map((x)=>x.firstname);

console.log(ans2);


//how to do the same thing with the reduce keyword 

const ans3=user.reduce(function(acc,curr){
     if(curr.age<30){
          acc.push(curr.firstname);
     }
          return acc;
     
},[]);
console.log(ans3);
