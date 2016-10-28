// var cipher = 'lmnopqrstuvwxyzabcdefghijk'.split('');
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

//Encryption Section
//This first section takes the argument "text" which is a string. It then splits the string into its individual letters. Then it uses the map method by calling the mapChar function. This returns a number and that number is added to the variable numbersArray.
//After creating the numbersArray variable, encrytped then calls the numbered function and passes numbersArray as its argument and returns its output.
function encrypted(text, number) {
  var cipher = offset(number);
  var numbersArray = text.split('').map(function (char) {
    return mapChar(char, cipher);
  });
  return numbered(numbersArray);
}
//This numbered function takes the argument passed to it from encrypted, which should be an array of numbers, calls the map method and calls the mapNum function. It returns the output from that function joined togther. This should be a string of characters.
function numbered(numbers, cipher) {
  return numbers.map(function (num) {
    return alphabet[num];
  }).join('');
}
//This mapChar function takes the parameter char (should be a single letter) which is supplied by the encrypted function. It takes the letter, makes it lowercase, and then gives the idex of the same letter from the global cipher variable. It returns that index number back to encrypted.
function mapChar(char, cipher) {
  return cipher.indexOf(char.toLowerCase());
}


//DeEncryption Section - just does the opposite of the encryption section.
function deEncrypted(text, number) {
  var cipher = offset(number);
  var numbersArray = text.split('').map(function (char){
    return mapChar2(char, cipher);
  });
  return numbered2(numbersArray, cipher);
}

function numbered2(numbers, cipher) {
  return numbers.map(function (num) {
    // return mapNum2(num, cipher);
    return cipher[num];
  }).join('');
}

function mapChar2(char, cipher) {
  return alphabet.indexOf(char.toLowerCase());
}

//This is the offset function so that the cipher can be set by the user.
function offset(number) {
  // var part1 = alphabet.slice(0, number);
  // var part2 = alphabet.slice(number, 26);
  var cipher = alphabet.slice(number, 26).concat(alphabet.slice(0, number));
  return cipher;
}

var theCode =  encrypted('hello', 5);
console.log(theCode);
console.log('this is the code decrypted: ' + deEncrypted(theCode, 5));
