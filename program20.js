// - Accept three numbers and print the greatest among them
const readline=require('readline-sync');
console.log("enter the Day number:");
const a=Number(readline.question());
console.log("enter the value of b:");
const b=Number(readline.question());
console.log("enter the value of c:");
const c=Number(readline.question());
if (a > b) {
    if (a > c) {
        console.log("A is the greatest value:", a);
    } else {
        console.log("C is the greatest value:", c);
    }
} else {
    if (b > c) {
        console.log("B is the greatest value:", b);
    } else {
        console.log("C is the greatest value:", c);
    }
}
