// Accept a day number between 1-7 and print the corresponding day name.
const readline=require('readline-sync');
console.log("enter the Day number:")
const a=Number(readline.question());

function dayName(a) {
    switch (a) {
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("Wednesday")
            break;
        case 4:
            console.log("Thursday")
            break;
        case 5:
            console.log("Friday")
            break;
        case 6:
            console.log("Saturday")
            break;
        case 7:
            console.log("Sunday")
            break;
        default:
            console.log("Smile")

    }

}

dayName(a);