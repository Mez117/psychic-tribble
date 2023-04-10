# Custom character Tic Tac Toe
I would like to introduce my version of Tic Tac Toe to the world. It's inspired by games with customizable avatars and cosmetics, allowing you to express yourself in whatever manner you'd like. Unfortunately the time I was hoping to dedicate to this project was unavailable. However, this project is by no means finished and I will continue to add features such as a bot with two difficulties, local storage, another game variant and perhaps multiplayer.

## :computer: [Click here](https://mez117.github.io/psychic-tribble/) to see my live project!

## :page_facing_up: About
A twist on a classic Tic Tac Toe game with the ability to customize your player
![Example of the Game!](/TicTacToe.png)

## :question: How to Play
- Click on the link above to open the game in a web browser.
- Admire the page.
- Choose which player goes first (read next 3 steps before choosing)
- Option 1: leave the text box empty and choose who starts: cross or circle, which will start a regular tic tac toe game.
- Option 2: write a name in the text box in order to pick a custom name for your player. Then click on the corresponding 'cross' or 'circle' button to choose who starts.
- Option 3: copy an external image source and paste it into the text box. Then click on the corresponding 'cross' or 'circle' button to choose who starts.
- NOTE: both characters can be either default, name or image. They do not need to be the same variable.
- Now click on any one of the squares attempting to get 3 in a row diagonally, horizontally or vertically.
- After each turn, the text will display who's turn it is next and allow you to keep track.
- Once you win, you can celebrate and either press the 'play again' button to rematch (keeping track of your wins) OR...
- You can press the reset button which will wipe all the scores and start a completely fresh game.
- Lastly, have fun!

## :pencil2: Planning & Problem solving
- Used a mix of writing my thought process alongside some pseodocode for naming and such.
- Code was originally really DRY and complicated which took me a while to re-write and improve upon.
- Many issues were faced when it came to applying custom names and images, allowing it to work seamlessly and revert back to the original image when a new game began.
![Pseudocode](/code.png)

## :rocket: Tools used
- Javascript
- HTML
- CSS
- jQuery library

## :cockroach: Bugs to fix
- Using a placeholder for the name of the images instead of the image link
- The animations for the strikethrough will not work if you click 'Play again' before the strikethrough fully animates.


## :sob: Lessons learnt
- The benefits of planning.
- The importance of pseudocode and formatting your code neatly to make it more readable and DRY.
- How to animate objects.
- How to create a game that keeps track of values and can be played continuously.
- How to change values and images dependant on the users input.

## :heavy_check_mark: Future features
- More reactive animations and styling.
- 4x4 and 5x5 game modes.
- Navigation bar to change between 3x3 and 4x4.
- An optional bot.
- Online multiplayer.
- Local storage.