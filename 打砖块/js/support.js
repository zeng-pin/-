function getPosTop(i,j){
	return 10+i*35;
}
function getPosLeft(i,j){
	return 10+j*85;
}

function rand(max,min){
				return Math.floor(Math.random()*(max-min+1))+min;
			}
			
function randColor(){
	a = rand(0,255);
	b = rand(0,255);
	c = rand(0,255);
	return "rgb("+a+","+b+","+c+")"
}


function canMoveLeft(el){
	
	var moveleft=document.getElementById(el);
	var move=$("#"+el);
	left = moveleft.offsetLeft;
	var canleft=left-18;
	move.css('left',canleft);
	
	if(canleft<0){
		move.css('left',0)
		return false;
	}
	
	return true;
	}
	function canMoveRight(el){
		
		var moveleft=document.getElementById(el);
		var move=$("#"+el);
		left = moveleft.offsetLeft;
		var canright= left+18
		move.css('left',canright);
		
		if(canright>890){
			move.css('left',890);
			return false;
		}
		return true;
		}