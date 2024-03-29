# Snake-game
In this Snake game setup, we create a canvas, store the snake's position and direction, generate food randomly, and draw the game elements. The update function handles movement, collision detection, and lengthening the snake. Game over stops the loop, and arrow key events change direction. The game updates every 300ms and is styled with CSS.



Canvas Setup: 🎨🖼️

Create a canvas element using document.createElement('canvas').
Get the 2D rendering context with canvas.getContext('2d').
Set the canvas width and height attributes for the board size.
Define the size of each cell as cellSize, and the board width and height as boardWidth and boardHeight.
Snake Initialization: 🐍🔄

Create a 2D array snakeCells to store the snake's positions.
Define the initial direction of the snake as a string variable (direction).
Food Generation: 🍎🎲

Create a function generateFood() to generate food at random positions within the board.
Use Math.random() to generate random positions and Math.floor() to round down to the nearest integer.
Drawing Function (draw): 🎨🖌️

Use the ctx.clearRect() method to clear the canvas before redrawing.
Use a loop to draw each cell of the snake as a filled rectangle (ctx.fillRect()).
Draw the food as a filled rectangle at the food position.
Update Function (update): 🔄🚀

Determine the new head position based on the current direction (direction variable).
Check for game over conditions (e.g., hitting walls or overlapping with the snake itself) using isGameOver() and isSnakeOverlap() functions.
If the snake eats food (head position matches food position), generate new food and increase the snake's length by adding a new cell to the snakeCells array; otherwise, move the snake by adding a new head cell and removing the tail cell (snakeCells.pop()).
Game Over Handling: 🚫🎮

Use the clearInterval() method to stop the game loop (gameLoop).
Event Listener: 🔊🕹️

Use document.addEventListener('keydown', function(event)) to listen for keydown events.
Update the direction variable based on the arrow key pressed (event.key).
Game Loop: 🔁⏰

Use setInterval(update, 300) to repeatedly call the update function every 300 milliseconds.
CSS Styling: 🎨🖌️

Use CSS to style the canvas, including setting the border and background color (canvas.style.border, canvas.style.backgroundColor).
These emoji summarize the basic structure for creating a Snake game using HTML canvas, CSS, and JavaScript.
