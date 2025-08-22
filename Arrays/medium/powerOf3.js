//Power of Three
function powerOf3(num) {
    if (num === 1) return true;
    if (num < 1 || num % 3 !== 0) return false;

    return powerOf3(num / 3);
}

console.log(powerOf3(81));