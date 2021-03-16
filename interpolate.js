function interpolate(string, dictionary) {
  const wordArray = string.split(" ");
  //loop through sentence and identify tokens
  const interpolatedArray = wordArray.map((word) => {
    //remove other symbols from string e.g commas & fullstops using regular expression.
    const regex = /\[(.*)\]/;
    const sanitize = word.match(regex);
    const sanitizedWord = sanitize ? sanitize[0] : word;

    if (checkIfToken(sanitizedWord)) {
      //strip brackets
      const tokenWord = sanitizedWord.slice(1, sanitizedWord.length - 1);
      //if word is still bounded by brackets after being stripped, it has double brackets, if not it has single brackets.
      if (checkIfToken(tokenWord)) {
        return tokenWord;
      } else {
        //check dictionary for key word, if it exists in dictionary then return it. If not, return token.
        if (tokenWord in dictionary) {
          return dictionary[tokenWord];
        } else {
          return "[" + tokenWord + "]";
        }
      }
    } else {
      return word;
    }
  });
  //take parsed array and concatenate it back into a single sentence.
  return interpolatedArray.join(" ");
}

//this function takes a single word and returns true if it is bounded by [] or [[]] and false if not.
function checkIfToken(word) {
  if (word.charAt(0) === "[" && word.charAt(word.length - 1) === "]") {
    return true;
  } else {
    return false;
  }
}

module.exports = interpolate;
