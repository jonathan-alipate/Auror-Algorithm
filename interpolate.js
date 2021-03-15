function interpolate(string, dictionary) {
  const wordArray = string.split(" ");
  //loop through sentence and identify tokens
  const interpolatedString = wordArray.map((word) => {
    if (checkIfToken(word)) {
      //strip brackets
      const tokenWord = word.slice(1, word.length - 1);
      //if word is still bounded by brackets after being stripped, it has double brackets
      if(checkIfToken(tokenWord)){
        console.log(tokenWord)
      } else {
          //check dictionary for key word, if it exists in dictionary then return it. If not, return token.
          if(tokenWord in dictionary){
              return dictionary[tokenWord]
          } else {
              return tokenWord
          }
      }
    } else {
      console.log(word)
    }
  })
}

//this function takes a single word and returns true if it is bounded by [] or [[]] and false if not.
function checkIfToken(word) {
  if (word.charAt(0) === "[" && word.charAt(word.length - 1) === "]") {
    return true;
  } else {
    return false;
  }
}

interpolate("Hello [name] [[author]]", { name: "Jim" });

module.exports = interpolate;
