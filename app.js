// Array of words to draw from
var words = [
  'bubbler', 'cheese', 'Uecker', 'beer', 'brats', 'polka', 'Miller', 'kringle', 'Harley', 'Culver\'s', 'brandy', 'PBR', 'farms', 'crick', 'tailgating', 'WauKEEsha', 'Schlitz', 'Badgers', 'Packers', 'cheesehead'
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
  console.log(sentence);
  // return sentence
  $( '#sentence' ).append("<p>" + sentence + "</p>");

};











