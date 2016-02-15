var cell;
var letter = "X";
var countx=1;
var counto=1;
var move=0;

function start(cell){ 
	if (cell.value == ""){
		cell.value = letter;
		changeletter();
        move++;
	}
	if (checkWin()) 
	{
		if(letter== "X"){
				document.getElementById("xscore").value = countx;
				countx++;
		
			}
			else{
				document.getElementById("oscore").value = counto;
				counto++;
	
			} 
		document.getElementById("demo").innerHTML = "CONGRATES..!! '"+letter+"' WON....start a new game";
		replaygame();
	}	
	else if(move == 9)
    { 
		document.getElementById("demo").innerHTML = "Game is Tied!....start a new game";
		replaygame();
        return; 
    }  
	else
	{ 
		return; 
	}
}
	
function changeletter()	
 {	
    if (letter == "X"){
		document.getElementById("demo").innerHTML = "its O turn";
		if(!checkWin()){
			letter = "O";
		}
	}
	else{
		document.getElementById("demo").innerHTML = "its X turn";
		if(!checkWin())
		{
			letter = "X"; 
		}
	}
}

function checkWin(){ 
   with (document.simpleForm){ 
		if ((b1.value == letter) && (b2.value==letter) && (b3.value == letter) || (b4.value == letter) && (b5.value==letter) && (b6.value == letter) ||
	     (b7.value == letter) && (b8.value==letter) && (b9.value == letter) || (b2.value == letter) && (b5.value==letter) && (b8.value == letter) ||
		 (b1.value == letter) && (b4.value==letter) && (b7.value == letter) || (b3.value == letter) && (b6.value==letter) && (b9.value == letter) || 
		 (b3.value == letter) && (b5.value==letter) && (b7.value == letter) || (b1.value == letter) && (b5.value==letter) && (b9.value == letter))
		{ 
			
			return true;
		
		}
		else
		{
			return false;
		}
	}
 }
function resetscore() 
{
with (document.simpleForm) 
{
xscore.value=0;
oscore.value=0;
countx=1;
counto=1;
}
}
function closeNav()
{
document.getElementById("shutter").style.width="0%";
}

function replaygame() 
{
	letter = "X";
	with (document.simpleForm)
	{
		b1.value="";
		b2.value="";
		b3.value="";
		b4.value="";
		b5.value="";
		b6.value="";
		b7.value="";
		b8.value="";
		b9.value="";
		move=0;
	}
 }
 
