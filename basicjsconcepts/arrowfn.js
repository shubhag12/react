function helper(){
    console.log(this);
}

var x=()=>{
    console.log(this);
}

//when you write this in a normal fn
//then it will print the obj

//this in case of arrow function refers to its parents this