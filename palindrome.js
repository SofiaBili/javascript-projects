function palindrome(str) {
	//first to check if it is palindrome string we must make the str lowercase
	let lowerStr = str.toLowerCase()
	//we must find all characters that are A-Z and 0-9
	.match(/[a-z0-9]/g)
	//reverse the str
	.reverse()
	//join all together
	.join("");

	let startingStr = str.toLowerCase().match(/[a-z0-9]g/).join("");
	//check if the str and the reversed are the same

	return lowerStr === startingStr;
  }
  
  palindrome("eye");