export function reverseHexadecimalNumber(hex) {
  // Translate to hexadecimal notation
  let s = (hex).toString(16);

  // Add a leading zero if needed
  s = s.replace(/^(.(..)*)$/, "0$1");

  // Split number in groups of two
  let a = s.match(/../g);
  a.reverse();

  return a.join("");
}
