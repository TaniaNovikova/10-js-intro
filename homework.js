let res = sumDigits(1234);
console.log(`sum digits = ${res}`); // 10
res = luckyNumber(123871); // 1 + 3 + 7 === 2 + 8 + 1
console.log(res ? 'Lucky' : 'Unlucky'); // Lucky



 function sumDigits(a) {
    let sum = 0;
    let digit;
    while (a != 0) {
        digit = a % 10;
        a = (a - digit) / 10;
        sum = sum + digit;
    }
    return sum;
} 


function luckyNumber(a) {
    let res = 0;
    while (a != 0) {
        res = a % 10 - res;
        a = (a - a % 10) / 10;
    }
    if (res === 0) {
        return true;
    } else {
        return false;
    }
}












