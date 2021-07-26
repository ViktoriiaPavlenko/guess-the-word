const words = ['кот', 'собака', 'автобус']
const word = words[Math.floor(Math.random() * words.length)];

const answerArray = []

for (let i = 0; i < word.length; i += 1) {
    answerArray[i] = '-'
}

let remainingLetters = word.length;
console.log(remainingLetters);

while (remainingLetters > 0) {
    alert(answerArray.join(' '));
    let guess = prompt('Guess the letter')
    guess = guess.toLowerCase()
    
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert('Please enter the letter!')
    } else {
        for (let i = 0; i < word.length; i += 1) {
            if (word[i] === guess) {
                answerArray[i] = guess;
                remainingLetters -= 1;
            }
        }
    }
}

alert('The word is ' + word)