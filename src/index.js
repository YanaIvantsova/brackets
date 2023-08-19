module.exports = function check(str, bracketsConfig) {
  const obj = Object.fromEntries(bracketsConfig);
  for (let i = 0; i < str.length; i += 1) {
    let openBracket = str[i];
    let closeBracket = str[i + 1];
    if (obj[openBracket] == undefined || closeBracket == undefined) {
      return false;
    }
    if (obj[openBracket] == closeBracket) {
      str = str.slice(0, i) + str.slice(i + 2, str.length)
      i = -1;
    }
    if (str.length % 2 != 0) {
      return false
    }
  }
  return true
}








