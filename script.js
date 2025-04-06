function isSameType(value1, value2) {
    // Convert prompt input values properly
    const v1 = parseInput(value1);
    const v2 = parseInput(value2);

    // Check if both are NaN
    if (Number.isNaN(v1) && Number.isNaN(v2)) {
        return true;
    }

    // Compare types
    return typeof v1 === typeof v2;
}

function parseInput(value) {
    // Try to convert to number
    if (!isNaN(value) && value.trim() !== "") {
        return Number(value);
    }
    // Special check for "NaN"
    if (value === "NaN") {
        return NaN;
    }
    return value;
}

// Do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
