// 1. Count backwards from 10 to 1, then log “Blast-Off”

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Blast Off!");


// 2. Calculate the sum of all numbers from 0 to 20

let sum = 0;
for (let i = 0; i <= 20; i++) {
    sum += i;
}
console.log("The sum is:", sum);


// 3. FizzBuzz (1 to 50)

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
