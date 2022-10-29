//Area when Base and Height is known
let baseValue = 4;
let heightValue = 6;

// calculate the area
let areaValue = (baseValue * heightValue) / 2;

console.log(`The area of the triangle is ${areaValue}`)


//Area When all sides are known

let side1 = 3;
let side2 = 4;
let side3 = 5;

// calculate the semi-perimeter
let s = (side1 + side2 + side3) / 2;

let area = Math.sqrt(s * (s-side1) * (s-side2) * (s-side3));
console.log(`The area of the triangle is ${area}`);