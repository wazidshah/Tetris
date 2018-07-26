// I have implemented the feature

var movedown=0;
var i=0;
var counter=0;
function drive(){
	i=i+30;
	if(counter < 540)
	{
		counter=counter+30;
		movedwn(i);
	}
	else
	{
		clearInterval(timer);
	}
} 

function movedwn(b){
	var a = document.getElementById('di');
	a.style.top = b + "px";
	
}

function keyCode(event)
{
	var key = event.keyCode;
	if(key==87)
	{
		moveleft();
	}
} 

function moveleft()
{
	var a = document.getElementById('di');
	a.style.left= -30+"px";
}

function rm()
{
	var a=document.getElementById('1_1');
	var child = a.firstChild;
	a.removeChild(a.firstChild);
	var next=document.getElementById('2_1');
	next.appendChild(child);
}

function init()
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
				counter++;
				var trPar = document.getElementById("tr"+i);
				var baccha = document.createElement("TD");
				baccha.setAttribute("id",counter);
				trPar.appendChild(baccha);
				
			}
		}	
}

function createBlocks()
{
	var block=line();
	//var s = document.getElementById("5");
	//s.appendChild(block);
	//alert(s.nextSibling.id);
}

function line()
{
	var i =0;
	var s = document.getElementById("4");
	for(i=0;i<4;i++)
	{
	var line = document.createElement("DIV");
	line.setAttribute("class","block");
	//alert(s.nextSibling.id)
	s.nextSibling.appendChild(line);
	s=s.nextSibling;
	}
	//return line;
}

function move()
{
	
}