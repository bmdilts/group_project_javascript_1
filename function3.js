var findVowel = function(letter) {

    var vowels = ["a", "e", "i", "o", "u"];

    for (var i = 0; i < vowels.length; i++) { // don't use for...in with Arrays
        if (letter === vowels[i]) { // Use array indexing instead
            return true;
        }
    }

    return false; // This is after the loop

};