// What is the Big O of the below function? (Hint, you may want to go line by line)
// ~符号：看solution视频的时候补上的
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // ~ O(n)
    let stranger = true; // ~ O(n)
    a++; // ~(n)
  }
  return a; // ~ O(1)
}

// initial answer: O(n)
// solution: O(3 + 4n) gets simplified to O(n)