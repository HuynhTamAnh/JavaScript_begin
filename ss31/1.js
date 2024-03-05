function findLongestWordLength(str) {
    var words = str.split(' ');
    var longestWord = words.reduce(function(longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return [longestWord, longestWord.length];
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));