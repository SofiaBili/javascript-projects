function telephoneCheck(str) {
	// Define the regular expression for a valid US phone number
   var regex;
   regex = /^(1\s?)?\d{3}([-|\s])?\d{3}([-|\s])?\d{4}$|^(1\s?)?\(\d{3}\)\s?\d{3}([-|\s])?\d{4}$/
   
   // Test the string against the regular expression
   return regex.test(str);
 }
 
 console.log(telephoneCheck("(555)555-5555"));