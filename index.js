function isPalindrome(word) {
  // Write your algorithm here
    /*
    take a word and reverse it and test if it is the same backwards
    
    */

    const wordReversed = word.split("").reverse().join("")
    console.log(wordReversed)
   return testValues(wordReversed, word)

    
}
function testValues(ReverseWord,word){
  if (ReverseWord != word ){
    return false
  }
  else{
    return true
  }


}
/* 
  Add your pseudocode here
    Turn word into an array 
    If array not equal to the reverse then return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
