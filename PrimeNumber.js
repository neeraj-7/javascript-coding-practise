let num = 13;

let flag = true;

for(let i =2; i<num; i++){
       if(num % i == 0){
        flag = false;
        break;
       }
}

if(flag){
    console.log(`${num} is prime number`);
}else{
    console.log(`${num} is not a prime number`);
}