function powersOfTwo(n) {
  let arr = [1];
  let y = 2;
  for (let i = 0; i < n; i++) {
    arr = [
      ...arr,
      y
    ];
    y *= 2;
  }
  return arr;
}

console.log("powersOfTwo", powersOfTwo(15));
