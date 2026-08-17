let calculator = (a, b, operation) => {
    return operation(a, b);
};

 
let sum = calculator(6, 2, function(x, y) {
    return x + y;
});

console.log(sum);


// named function

function sub(a,b){
    return a-b
}

let subtraction = calculator(6, 2, sub) 
    console.log(subtraction)


// arrow function 
let multiply = (a,b) => a*b

let multi = calculator(6, 2, multiply)

console.log(multi);


let div = calculator(6, 2, function(x, y) {
    return x / y;
});

console.log(div);


let mod = calculator(6, 2, function(x, y) {
    return x % y;
});

console.log(mod);