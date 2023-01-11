module.exports = function toReadable(number) {
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    if (number <= 10) {
        return units[number];
    } else if (number >= 11 && number <= 19) { 
        return teens[number - 11];
    } else if (number % 10 === 0 && number >= 20 && number <= 90) {
        return tens[number / 10 - 2];
    } else if (number % 10 !== 0 && number > 20 && number < 100) { 
        return `${tens[Math.trunc(number / 10) - 2]} ${units[number % 10]}`;
    } else if (number % 100 === 0 && number >= 100 && number <= 900) {  // 
        return `${units[Math.trunc(number / 100)]} hundred`;
    } else if (number % 100 !== 0 && number > 100 && number <= 999 && number % 100 <= 10) { 
        return `${units[Math.trunc(number / 100)]} hundred ${units[number % 100]}`;
    } else if (number % 100 !== 0 && number > 100 && number <= 999 && Math.trunc((number % 100) / 10) === 1) {  
        return `${units[Math.trunc(number / 100)]} hundred ${teens[(number % 100) - 11]}`;
    } else if (number % 10 === 0 && number > 100 && number <= 999 && (number % 100) / 10 >= 2) {  
        return `${units[Math.trunc(number / 100)]} hundred ${tens[Math.trunc(number / 10) % 10 - 2]}`;
    } else if (number % 100 !== 0 && number > 100 && number <= 999 && (number % 100) > 20) { 
        return `${units[Math.trunc(number / 100)]} hundred ${tens[Math.trunc(number / 10) % 10 - 2]} ${units[number % 10]}`;
    };
}