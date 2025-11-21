//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const regex1 = /^[^a-z]*$/g;
const regex2 = /.*[A-Z].*/g;

export const hey = (message) => {
  message = message.trim()
  if (message.endsWith("?") && message.match(regex1) && message.match(regex2))
    return "Calm down, I know what I'm doing!"
  if (message.endsWith("?"))
    return "Sure."
  if (message.match(regex1) && message.match(regex2))
    return "Whoa, chill out!"
  if (message.match(/^\s*$/g))
    return "Fine. Be that way!"
  return "Whatever."
};
