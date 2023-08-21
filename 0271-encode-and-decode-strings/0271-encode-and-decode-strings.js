/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
  //create new, empty string
  let encoded = '';
  //loop through the array, strs. for each element
  for (let i = 0; i < strs.length; i++) {
    // concat element + ' ' to new string

    if(i === strs.length-1) {
        encoded += strs[i];
    } else {
        encoded += strs[i] + '42069A';
    }
  }
  //return new string
  return encoded;
  
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  return s.split('42069A');   
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */