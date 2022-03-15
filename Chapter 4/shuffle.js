const shuffle = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let r = Math.floor(Math.random() * (len - i));
    [arr[i], arr[i + r]] = [arr[i + r], arr[i]];
  }
  return arr;
};

const arr = [11, 22, 33, 44, 55, 66, 77, 88];
console.log(shuffle(arr));

module.exports = shuffle;
