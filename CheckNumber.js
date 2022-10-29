let number = 0;

if(number > 0){
    console.log(`${number} is positive`);
}else if(number < 0){
    console.log(`${number} is negative`);
}else{
    console.log(`${number} is zero`);
}


// eg2: check number type with nested if..else

if(number >= 0){
    if(number == 0){
        console.log(`The number is zero`);
    }else{
        console.log(`The nubmer is positive`);
    }
}else{
    console.log(`The number is negative`);
}