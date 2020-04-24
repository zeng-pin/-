			$(document).ready(function(){
				newgame();
			});
			
			
			function newgame(){
				blockbreak();
				
			}
			
			function blockbreak(){
				
				placeBlock();
				
			}
			//初始化，摆放砖块位置
			function placeBlock(){
				for(var i=0;i<5;i++){
					for(var j=0;j<12;j++){
						var gridCell=$("#cell-"+i+"-"+j);
						gridCell.css('top',getPosTop(i , j) );
						gridCell.css('left',getPosLeft(i , j));
						gridCell.css('background-color',randColor());
					}
				}
				
			}
			//挡板运动
			$(document).keydown(function(event){
				switch(event.keyCode){
				case 37:
				if(canMoveLeft("board")){
					
				}
				break;
				
				case 39:
				if(canMoveRight("board")){
					
				}
				break;
				}
			})
			//小球在挡板上移动
			var ballFirstMove=1;
			$(document).keydown(function(event){
				switch(event.keyCode){
				case 37:
				if(ballFirstMove && canMoveLeft("bubble")){
					
				}
				break;
				
				case 39:
				if(ballFirstMove && canMoveRight("bubble")){
					
				}
				break;

				case 32:
				if(ballFirstMove && ballMove())
				ballFirstMove=0;
				break;
				}
			})
			//发射运动逻辑

			function ballMove(){
				var ball=document.getElementById("bubble");
				//初始速度定义
				 ball.speedx=3;
				 ball.speedy=-3;
				// 调用
				setInterval(function(){move(ball); pengzhuang();},15)
				ball.offsetTop=0;
				ball.offsetLeft=0;
				move(ball);
				return true;
			}
			
			//碰撞逻辑
			function pengzhuang(){
				bounce("bubble","board");
				
		}
			// function ballMove(){
			// 	var ball=document.getElementById("bubble");
			// 	ball.speedx=3;
			// 	ball.speedy=-3;
			// 	setInterval(function(){move();},15)

			// }
			// function move(){
			// 	var ball=document.getElementById("bubble");
			// 	var box=document.getElementById("box");
			// 	ball.style.left = ball.offsetLeft + ball.speedx + "px";
			// 	ball.style.left = ball.offsetTop + ball.speedy + "px";
			// 	if(ball.offsetTop <= 0){
			// 		ball.speedy *=-1;
			// 	}
			// 	if(ball.offsetLeft <= 0){
			// 		ball.speedx *=-1;
			// 	}
			// 	if(ball.offsetLeft >= (box.offsetWidth-ball.offsetWidth) ){
			// 		ball.speedx *=-1;
			// 	}
			// 	if(ball.offsetTop >= (box.offsetHeight-ball.offsetHeight) ){
			// 		ball.speedy *=-1;
			// 	}
				
			// }
			
			
			
				
				
			
			
			
			
			//4.15构建了html与CSS next：计划构建方块的生成与变色 以及 控制挡板移动单元。
			//4.16构建了方块的生成与随机颜色 以及 挡板的左右运动 以及 小球在container中的运动 next：计划构建小球的完整反弹与响应系统，以及当小球触碰其他元素其他元素的反应；