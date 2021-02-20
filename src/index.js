module.exports = function check(str, bracketsConfig) {
  console.log(str, bracketsConfig)
  let arr = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (arr !== []) {
      for (let y = 0; y < bracketsConfig.length; y++) {
        for (let x = 0; x < 2; x++) {
          if (arr[i] === bracketsConfig[y][x]) {
            if (arr[i + 1] === bracketsConfig[y][x + 1]) {
              if (bracketsConfig[y][x + 1] === undefined) break;
              arr.splice(i, 2);
              i = -1;

            }
          }
        }
      }
    }
  }
  console.log(arr)
  if (arr.length === 0) {
    return true
  } else {
    return false
  }
}
