var romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};
  
function convertToRoman(num) {
	if(num == 0) return '';
	let romanNum='';
	for (const key in romanNumerals) {
		while (num >= romanNumerals[key]) {
			romanNum += key;
			num -= romanNumerals[key];
			console.log("RM= "+romanNum)
			console.log("NUM= "+num)
			console.log("KEY= "+key)
		}
	}
  	console.log("num= "+romanNum)
	return romanNum;
  }
   
  convertToRoman(11);