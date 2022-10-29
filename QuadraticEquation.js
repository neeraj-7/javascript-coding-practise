let root1, root2;

let a = 1, b = 6, c = 5;

// calculate discriminant

let discriminant = b * b - 4 * a * c;

// condition for real and different roots

if(discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / ( 2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / ( 2 * a);

    // result 
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}else if (discriminant == 0){
    root1 = root2 = -b / ( 2 * a);
    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}else{
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    // result
    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}