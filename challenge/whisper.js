/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

/* const whisper = (strg) => {
  let array = strg;
  if (strg.endsWith("!")) {
    array = strg.substring(0, strg.length - 1);
  }
  return "shh... " + array.toLowerCase();
};

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!")); */

const whisper = (strg) => {
  let array = strg;
  if (strg.endsWith("!")) {
    return (
      "shh... " + array.slice(0, -1).toLowerCase()
    ); /* slice() method returns a shallow copy of a 
    portion of an array into a new array object selected 
    from start to end (end not included) where start and end 
    represent the index of items in that array. The original 
    array will not be modified. */
  }
  return "shh... " + array.toLowerCase();
};

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));

const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(4));
