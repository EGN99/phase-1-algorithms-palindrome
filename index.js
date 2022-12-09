function isPalindrome(word) {

    // reverses string, Saves reversed string in new variable:
    let reversedWord = word.split("").reverse().join("");
  
      if(reversedWord === word){
        // return true;
        return true;
      } else{
          // else (if string is not equal to reverseString):
          // return false;
          return false
      }
  }
  


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log ("")

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Trip"));

  console.log ("")

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log ("")
}





module.exports = isPalindrome;
