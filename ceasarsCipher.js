var alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
var ceasarsAlphabet = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
function rot13(str) {
  var res = [];
  for(let i=0; i<str.length; i++){
    for(let j =0; j<alphabet.length; j++){
      if(str[i] === alphabet[j]){
        res.push(ceasarsAlphabet[j]);
      }
    }
  }
  res = res.join('');
  return res;
};
/*
//another way by using map could be
function rot13(str) {
  return str.split('').map(char => {
    const index = alphabet.indexOf(char);
    return index !== -1 ? ceasarsAlphabet[index] : char;
  }).join('');
} 
//or
function rot13(str) {
  var res = [];
  for (let i = 0; i < str.length; i++) {
    var index = alphabet.indexOf(str[i]);
    res.push(index !== -1 ? ceasarsAlphabet[index] : str[i]);
  }
  return res.join('');
}
*/
rot13("SERR PBQR PNZC");