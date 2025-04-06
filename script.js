function isSameType(value1, value2) {
    // If both are actual NaN (not the string "NaN"), return true
    if (typeof value1 === "number" && typeof value2 === "number" && isNaN(value1) && isNaN(value2)) {
        return true;
    }

    // Compare types directly
    return typeof value1 === typeof value2;
}

// Do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Try to parse input into real types (e.g., number or NaN)
function parseInput(value) {
    // Check if value is empty or invalid
    if (value === null || value.trim() === "") return value;

    const num = Number(value);
    if (!isNaN(num)) return num;

    return value;
}

value1 = parseInput(value1);
value2 = parseInput(value2);

alert(isSameType(value1, value2));
