// console.log("hii dom")

const bodyBackGround = document.body
 bodyBackGround.style.backgroundColor ="green"

 //select by id
//  const box1 = document.getElementById("box-1")
//  console.log(box1)


// select by class

//  const box3 = document.getElementsByClassName("box")
//  console.log(box3)

// select by tag name
// const h1 = document.getElementsByTagName("h1")
//  console.log(h1)

const p = document.getElementsByTagName("p");

p[0].style.backgroundColor = "yellow";
p[0].style.color = "red";
p[0].style.fontFamily = "cursive";

//modify in the html

document.getElementsByTagName("p")[0].innerText=" aarti sanu  bose"
const boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerText = "sanu";
}