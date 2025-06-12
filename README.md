# Trivia Game
This app, simply named `Trivia Game`, is a basic frontend to the [https://opentdb.com/api_config.php](https://opentdb.com/api_config.php) API that returns trivia questions to the user.  This application was written in `Angular` and `Typescript` using `Yarn` and was meant as nothing more than a simple exercise.

## Running Trivia Game
This game can be accessed online here: [https://joseph-melendez.github.io/trivia-game-angular/](https://joseph-melendez.github.io/trivia-game-angular/)

In order to download and run Trivia Game (note this was created with Node `v22.14.0` and Angular `20.0.1`):

1. Clone the repository to your computer: `git clone https://github.com/joseph-melendez/trivia-game-angular.git`
2. Change directories to: `trivia-game-angular`
3. Install the necessary node module with one of the following commands: `yarn` or `npm install`
4. Run the game with one of the following commands: `yarn start` or `npm run start`
5. Go to your browser and open the following url: [http://localhost:4200](http://localhost:4200)

## Playing Trivia Game
Playing Trivia Game is very easy:

1. From the home page, select the number of questions you would like to answer, from 1 to 20, and the difficulty of the questions (Any, Easy, Medium, or Hard), and click `Start`.
2. Answer by clicking on any of the answers, then selecting the `Answer` button.
3. You will then be informed if you answered the question correctly, or, if incorrect, you will be informed of the correct answer.
4. Click `Next Question` to go to the next question or, if that was the final question, to the final screen that will inform you of how many questions you got correct.
5. Click `Play Again` to return to the home page.

## Deploying Trivia Game
At the present time, there is no build pipeline setup.  In order to deploy the Trivia Game to GitHub Pages, please run the following command: `npm run deploy`