module.exports = function toReadable(number) {
    const digits = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];
    const doubledigits = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    const dozens = [
        "ten",
        "eleven",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    let result;
    let num = number.toString().split("");
    if (num.length == 1) result = digits[number];
    else if (num.length == 2) {
        if (num[0] == 0) result = digits[number%10];
        else if (num[0] == 1) result = doubledigits[number%10];
        else if(num[1] == 0) result = dozens[number/10];
        else result = `${dozens[num[0]]} ${digits[num[1]]}`; 
    } if (num.length == 3) {
        if (num[1] == 0 && num[2] == 0) result = `${toReadable(num[0])} hundred`;
        else result = `${toReadable(num[0])} hundred ${toReadable(num[1].concat(num[2]))}`;
    }
    return result;
}

