module.exports = {

  /**
   * Counts the number of occurances of "cloud" in the phrase.
   * @param  {String} phrase
   * @return {Number} the number of times "cloud" shows up in `phrase`
   */
  findCloud: function(phrase) {
    return phrase.match(/\b(cloud|Cloud)\b/g).length;
  },

  /**
   * Replaces all instances of the word "cloud" with another word.
   * Maintains capitalization.
   * @param  {String} phrase
   * @param  {String} newWord the word to replace "cloud"
   * @return {String} The new phrase.
   */
  replaceCloud: function(phrase, newWord) {
    var lowerCase = newWord;
    var upperCase = newWord.charAt(0).toUpperCase() + newWord.substr(1);

    //replace lowercase the word cloud with lowercase box
    var newPhrase = phrase.replace(/\b(cloud)\b/g,lowerCase);
    console.log(newPhrase);
    //return uppercase the word Cloud with the uppercase Box
    return newPhrase.replace(/\b(Cloud)\b/g,upperCase);
  },

  /**
   * CHALLENGE
   * Replaces a word with another word.
   * Maintains capitalization.
   * @param  {String} phrase      The original phrase
   * @param  {String} targetWord  The word to find
   * @param  {String} newWord     The word to replace the `target` word with
   * @return {String}             A new phrase with all `target` words replaced
   */
  replaceWords: function(phrase, targetWord, newWord) {
  }

};
