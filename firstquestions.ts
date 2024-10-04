function numberToDigits(num: number): number[] {
    return num.toString().split('').map(Number);
}


const result = numberToDigits(67890);
console.log(result);
