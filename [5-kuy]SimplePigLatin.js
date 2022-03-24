function pigIt(str) {
  return str.split(" ").map(el => /[a-zA-Z]+/.test(el) ? el.slice(1) + el.slice(0, 1) + 'ay' : el).join(" ");
}

console.log(pigIt('Pig latin is cool ! 0 ,'));
