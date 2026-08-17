const a=10;
const b=20;
console.log("Result :", a+b)

function sum(a,b){
    const ans = a+b
    console.log("Result :", ans)
}
sum(5,5) //10

function multi(a,b){
    const res = a*b
    console.log("Result :", res)
    return res
}
let answer =multi(5,5)
console.log(answer) //25

function greet(){
    console.log(" welcome to home")

}
greet();//welcome to home

function greet(user){
    console.log(user," welcome to home")

}
greet("sanu:");//welcome to home
