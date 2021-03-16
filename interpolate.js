function interpolate(string, dictionary) {
  //break sentence into an array
  const wordArray = string.split(" ");
  //loop through sentence and identify tokens
  wordArray.forEach((word) => {
    //remove other symbols from string e.g commas & fullstops using regular expression.
    const regex = /\[(.*)\]/;
    const sanitize = word.match(regex);
    const sanitizedWord = sanitize ? sanitize[0] : word;

    //if checkIfToken is true, go and replace the word, else skip.
    if (checkIfToken(sanitizedWord)) {
      //strip brackets
      const tokenWord = sanitizedWord.slice(1, sanitizedWord.length - 1);
      //if word is still bounded by brackets after being stripped, it has double brackets, if not it has single brackets.
      if (checkIfToken(tokenWord)) {
        //replace instance of word in sentence with single bracketed token.
        string = string.replace(sanitizedWord, tokenWord);
      } else {
        //check dictionary for key word, if it exists in dictionary then return it. If not, return token.
        if (tokenWord in dictionary) {
          //replace instance of word in sentence with dictionary word.
          string = string.replace(sanitizedWord, dictionary[tokenWord]);
        }
      }
    }
  });
  //return the modified sentence
  return string;
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
