/**
 * Frequency Counter - checkAnamgram
 * Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 *
 * Examples:
 * checkAnamgram('', '') // true
 * checkAnamgram('aaz', 'zza') // false
 * checkAnamgram('anagram', 'nagaram') // true
 * checkAnamgram("rat","car") // false) // false
 * checkAnamgram('awesome', 'awesom') // false
 * checkAnamgram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
 * checkAnamgram('qwerty', 'qeywrt') // true
 * checkAnamgram('texttwisttime', 'timetwisttext') // true
 *
 * Note: You may assume the string contains only lowercase alphabets.
 *
 * Time Complexity - O(n)
 */
const checkAnamgram = (str1: string, str2: string) => {
  // If both strings are empty, then we have ourselves our first true case! Yayyyyy!
  if (!str1[0] && !str2[0]) return true;

  if (str1.length != str2.length) return false;

  // We'll store the frequency in a dictionary (Technically, a set in this case);
  const str1CharFrequency = {};
  const str2CharFrequency = {};

  // At this point, we just update our dictionaries with character-frequency pairs
  for (let i = 0; i < str1.length; i++) {
    const charOfStr1 = str1[i];
    const charOfStr2 = str2[i];

    const charOfStr1Freq = str1CharFrequency[charOfStr1] || 0;
    const charOfStr2Freq = str2CharFrequency[charOfStr2] || 0;

    str1CharFrequency[charOfStr1] = charOfStr1Freq + 1;
    str2CharFrequency[charOfStr2] = charOfStr2Freq + 1;
  }

  // Checking the frequencies for each character
  for (let char in str2CharFrequency) {
    if (str1CharFrequency[char] != str2CharFrequency[char]) {
      return false;
    }
  }

  return true;
};

console.log(checkAnamgram("", "")); // true
console.log(checkAnamgram("aaz", "zza")); // false
console.log(checkAnamgram("anagram", "nagaram")); // true
console.log(checkAnamgram("rat", "car")); // false
console.log(checkAnamgram("awesome", "awesom")); // false
console.log(checkAnamgram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(checkAnamgram("qwerty", "qeywrt")); // true
console.log(checkAnamgram("texttwisttime", "timetwisttext")); // true
