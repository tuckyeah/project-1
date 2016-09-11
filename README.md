# Project 1: Tic Tac Toe

https://tuckyeah.github.io/project-1/

Game created for Web Developiment Initiative course at General Assembly Boston,
based on the [specs](https://github.com/ga-wdi-boston/game-project) provided.

## Features

- API Authentication for Sign up / sign in / change password / sign out
- Clickable game board that displays moves
- Display of user's complete game history (X wins, O wins, Draw games)
- Turn indicator for X or O turn
- Game over message to indicate the winner of the game
- New Game / Play Again button to start a new game during/at the end of a game.

## Technologies Used:

- Bootstrap
- SCSS/SASS
- JavaScript
- jQuery
- AJAX
- Additional technologies (grunt, 'require' system, etc) from General Assembly [browser template](https://github.com/ga-wdi-boston/browser-template)

## Development Process

### Planning

For the most part, I tried to keep my development process similar to
the [suggested schedule](https://github.com/ga-wdi-boston/game-project/blob/master/schedule.md) for this project.

Before starting to code, I looked at similar, simple web games like [2048](https://gabrielecirulli.github.io/2048/) to see their structure and layout for both desktop and mobile.

Then I began sketching out rough [wireframes](https://github.com/tuckyeah/game-project-scope-study/tree/response/wireframes) and adjusted them based on my [user stories](https://github.com/tuckyeah/game-project-scope-study/blob/response/study.md).

I began to write some rough model entities and wireframes to plan my program and file structure, as well as identifying how I would break apart the user's / game actions into discrete functions. Once I had a rough sense of how I was going to tackle this, I began to start coding.

### Development Process

The first thing I did was build a very rough 'wireframe' HTML / CSS page that would display a title, authentication forms, and a simple grid. Before I jumped into interacting with the grid, however, I switched from there into beginning to develop the game logic.

For this process, I stuck to developing mostly in the node REPL to make sure the logic was sound. Once I was confident that the JS dictating the game and win conditions was fairly complete, I began to work with jQuery on the GUI, and making sure the visual gameboard updated correctly based on the game board stored in memory.

After the game was functional and playable on the HTML page, I moved into working on authentication. I first completed the basic auth functions of sign up, sign in, change password, and sign out, and making sure that the correct buttons for each of these functions appeared at the right time (eg 'sign out' was not visible before you had signed up/signed in).

Then I began to refactor my game logic and jQuery to include the calls to the API, to update the game board with each move and creating a new game. Once this was complete, I tackled retrieving the complete list of games associated with a user from the API and using that data to display the win / loss / draw ratio of every complete game they had played.

After all this was done, the rest of my time was mostly spent on making tweaks to the UI and making sure it looked good and functioned right on mobile devices as well. I played around a lot with color schemes and layout, and was able to simultaneously sign up and log in without having to through an extra step, which was pretty exciting.

## Unsolved Problems and Next Steps

- Reorganize my JS and CSS file structure - I think my current set up is a little cluttered and probably not the most efficient at separating concerns.

- Use constructors and prototypes for the game / user objects - I'm not totally sure how I would do this quite yet, but hopefully as we spend more time on the principles of Object Oriented Programming, I'll be able to come back to this.



- Add the ability for the user to choose custom tokens - I really want to do a Donald Trump / Hillary Clinton option.



- Add the ability to change / choose from a selection of color schemes



- Save game data so a player can later resume a game



- Add multiplayer functionality so two players can compete on two separate devices.



- Fix a handful of small layout issues for all screen sizes - there's a few scaling issues that don't quite look the way I'd like.


## Wireframes and User Stories

- [Wireframes](https://github.com/tuckyeah/game-project-scope-study/tree/response/wireframes)

- [User Stories](https://github.com/tuckyeah/game-project-scope-study/blob/response/study.md)
