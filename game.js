// Function to play the "Guess the Number" game
function guess_the_number() {
    // Display the stylish ASCII art and game rules
    console.log(`
     ______       _                       _
    |  ____|     (_)                     | |
    | |__   _ __  _  __ _ _ __ ___   __ _| |
    |  __| | '_ \\| |/ _\\ | '_ \` _ \\ / _\` | |
    | |____| | | | | (_| | | | | | | (_| |_|
    |______|_| |_|_|\\__, |_| |_| |_|\\__,_(_)
                     __/ |
                    |___/ 
    `);
    console.log('Can you guess the secret number?');
    console.log('');
    console.log(`Game Rules:
1. The computer will generate a random number between 1-100.
2. The user will be asked to guess the number within that range.
3. The user can keep guessing until they correctly guess the number or choose to quit the game.
4. After each guess, the computer will respond with one of the following:
    · "Correct!" if the user's guess matches the generated number.
    · "Greater" if the user's guess is less than the generated number.
    · "Lesser" if the user's guess is greater than the generated number.
5. The user's score will be calculated based on the number of attempts it took to guess the correct answer using the formula: Score = 100 - (Number of Guesses * 10).
6. The game ends when the user correctly guesses the number.
7. The final score will be displayed on the screen along with a message based on their performance.`)
    console.log('');
    //Using readlineSync to take user input
    const readlineSync = require('readline-sync');

    // Ask the user if they want to play
    let play_or_not = readlineSync.question("Do you want to play? (Y/N): ");

    if (play_or_not.toUpperCase() == 'Y') {
        // Generate a random number for the game
        let random_num = Math.floor((Math.random() * 100) + 1);
        let guesses = 0;

        while (true) {
            // Ask the user to guess the number
            let guess_num = readlineSync.question('Guess the Number between 1 - 100: ');

            if (guess_num == random_num) {
                // If the guess is correct, display the score and exit the game
                guesses += 1;
                console.log(`Correct! You guessed the number in ${guesses} attempts, and your Score is ${100 - (guesses * 10)}`);
                break;
            } else if (guess_num > random_num) {
                // If the guess is greater than the random number, inform the user and continue the game
                console.log("Lesser. Try again");
                guesses += 1;
            } else if (guess_num < random_num) {
                // If the guess is lesser than the random number, inform the user and continue the game
                console.log("Greater. Try again!")
                guesses += 1;
            } else {
                // If the user enters an invalid value, prompt them to try again
                console.log("Please enter a value between the provided range")
            }
        }
    }
}

// Call the game function to start the game
guess_the_number();
