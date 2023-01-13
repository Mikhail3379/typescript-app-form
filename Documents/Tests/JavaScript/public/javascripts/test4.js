// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.
module.exports = function longestPalindrome(s) {
    if (s.length < 1 || s.length > 1000) {
        // throw ('Invalid input');
        // console.log('Invalid input');
        return 'Invalid input';
    }
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] < 48 || s[i] > 122) {
    //         return 'English letters only';
    //     }
    // }
    // for (character in s) {
    //     if (character.charCodeAt(0) < 48 || character.charCodeAt(0) > 122) {
    //         return 'English letters only';
    //     } 
    // }
    // for (character in s) {
        // if (character.charCodeAt(0) < 101 || character.charCodeAt(0) > 132 && character.charCodeAt(0) < 141 || character.charCodeAt(0) > 172) {
        //     return 'English letters only';
        // }
        //
        //  --------- a +++++++++++ z ------------ A ++++++++++++ Z ---------
        //
        //  Be careful about order of operations!!!
        //      a + b * c != (a + b) * c
        //       a || z  &&  A || Z  => Correct
        //      (a || z) && (A || Z) => Correct

        // if ((character < 'a' || character > 'z') && (character < 'A' || character > 'Z')) {
    //     if (character < 'a' || character > 'z' && character < 'A' || character > 'Z') {
    //         return 'English letters only'; // Invalid input
    //     }
    // }
    if (!s.match(/^[A-Za-z]+$/)) {
        return 'English letters only';
    }
    // if (!s.isalpha()) {
    //     return 'English letters only';
    // }
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const sub = s.slice(i, j);
            const isPalindrome = (str) => str === str.split('').reverse().join('');
            
            if (sub.length > longest.length && isPalindrome(sub)) {
                longest = sub;
            }
        }
    }
    return longest;
}