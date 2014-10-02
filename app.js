// Array of single words to draw from
var words = [
  'bubbler', 'cheese', 'Uecker', 'beer', 'brats', 'polka', 'Miller', 'kringle', 'Harley', 'Culver\'s', 'brandy', 'PBR', 'farms', 'crick', 'tailgating', 'WauKEEsha', 'Schlitz', 'Badgers', 'Packers', 'cheesehead'
];
// Array of phrases to draw from
var phrases = [
  'bubbler', 'frozen custard', 'cheese curds', 'Brew Crew', 'ice fishing', 'Friday fish fry', 'Bob Uecker', 'beer', 'brats', 'Green Bay Packers', 'kringle', 'Door County cherries', 'sausage race', 'Harley Davidson', 'Big Buck Hunter', 'church basement bingo', 'PBR', 'rummage sales', 'cottage upnort', 'Schlitz', 'borrow me', 'Mars Cheese Castle', 'the Dells', 'stop \'n go lights', 'Badgers', 'polka', 'WauKEEsha', 'farms', 'I seen it', 'deer hunting season', 'Miller', 'I-94', 'ice shanties', 'Farm & Fleet Fleet Farm', 'Oshkosh B\'Gosh', 'cheddar and horseradish', 'crick', 'supper club', 'Huber Bock', 'real mitten state', 'Culver\'s', 'cheesehead', 'long underwear', 'doncha know', 'tailgating', 'Tyme Machine', 'deer shining', 'brandy', 'come here once', 'er no?', 'rail drink', 'I closed Wolski\'s', 'toe warmers'
];
// A function that shuffles an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
// returns an array of unique random numbers given a specified range
function selectKOutOfN(k, n) {
  if (k>n) throw "k>n";
  var selection = [];
  var sorted = [];
  for (var i = 0; i < k; i++) {
    var rand = Math.floor(Math.random()*(n - i));
    for (var j = 0; j < i; j++) {
      if (sorted[j]<=rand)
        rand++;
      else
        break;
    }
    selection.push(rand);
    sorted.splice(j, 0, rand);
  }
  return selection;
}
// function that capitalizes
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
// function that returns a random number given an input range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// function that returns a num length array of unique strings from words array
function sentenceMaker(num) {
  //remove previous element
  $( '.eraser' ).empty();
  var newArr = [];
  shuffle(words);
  //gives you an array of num length number of random unique numbers
  var randos = selectKOutOfN(num, words.length);
  // get exactly those indicies out of the words array 
  for (i = 0; i < num; i++) {
    newArr.push(words[randos[i]]);
  }
  var capitalFirst = capitalizeFirstLetter(newArr[0]);
  newArr.splice(0, 1, capitalFirst);
  var sentence = newArr.join(' ') + '.';
  // return sentence
  $( '#sentence' ).append("<p>" + sentence + "</p>");
};
// a function that generates an array of strings that are sentences
// complete with capitalized first words, ending periods and commas, if possible
function sentenceGen() {
  // array to contain the random sentences
  var randSentence = [];
  // first, for extra randomness, shuffle the phrases array
  shuffle(phrases);
  // determine how long the sentence should be by getting a random number
  // the sentence should be at least 5 phrases
  var sentLength = getRandomInt(3, 10);
  //gives you an array of random unique numbers
  var uniqueNums = selectKOutOfN(sentLength, phrases.length);
  // get exactly those indicies out of the words array 
  for (i = 0; i < sentLength; i++) {
    randSentence.push(phrases[uniqueNums[i]]);
  }
  var capitalizeFirst = capitalizeFirstLetter(randSentence[0]);
  randSentence.splice(0, 1, capitalizeFirst);
  var newSentence = randSentence.join(' ') + '.';
  return newSentence;
};
// function that returns paragraphs
function paragraphMaker(p) {
  // initialize the paragraphs array
  var paragraphs = [];
  // p = the number paragraphs
  // paragraphs contain a random number of sentences
  // make p number of arrays
  for (var i = 0; i < p; i++) {
    // generate a random number that is the number of sentences in the ith paragraph
    var rand = getRandomInt(3, 5);
    // push a new array into paragraphs
    paragraphs.push(new Array());
    // call sentenceGen() rand many times and push them into the ith element of paragraphs
    for (var j = 0; j < rand; j++) {
      paragraphs[i].push(sentenceGen());
    }
  }
  for (var i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].join(' '));
 }
};
paragraphMaker(3);







