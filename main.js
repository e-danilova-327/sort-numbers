const numOne = 10230;
const numTwo = 9223;
const numThree = 26007;

if (numOne > numTwo && numOne > numThree) {
    if (numTwo > numThree) {
        console.log(numOne + ', ' + numTwo + ', ' + numThree);
    } else {
        console.log(numOne + ', ' + numThree + ', ' + numTwo);
    }
} else if (numTwo > numOne && numTwo > numThree) {
    if (numOne > numThree) {
        console.log(numTwo + ', ' + numOne + ', ' + numThree);
    } else {
        console.log(numTwo + ', ' + numThree + ', ' + numOne);
    }
} else {
    if (numOne > numTwo) {
        console.log(numThree + ', ' + numOne + ', ' + numTwo);
    } else {
        console.log(numThree + ', ' + numTwo + ', ' + numOne);
    }
}

