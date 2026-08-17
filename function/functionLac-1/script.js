// hoisting and global scope


function sanu(a,b){
    let res=a+b
    console.log(res)
}sanu(2,5)// 7

let a=7
let b=8

sanu(a,b)//15

