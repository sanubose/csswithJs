const arr = [2,5,6,8,9,0,-3,-5,-2]

const PrintFirstNegNum =(num)=>num<0
// index, num
const res = arr.findIndex(PrintFirstNegNum)
console.log(res)
const res2 = arr.find(PrintFirstNegNum)
console.log(res2)


arr.forEach((num,index)=>{
    console.log("Element :",num,"Index :",index)
})