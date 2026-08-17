//Namefunction

function multi(a,b){
  const res = a*b
   return res
}
console.log(multi(2,3))

//anonymous function

let guna = function(a,b) {
      const ans=a*b
      return ans
}
console.log(guna(12,34))

let greet = function (){
     return "welcome the jungle"
}
console.log(greet())

// arrow function 

let jod = (x,y) => {
  const ans = x+y
  return ans
}
console.log(jod(2,8))

// short arrow function 
let res = (num) =>  num*num;
console.log(res(4))

let multiply = (i,j)=> i*j;
console.log(multiply(4,6))
