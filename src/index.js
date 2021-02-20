module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  for (let i = 0; i < str.length; i++) {
    for (let y = 0; y < bracketsConfig.length; y++) {
      for (let x = 0; x < 2; x++) {
        if (bracketsConfig[y][x + 1] === undefined) break;
        if (arr[i] === bracketsConfig[y][x]) {
          if (arr[i + 1] === bracketsConfig[y][x + 1]) {
            arr.splice(i, 2);
            i = -1;
          }
        }
      }
    }
  }
  return arr.length === 0
}
