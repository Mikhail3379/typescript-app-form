// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility).And then read line by line: "PAHNAPLSIIGYIR"

// Write the code in javaScript that will take a string and make this conversion given a number of rows:

// const convert = (s, numRows) => {    
//     if (numRows === 1) return s;
//     let result = "";
//     let n = s.length;
//     let cycleLen = 2 * numRows - 2;
//     for (let i = 0; i < numRows; i++) {
//         for (let j = 0; j + i < n; j += cycleLen) {
//             result += s[j + i];
//             if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n)
//                 result += s[j + cycleLen - i];
//         }
//     }
//     return result;
// }
module.exports = function convert(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }
    let result = "";
    let cycle = 2 * (numRows - 1);
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < s.length; j += cycle) {
            result += s[j + i];
            if (i !== 0 && i !== numRows - 1 && j + cycle - i < s.length) {
                result += s[j + cycle - i];
            }
        }
    }
    return result;
}
