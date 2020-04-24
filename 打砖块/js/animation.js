

function move(){
				var el1= ball=document.getElementById("bubble");
				var currentleft1 = parseInt(window.getComputedStyle(el1).left);
				var currenttop1 = parseInt(window.getComputedStyle(el1).top);
				
				check_border_collision(el1);
				funballToCell();
				var left1 = currentleft1 +el1.speedx;
				var top1 = currenttop1 +el1.speedy;
				el1.style.left = left1 +"px";
				el1.style.top = top1 +"px";
				}
				//边缘碰撞反弹
				function check_border_collision(el){
					
					var box = document.getElementById("container")
					var style = window.getComputedStyle(el)
					var left = parseInt(style.left);
					var top = parseInt(style.top);
					var w = parseInt(style.width);
					var h = parseInt(style.height);
					if(left < 0){
						left=0;
						el.speedx *= -1;
					}
					if(left > 1020){
						left=1020;
						el.speedx *= -1;
					}
					// if(left > box.offsetLeft - w){            //------------------------------------------it seems have a bug
					// 	left = box.offsetLeft - w;
					// 	el.speedx *= -1;
					// }
					
					if(top < 0){
						top=0;
						el.speedy *= -1;
					}
					if(top < 580){
						top=580;
						el.speedy *= -1;
					}
					if(top >box.offsetTop - h){
						top = box.offsetTop - h;
						el.speedy *= -1;
					}
					
					el.style.top=top + 'px';
					el.style.left=left + 'px';
				}
				
				
				
				//移动模块(两个方块版本)
				function bounce(ball,el2){
					if(check_block_bounce(ball,el2)){
						var ballx=document.getElementById(ball);
						
						var leftOrRight=rand(0,2);
						console.log(leftOrRight);
						if(leftOrRight<1){
						ballx.speedx *= -1;
						}
						else {
							ballx.speedx *= 1;
						}
						ballx.speedy *= -1;
					}
				}
				
				//两元素碰撞反弹
				function check_block_bounce(ball,el2){
					var block1=document.getElementById(ball);
					var block2=document.getElementById(el2);
					var left1 = parseInt(window.getComputedStyle(block1).left);
					var left2 = parseInt(window.getComputedStyle(block2).left);
					var top1 = parseInt(window.getComputedStyle(block1).top);
					var top2 = parseInt(window.getComputedStyle(block2).top);
					var w1 = parseInt(window.getComputedStyle(block1).width);
					var h1 = parseInt(window.getComputedStyle(block1).height);
					var w2 = parseInt(window.getComputedStyle(block2).width);
					var h2 = parseInt(window.getComputedStyle(block2).height);
					
					var center1 = {
						x:left1 + w1 / 2,
						y:top1 + h1 / 2
					}
					var center2 = {
						x:left2+ w2 / 2,
						y:top2 + h2 / 2
					}
					
					var diffx = Math.abs(center1.x - center2.x)
					var diffy = Math.abs(center1.y - center2.y)
					if( (diffx < (w1 + w2 )/2) && (diffy < (h1 + h2)/2) ){
						return true;
					}
					else{return false;}
				}
				
		function funballToCell(){
			var ball=document.getElementById("bubble");
			for(var i=0;i<5;i++){
					for(var j=0;j<12;j++){
						var cell=document.getElementById("cell-"+i+"-"+j);
						//console.log(cell.offsetTop,cell.offsetLeft);
						 //console.log(ball.offsetTop);
						  if((cell.offsetTop +cell.offsetHeight) <= ball.offsetTop) {
						 	if(cell.offsetLeft <= ball.offsetLeft) {
								if(ball.offsetLeft <= (cell.offsetLeft+cell.offsetWidth)) {
								ball.speedy *= -1;
								//console.log(ball.speedy);
								cell.style.display="none";
								//console.log("2");
								}
							}
						}
						
				}
				
			}
			
		}




