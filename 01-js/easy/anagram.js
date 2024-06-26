/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let charcount = 256;
  let count = new Array(charcount);
  for (let i = 0; i < charcount; i++){
    count[i] = 0;
  }
  for (let i = 0; i < str1.length; i++) {
    count[str1[i].charCodeAt(0)]++;
    count[str2[i].charCodeAt(0)]--;
  }

  for (let i = 0; i < charcount; i++) {
    if (count[i] != 0) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
