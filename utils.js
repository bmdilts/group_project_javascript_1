// Princess Peach Group Javascript Project

// Function 1
function max(a, b) {
    if (a > b) return a
    else return b;
}
// Function 2
function maxofThree (n1, n2, n3) {
  var max = Math.max(n1, n2, n3);
  return max;
}

console.log(maxofThree(20, 3, 5));
// Function 3
var findVowel = function(letter) {

    var vowels = ["a", "e", "i", "o", "u"];

    for (var i = 0; i < vowels.length; i++) { 
        if (letter === vowels[i]) { 
            return true;
        }
    }

    return false; 

};
// Function 4
function sum (x,y) {
  return: x + y
}
// Function 5
function CalcAvg(Num1, Num2, Num3)
{return (Number(Num1) + Number(Num2) + Number(Num3))/3;}

CalcAvg (1, 2, 3);
// Function 6
function getLength(a) {
    return a.length;
}

// Function 7
function greaterThan (p1,p2){
  if (p2 > p1){
    return true;
  }
  else {
    return false;
  }
}
// Function 8
function greet(x) {return ("Hello " + x + "!");}

// Function 9
function madlib (noun, verb, adjective, noun2, adverb){
  var sentence = ("The " + noun + " decided to " + verb + " today. The " + noun + " had " + adjective + " " + noun2 + "s, which helped them " + verb + " " + adverb + ".");
  return sentence;
}
