/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

// Test your function

const panic = (sentence) => {
  const newSentence = sentence.toUpperCase() + "!";
  const words = newSentence.split(" ");
  if (words.length > 1) {
    const emoji = " 😱 ";
    const txt = newSentence.replace(/([ .,;]+)/g, emoji);
    return txt;
  } else if (words.length <= 1) {
    return newSentence;
  }
};

console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
console.log(panic("Hello"));
console.log(panic("H"));
console.log(panic(" "));
console.log(panic(""));
