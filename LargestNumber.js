let num1 = 10, num2 = 20, num3 = 30;
var largest;
if(num1 >= num2 && num1 >= num3){
    largest = num1;
}else if(num2 >= num3 && num2 >= num1){
    largest = num2;
}else{
    largest = num3;
}

console.log(`The largest number is ${largest} among ${num1}, ${num2} and ${num3}`);

// eg2: using Math.max()
num1 = 50;
largest = Math.max(num1, num2, num3);
console.log(`The largest number is ${largest} among ${num1}, ${num2} and ${num3}`);
