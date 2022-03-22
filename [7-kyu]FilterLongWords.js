const str = "The quick brown fox jumps over the lazy dog";
function filterLongWords(sentence, n) {
   return sentence.split(" ").filter(e => e.length > n);
}

console.log("filterLongWords", filterLongWords(str, 4));
