function isSameType(value1, value2) {
  // convert the string into a number 
	if(!isNaN(value1)) value1 = number(value1);
	if(!isNaN(value2)) value2 = number(value2);

	if (NaN(value1) && NaN(value2)) {
		return true ;
	}
	return typeof value1 === value2 ;
}

// do not change the code below.
let value1 = promt("Enter Start of the Range.");
let value2 = promt("Enter End Of the Range.");
alert(isSameType(value1, value2));
