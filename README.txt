Tetris by 1417
Disclaimer: Works on chrome only because of key configuration

working files
tetrisv2.html
tetrisv5.js
tetris.css


Naming of the functions describes the intention of the function
Also provided with comments
Working:
I have used tables to make a grid and a block is made up of divs

Display() function Randomly display the Block on a grid startin from the position 0th row and 3rd column
It inturn calls GenDiv to generate divs dynamically

MoveDown() function drops the div only if it gets true from CheckDrop() function.

CheckDrop() function uses another 2x2 matrix TempBoard which is an exact copy of the Board Matrix to 
check if there is any other block below current block which is to be droped

MoveLeft function moves the block to the left only if checkLeft function returns true which checks if there 
is any block on the left

MoveRight function works similar to MoveLeft function

Rotate function rotates the block in clockwise direction only if rotateCheck returns true which checks
for the conditions like for extreme Left, extreme right; you cannot rotate when block reaches last row or
when block is in first row.

Trotate(),Zrotate() .. etc
it consist of a next position of the block stored as an array it is stored as [row,column,row,column...] 
index 0 and 1 is for 1st time rotation 2 and 3 for 2nd rotation similarly for 3r and 4th rotation.

LineComplete() checks for the line completion from the last row if the row contains 10 divs then it is cleared
the divs above are pulled down using alignDivs() and it again starts checking from the last row



 



