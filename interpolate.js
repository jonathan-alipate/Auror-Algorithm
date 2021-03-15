//this function strips brackets from token

//this function takes a given string and parses it to identify words bounded by [], it then returns identified tokens in an array.
//if none exist, returns an empty array.
function getTokens(string){
    //break sentence into an array of words
    const wordArray = string.split(" ")
    const tokenArray = []
    wordArray.forEach(word => {
        //check if word is bounded by '[]' brackets(includes '[[]]')
        if(word.charAt(0) === "[" && word.charAt(word.length - 1) === "]"){
            tokenArray.push(word)
        }
    })
    return tokenArray
}

function interpolate(string, dictionary){

}

getTokens("hi there, my name is johnny hello")

module.exports = interpolate