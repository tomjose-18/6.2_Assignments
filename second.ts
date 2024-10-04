function capitalizeFirstLetter(input: string): string {
    if (!input) return input; 
    return input.charAt(0).toUpperCase() + input.slice(1);
}


const originalString = "hello world!";
const capitalizedString = capitalizeFirstLetter(originalString);
console.log(capitalizedString);
