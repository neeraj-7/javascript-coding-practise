
let lowerNumber = 2, higherNumber = 100;

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are : `);

for(let i = lowerNumber; i<= higherNumber; i++){

    let isPrime = true;

    for(let j = 2; j < i; j++){
        if(i % j == 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(i);
    }
}