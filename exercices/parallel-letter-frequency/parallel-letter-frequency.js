//
// This is only a SKELETON file for the 'Parallel Letter Frequency' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const parallelLetterFrequency = async (texts) => {
  let o = {}
  let exclude = [" ", "!", "\\", "'", "(", ")", ",", "-", ".", ":", ";", "?", "\"", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "\t", "\n", "\r"]
  texts.forEach(t => {
    t.trim().toLowerCase().split("").forEach(c => {
      if (!exclude.includes(c)) {
        if (!o[c]) {
          o[c] = 0
        }
        o[c] += 1;
      }
    })
    
  });
  console.log(o);
  return o
};