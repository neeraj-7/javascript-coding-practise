let number = 9;

if(number % 2 == 0){
    console.log(`${number} is even number`);
}else{
    console.log(`${number} is odd number`);
}


// eg2 : using ternary operator

var result = (number % 2 == 0) ? "even" : "odd";
console.log(`The number is ${result}`);