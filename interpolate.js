function interpolate(string, dictionary) {
  //break sentence into an array
  const wordArray = string.split(" ");

  //loop through sentence and identify tokens
  wordArray.forEach((word) => {

    //extract any words surrounded by []
    const regex = /\[(.*)\]/;
    const sanitize = word.match(regex);

    //if regex finds a token, go and replace it, else skip.
    if (sanitize) {
      const token = sanitize[0]; //whole token
      const tokenWord = sanitize[1]; //inner word
      //if word is still bounded by brackets after being stripped, it has double brackets, if not it has single brackets.
      if (checkIfToken(tokenWord)) {
        //replace instance of word in sentence with single bracketed token.
        string = string.replace(token, tokenWord);
      } else {
        //check dictionary for key word, if it exists in dictionary then return it. If not, return token.
        if (tokenWord in dictionary) {
          //replace instance of word in sentence with dictionary word.
          string = string.replace(token, dictionary[tokenWord]);
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