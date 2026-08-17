// console.log("sanu")



//   setTimeout(function(){
//     console.log("this will be executed after 3 seconds! ")
//   },3000)


function getCandies(){
    setTimeout(()=>{
        const candies = "🍬"
        console.log("there is your candies", candies)
        return candies
    },5000)
}
console.log(getCandies())