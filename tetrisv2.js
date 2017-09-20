'use strict';
var startRow=document.getElementById('5');
var board=[];
var pieces=[];
var keypressed = false;
var keycode=0;
var DivCount=0;
var stop=0;
var color = ['green', 'yellow' , 'blue' , 'red' , 'orange' , 'pink' , 'white'];
BoardInit();
piecesInit();	

/*Initialization*/
function BoardInit() /*Initialize Board Array*/
{	
	for(var i=0;i<22;i++)
	{
		board[i]=[];
		for(var j=0;j<10;j++)
		{
			board[i][j]=0;
		}
	}
}

function piecesInit()	/*Initialize pieces Array*/
{
	for(var i=0;i<2;i++)
	{
		pieces[i]=[];
		for(var j=0;j<4;j++)
		{
			pieces[i][j]=0;
		}
	}
}

/*Generate table dynamically*/
function initialize()			
{
	var tab=document.getElementById('tab');
	
	var i=0,j=0;
	var counter=0;
		for(i=0;i<22;i++)
		{
			var trbaccha = document.createElement("TR");
				trbaccha.setAttribute("id","tr"+i);
				tab.appendChild(trbaccha);
			for(j=0;j<10;j++)
			{
				
				var trPar = document.getElementById("tr"+i);
				var baccha = document.createElement("TD");
				baccha.setAttribute("id",counter);
				trPar.appendChild(baccha);
				//baccha.innerHTML=i+" "+j;
				counter++;
			}
		}	
}

/*#############################################################################33*/

function run()
{
	debugger;
	display();
	
	var dropInterval=setInterval(moveDown,500,dropInterval);
	//clearInterval(dropInterval);
	/*if(stop==1)
	{
		
		clearInterval(dropInterval);
	}*/
	
	//gameOver();
	//moveDown(dropInterval);
	
}

	


function display()	/*Run on button Click*/
{
	
	//BoardInit();
	var t = document.getElementById('tab');
	//debugger;
	var ObjectsArray=[OGen,TGen,JGen,ZGen,lineGen,SGen,LGen];
	var block=ObjectsArray[Randomize()]();
	//alert(block);
	var start=3;
	//alert(line.length);
	//pieces[1][1]=23;
	var randm = Randomize();
	for(var i=0 ; i< 2 ; i++)
	{
		start=3;
		//alert(line[i]);
		for(var j=0 ; j< 4 ; j++)
		{
			if(block[i][j]==1)
			{
				var d = GenDiv(randm);
				//t.rows[i].cells[start].style.backgroundColor="green";
				t.rows[i].cells[start].appendChild(d);
				board[i][start]=1;
				//alert(board[i][start]);
				start++;
			}
			else
			{
				start++;
				board[i][start]=0;
			}
			//alert(board[i][j]);
		}
		
	}
	
	//alert(JSON.stringify(board));			
}

/*****************************************************************************/

function GenDiv(rand)	/*Dynamically generate div on request*/
{
	var div=document.createElement("DIV");
	div.setAttribute("id","DivCount");
	div.setAttribute("class","block");
	div.style.backgroundColor=color[rand];
	DivCount++;
	return div;
}

/*****************************************************************************/

/*generating pieces on request*/
function lineGen()
{
	//piecesInit();
	//alert(pieces.length);
	pieces = [[1,1,1,1],[0,0,0,0]];
	
	return pieces;
}

function TGen()
{
	//piecesInit();
	//alert(pieces.length);
	pieces = [[0,0,1,0],[0,1,1,1]];
	return pieces;
}

function OGen()
{
	//piecesInit();
	//alert(pieces.length);
	return [[0,1,1,0],[0,1,1,0]];
	 
}

function LGen()
{
	//piecesInit();
	//alert(pieces.length);
	pieces = [[0,0,1,0],[1,1,1,0]];
	return pieces;
}

function JGen()
{
	//piecesInit();
	//alert(pieces.length);
	pieces = [[0,1,0,0],[0,1,1,1]];
	return pieces;
}

function ZGen()
{
	//piecesInit();
	//alert(pieces.length);
	pieces = [[1,1,0,0],[0,1,1,0]];
	return pieces;
}

function SGen()
{
	//piecesInit();
	//alert(pieces.length);
	pieces = [[0,1,1,0],[1,1,0,0]];
	return pieces;
}

/*******************************************************************/
function Randomize()
{
	var rand = Math.floor(Math.random()*7);
	return rand;
}


function moveDown(dropInterval)
{
	
	var t = document.getElementById('tab');
	/*var t = document.getElementById('tab');
	var d=document.getElementsByClassName("block")[0];
	t.rows[2].cells[5].appendChild(d);*/
	for(var i=20 ; i>=0 ; i--)	
	{
		//start=3;
		for(var j=0 ; j< 10 ; j++)
		{
			//debugger;
//alert(tempboard[i][j]);
			if(board[i][j]==1)
			{
				
				if(board[i+1][j]==0)
				{
					if(board[i][j+1]==1 && board[i+1][j+1]==1)
					{
						clearInterval(dropInterval);
						break;
					}
					
				var md = t.rows[i].cells[j].getElementsByClassName("block")[0];
				//alert(md);
				if(keypressed==true && keycode == 97)
					{
						//alert("keypressed")
						moveLeft(i,j,t,md);
						continue;
						//alert(JSON.stringify(board));
						
					}
				t.rows[i+1].cells[j].appendChild(md);
				board[i][j]=0;
				board[i+1][j]=1;
				
					
				//alert(JSON.stringify(board));
				}
				else //if(board[i+1][j]==1)
				{
					clearInterval(dropInterval);
					break;
				}
				
			}	
			
		}
		
	}
	keypressed=false;
		keycode=0;
	//clearInterval(dropInterval);
	//stop=1;
}

function gameOver()
{
	for (var j=0 ; j<10 ; j++)
	{
		if(board[0][j]==1)
		{
			alert("GAME OVER");
		}
	}
	
}

function key(event)
{
	
	keycode = event.keyCode;
	keypressed = true;
	//alert(keycode + " " + keypressed);
}

function moveLeft(row,cell,table,object)
{
	table.rows[row].cells[cell-1].appendChild(object);
	board[row][cell]=0;
	board[row][cell-1]=1;
	
}


