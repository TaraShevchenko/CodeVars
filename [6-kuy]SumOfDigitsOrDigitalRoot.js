const n = 1999;

const digital_root = (n) => {
  const sum = (""+n).split("").map(el => parseInt(el)).reduce((previousValue, currentValue) => previousValue + currentValue);
  if (sum.toString().length === 1) {
    return sum;
  }
  return digital_root(sum);
}

console.log(rec(n));
