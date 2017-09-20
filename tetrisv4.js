'use strict';
var startRow=document.getElementById('5');
var board=[];
var TempBoard=[]
var pieces=[];
var temp=[];
var keypressed = false;
var keycode=0;
var dropInterval
var DivCount=0;
var index=0;
var stop=0;
var currentBlock;
var runAlignDiv = false;
var rotCount=0;
var n=0;
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

function TempBoardInit() /*Initialize Board Array*/
{	
	for(var i=0;i<22;i++)
	{
		TempBoard[i]=[];
		for(var j=0;j<10;j++)
		{
			TempBoard[i][j]=0;
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


function tempInit()	/*Initialize pieces Array*/
{
	for(var i=0;i<4;i++)
	{
		temp[i]=0;
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
				baccha.setAttribute("id","td"+counter);
				trPar.appendChild(baccha);
				//baccha.innerHTML=i+" "+j;
				counter++;
			}
		}	
}

/*#############################################################################33*/

function run()
{
	document.getElementById("button").style.display="none";
	if(runAlignDiv==true)
	{
		alignDivs();
		runAlignDiv=false;
	}
	LineComplete();
	gameOver();
	display();
	
	dropInterval=setInterval(moveDown,500);
	//clearInterval(dropInterval);
	/*if(stop==1)
	{
		
		clearInterval(dropInterval);
		stop=0;
		
	}
	else
	{
		clearInterval(dropInterval);
		var dropInterval=setInterval(moveDown,500);
	}*/
}

	


function display()	/*Run on button Click*/
{
	tempInit();
	
	//BoardInit();
	var t = document.getElementById('tab');
	//debugger;
	var ObjectsArray=[OGen,TGen,JGen,ZGen,lineGen,SGen,LGen];
	currentBlock = Randomize();
	var block=ObjectsArray[currentBlock]();
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
				//board[i][start]=1;
				//alert(board[i][start]);
				start++;
			}
			else
			{
				start++;
				//board[i][start]=0;
			}
			
		}
		
	}
	//alert(JSON.stringify(temp));
	//alert(JSON.stringify(board));			
}

/*****************************************************************************/

function GenDiv(rand)	/*Dynamically generate div on request*/
{
	var div=document.createElement("DIV");
	div.setAttribute("id",DivCount);
	div.setAttribute("class","block");
	div.style.backgroundColor=color[rand];
	div.innerHTML = DivCount;
	setTemp(DivCount);
	DivCount++;
	return div;
}


function setTemp(c)
{
	if(index < 4)
	{
	temp[index]=c;
	index++;
	return 0;
	}
	else
	{
		index = 0;
		setTemp(c);
	}
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


function moveDown()
{
	
	var t=document.getElementById("tab");
	var i=0;
	//debugger;
	
	//LineComplete();
	
	var chk = checkDrop();
	if(chk == true)
	{
		for(i=3 ; i>=0 ;i--)
		{
			var ele = document.getElementById(temp[i]);
			//alert(ele.getAttribute("id"));
			var rin = ele.parentNode;
			var r = rin.parentNode.rowIndex; //row index of div
			var c = rin.cellIndex;			//column index of div	
		
			var md = document.getElementById(temp[i]);
			t.rows[r + 1].cells[c].appendChild(md);
			
		}
		
		return; 
		
	}
	else
	{
		for(i=3 ; i>=0 ;i--)
		{
			var ele = document.getElementById(temp[i]);
			//alert(ele.getAttribute("id"));
			var rin = ele.parentNode;
			var r = rin.parentNode.rowIndex; //row index of div
			var c = rin.cellIndex;			//column index of div
			board[r][c]=1;
		}
		//board[r+1][c]=1;
		clearInterval(dropInterval);
		rotCount=0;
		run();
		
	}
}

function checkDrop()
{
	TempBoardInit();
	for(var i=0 ; i<board.length ; i++)
	{
		for(var j=0 ; j<board.length ; j++)
		{
			TempBoard[i][j] = board[i][j];
		}	
	}
	var t=document.getElementById("tab");
	var TrueCounter = 0;
	for(var i=3 ; i>=0 ;i--)
	{
	var ele = document.getElementById(temp[i]);
	//alert(ele.getAttribute("id"));
	var rin = ele.parentNode;
	var r = rin.parentNode.rowIndex; //row index of div
	var c = rin.cellIndex;	//column index of div	
		
		if(r<21)
		{
			if(TempBoard[r+1][c] == 0)
			{
				TempBoard[r][c]=0;
				TempBoard[r+1][c]=1;
				TrueCounter++;
			}
			else
			{
				return;
			}
		
			}
		}
		
	if(TrueCounter == 4)
	{
		return true;
	}
	else
	{
		
		return false;
	}
}


function gameOver()
{
	var gamover=false;
	for (var j=3 ; j<7 ; j++)
	{
		if(board[1][j]==1)
		{
			alert("Game Over")
			location.reload();
		}
	}
	
}

/*function append(t)
{
	var md = t.rows[i].cells[j].getElementsByClassName("block")[0];
				
				t.rows[i+1].cells[j].appendChild(md);
				board[i][j]=0;
				board[i+1][j]=1;
}*/

function key(event)
{
	var t=document.getElementById("tab");
	keycode = event.keyCode;
	//alert(keycode);
	keypressed = true;
	if(keycode==97 || keycode==37)
	{
		moveLeft(t)
	}
	else if(keycode == 100 || keycode==39)
	{
		moveRight(t);
	}
	else if (keycode == 115 || keycode==40)
	{
		clearInterval(dropInterval);
		dropInterval = setInterval(moveDown,200);
	}
	else if(keycode == 119)
	{
		if(rotCount<=3)
		{
			n = rotCount;
			rotCount++;
			Rotate(n);
		}
		else
		{
			n=0;
			rotCount=0;
			rotCount++;
			Rotate(n);
		}
		
	}
	//alert(keycode + " " + keypressed);
}
/**************************************************leftMove with check*********************************/
function moveLeft(t)
{
	//debugger;
	clearInterval(dropInterval);
	var chk = checkLeft();
	//alert(chk);
	if( chk== true)
	{
	for(var i=0 ; i<4 ;i++)
		{
			var ele = document.getElementById(temp[i]);
			//alert(ele.getAttribute("id"));
			var rin = ele.parentNode;
			var r = rin.parentNode.rowIndex; //row index of div
			var c = rin.cellIndex;			//column index of div	
			//var md = document.getElementById(temp[i]);
			
			//board[r][c]=0;
			//board[r][c-1]=1;
			t.rows[r].cells[c-1].appendChild(ele);
		}
	}
	else
	{
		keypressed=false;
		var dropInterval = (moveDown,500);
	}
	keypressed=false;
	var dropInterval = (moveDown,500);
}




function checkLeft()
{
	TempBoardInit();
	for(var i=0 ; i<board.length ; i++)
	{
		for(var j=0 ; j<board.length ; j++)
		{
			TempBoard[i][j] = board[i][j];
		}	
	}
	//alert(JSON.stringify(TempBoard));
	var t=document.getElementById("tab");
	var TrueCounter = 0;
	for(var i=0 ; i<4 ;i++)
	{
	var ele = document.getElementById(temp[i]);
	//alert(JSON.stringify(temp[i]));
	//alert(ele.getAttribute("id"));
	var rin = ele.parentNode;
	var r = rin.parentNode.rowIndex; //row index of div
	var c = rin.cellIndex;	//column index of div	
		
		if(r<21)
		{
			if(TempBoard[r][c-1] == 0)
			{
				TempBoard[r][c]=0;
				TempBoard[r][c-1]=1;
				TrueCounter++;
			}
			else
			{
				return;
			}
		
			}
		}
		
	if(TrueCounter == 4)
	{
		return true;
	}
	else
	{
		
		return false;
	}
}
/**************************************************End of leftMove with check**************************/


/**************************************************Right Move with check*********************************/
function moveRight(t)
{
	//debugger;
	clearInterval(dropInterval);
	var chk = checkRight();
	//alert(chk);
	if( chk== true)
	{
	for(var i=3 ; i>=0 ;i--)
		{
			var ele = document.getElementById(temp[i]);
			//alert(ele.getAttribute("id"));
			var rin = ele.parentNode;
			var r = rin.parentNode.rowIndex; //row index of div
			var c = rin.cellIndex;			//column index of div	
			//var md = document.getElementById(temp[i]);
			
			//board[r][c]=0;
			//board[r][c+1]=1;
			t.rows[r].cells[c+1].appendChild(ele);
		
		}
	}
	else
	{
		keypressed=false;
		var dropInterval = (moveDown,500);
	}
	keypressed=false;
	var dropInterval = (moveDown,500);
}

function checkRight()
{
	TempBoardInit();
	for(var i=0 ; i<board.length ; i++)
	{
		for(var j=0 ; j<board.length ; j++)
		{
			TempBoard[i][j] = board[i][j];
		}	
	}
	//alert(JSON.stringify(TempBoard));
	var t=document.getElementById("tab");
	var TrueCounter = 0;
	for(var i=3 ; i>=0 ;i--)
	{
	var ele = document.getElementById(temp[i]);
	//alert(JSON.stringify(temp[i]));
	//alert(ele.getAttribute("id"));
	var rin = ele.parentNode;
	var r = rin.parentNode.rowIndex; //row index of div
	var c = rin.cellIndex;	//column index of div	
		
		if(r<21)
		{
			if(TempBoard[r][c+1] == 0)
			{
				TempBoard[r][c]=0;
				TempBoard[r][c+1]=1;
				TrueCounter++;
			}
			else
			{
				return;
			}
		
			}
		}
		
	if(TrueCounter == 4)
	{
		return true;
	}
	else
	{
		
		return false;
	}
}
/**************************************************End of leftMove with check**************************/

/**************************************************Rotate*********************************************/

function Rotate(n)
{
	clearInterval(dropInterval);
	var RotArray=[oRotate,tRotate,jRotate,zRotate,iRotate,sRotate,lRotate];
	debugger;
		//alert(currentBlock);
		var j=0;
		var arr = RotArray[currentBlock](n);
		var t=document.getElementById("tab");
		var rc = RotateCheck(arr);
		if( rc == true)
		{
		for (var i=0 ; i<4 ;i++)
		{
			var div = document.getElementById(temp[i]);
			var r = div.parentNode.parentNode.rowIndex;
			var c = div.parentNode.cellIndex;
			//board[r][c]=0;
			//board[r+arr[j]][c+arr[j+1]]=1;
			t.rows[r+arr[j]].cells[c+arr[j+1]].appendChild(div);
			//alert(arr[j]+" "+arr[j+1]);
			
			j=j+2;
			
		}
		}
		else
		{
			rotCount = rotCount-1;
			//return;
		}
	dropInterval=setInterval(moveDown,500);	
}

function RotateCheck(arr)
{
	var co=0;
	var j=0;
	for (var i=0 ; i<4 ;i++)
	{
			var div = document.getElementById(temp[i]);
			var r = div.parentNode.parentNode.rowIndex;
			var c = div.parentNode.cellIndex;

	if( c+arr[j+1]>9 || c+arr[j+1]<0 || r+arr[j]<0)
		{
				co++;
		}
		j=j+2;
	}
	if(co>0)
	{
		return false;
	}
	else
	{
		return true;
	}		
}

function zRotate(n)
{
	var rot = [[-1,1,0,0,-1,-1,0,-2],[1,-1,0,0,1,1,0,2],[-1,1,0,0,-1,-1,0,-2],[1,-1,0,0,1,1,0,2]];
	return rot[n];
}

function sRotate(n)
{
	var rot = [[0,0,-1,-1,0,2,-1,1],[0,0,1,1,0,-2,1,-1],[0,0,-1,-1,0,2,-1,1],[0,0,1,1,0,-2,1,-1]];
	return rot[n]
}

function iRotate(n)
{
	var rot = [[-1,1,0,0,1,-1,2,-2],[1,-1,0,0,-1,1,-2,2],[-1,1,0,0,1,-1,2,-2],[1,-1,0,0,-1,1,-2,2]];
	return rot[n];
}

function lRotate(n)
{
	var rot=[[2,0,-1,1,0,0,1,-1],[0,-2,1,1,0,0,-1,-1],[-2,0,1,-1,0,0,-1,1],[0,2,-1,-1,0,0,1,1]];
	return rot[n]
}

function jRotate(n)
{
	var rot=[[0,2,-1,1,0,0,1,-1],[2,0,1,1,0,0,-1,-1],[0,-2,1,-1,0,0,-1,1],[-2,0,-1,-1,0,0,1,1]];
	return rot[n];
}

function oRotate(n)
{
	var rot=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
	return rot[n];
}

function tRotate(n)
{
	var rot=[[1,1,-1,1,0,0,1,-1],[1,-1,1,1,0,0,-1,-1],[-1,-1,1,-1,0,0,-1,1],[-1,1,-1,-1,0,0,1,1]];
	return rot[n];
}
/**************************************************End Rotate*********************************************/

/**************************************************completion Check*************************************/
function LineComplete()
{
	//debugger;
	//alert(JSON.stringify(board));
	var oneCounter=0;
	for (var i=21;i>=0;i--)
	{
		for(var j=0 ; j<10; j++)
		{
			if(board[i][j]==1)
			{
				oneCounter++;
			}
		}
		
		if(oneCounter==10)
		{
			runAlignDiv = true;
			//alert(oneCounter);
			for(var j=0 ; j<10; j++)
			{
			var t= document.getElementById("tab");
			//alert(t);
			var md=t.rows[i].cells[j].getElementsByClassName("block")[0];
			//alert(md);
			var md1=t.rows[i-1].cells[j].getElementsByClassName("block")[0];
			//alert(md1);
			var p = md.parentNode;
			board[i][j]=0;
			p.removeChild(md);
			alignDivs(i);
			}
			
		}
	oneCounter = 0 ;
	}
	
	
	oneCounter = 0;
	
}

function alignDivs(a)
{
	//debugger;
	var t=document.getElementById("tab");
	for(var i=a ; i>0 ; i--)	
	{
		for(var j=0 ; j< 10 ; j++)
		{
			if(board[i-1][j] == 1 && board[i][j]==0)
			{
				board[i-1][j]=0;
				board[i][j]=1;
				var d = t.rows[i-1].cells[j].getElementsByClassName("block")[0];
				t.rows[i].cells[j].appendChild(d);
			}
		}
	}
}


