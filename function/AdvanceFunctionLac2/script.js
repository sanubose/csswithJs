// we are making  call back function 
// making a calculator

let calculator = (a,b,opreation)=>{
         return  opreation(a,b)
}

let sum = calculator(6,2 , function(x,y){
     return x+y
})
console.log(sum);

let sub = calculator(6,2 , function(x,y){
     return x-y
})
console.log(sub);

let multi = calculator(6,2 , function(x,y){
     return x*y
})
console.log(multi);

let div = calculator(6,2 , function(x,y){
     return x/y
})
console.log(div);

let mod = calculator(6,2 , function(x,y){
     return x%y
})
console.log(mod);
// Callback function
// Making a calculator

