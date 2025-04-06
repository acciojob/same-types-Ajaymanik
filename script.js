function isSameType(value1, value2) {
// Convert the string into a number if possible
if (!isNaN(value1)) value1 = Number(value1);
if (!isNaN(value2)) value2 = Number(value2);

// Check if both values are NaN
if (isNaN(value1) && isNaN(value2)) {
    return true;
}

// Compare types
return typeof value1 === typeof value2;
}

// Do not change the code below
let value1 = prompt(“Enter Start of the Range.”);
let value2 = prompt(“Enter End Of the Range.”);
alert(isSameType(value1, value2));