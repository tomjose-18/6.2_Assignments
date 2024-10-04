function removeNonPrintableASCII(input: string): string {
    return input.replace(/[\x00-\x1F\x7F]/g, '');
}

const asciiOriginalString = "Hello\x00World\x1F!";
const cleanedString = removeNonPrintableASCII(asciiOriginalString);
console.log(cleanedString); 
