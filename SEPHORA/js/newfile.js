$(function(){

		// 文字滚动
			var oUl =  $(".header").find(".top").find(".roll").find("ul");
			var aLis = oUl.find("li");
			
			var iNow = 0;
			var timer = null ;

			function tab(){
				oUl.stop().animate({top:-30 * iNow},1000,function(){
					if(iNow == aLis.size() - 1){
						iNow = 0;
						oUl.css("top",-2);
					}
				})
			}

			function timerInner(){
				iNow++;
				tab();
			}
			timer = setInterval(timerInner ,2000);

			// 我的丝芙兰
			
			$("#zi").on("mouseover",function(){
				$("#option").css("display","block");
				$("#order").on("mouseenter",function(){
					$("#order").css("color","red");
				})
			})

			$("#order").on("mouseout",function(){
				$("#option").css("display","none");
			})

			// 购物车
			$(".bag").on("mouseover",function(){
				$(".list").css("display","block");
			})
			$(".bag").on("mouseout",function(){
				$(".list").css("display","none");
			})



		$(".bag").on("mouseover",function(){
			$(".list").css("display","block");
				// sc_msg();

		})
		$(".list").on("mouseover",function(){
			$(".list").css("display","block");
		})
		$(".list").on("mouseout",function(){
			$(".list").css("display","none");
		})


		
		$(".plus").on("click",function(){

			var num = null;                         
			$(`<div class="good">
					<img src="../images/1_n_06817_50x50.jpg" alt="" class="goodimg">
					<span class="goodspan">黎法双球滚轮波光美容仪升级版</span>
					<div class="small">
						<div class="span9">
							<span class="money">1190</span>
							<span>X</span>
							<span class="num">1</span>
						</div>
						<button class="delete">删除</button>
						</div>
			</div>`).appendTo(".up");

			
		})


		// 放大镜
		// 
			var mouseX = 0; //鼠标移动的位置X
			var mouseY = 0; //鼠标移动的位置Y
			var maxLeft = 0; //最右边
			var maxTop = 0; //最下边
			var markLeft = 0; //放大镜移动的左部距离
			var markTop = 0; //放大镜移动的顶部距离
			var perX = 0; //移动的X百分比
			var perY = 0; //移动的Y百分比
			var bigLeft = 0; //大图要移动left的距离
			var bigTop = 0; //大图要移动top的距离

			$(".content").on("mousemove", "#left", imgMouseMove).on("mouseleave","#left", cancle);
		
			//改变放大镜的位置
			function updataMark($mark){
			//通过判断，让小框只能在小图区域中移动 
				if(markLeft<0){
				markLeft = 0;
				}else if(markLeft>maxLeft){
				markLeft = maxLeft;
				}
				if(markTop<0){
				markTop = 0;
				}else if(markTop>maxTop){
				markTop = maxTop;
				}

				//获取放大镜的移动比例，即这个小框在区域中移动的比例
				perX = markLeft/$("#left").outerWidth();
				perY = markTop/$("#left").outerHeight();
				bigLeft = -perX*$("#biggood").outerWidth();
				bigTop = -perY*$("#biggood").outerHeight();


				//设定小框的位置
				$mark.css({"left":markLeft,"top":markTop,"display":"block"});
			}

				//改变大图的位置
			function updataBig(){
				$("#biggood").css({"display":"block","left":bigLeft,"top":bigTop});
			}

			//鼠标移出时
			function cancle(){
				$("#biggood").css({"display":"none"}); 
				$(".hand").css({"display":"none"});
				$(".content1").css({"display":"none"})
			}

			//鼠标小图上移动时
			function imgMouseMove(event){
				$(".content1").css({"display":"block"});
				// $(".big").css({"display":"block"}); 
				var $this = $(this);
				var $mark = $(this).children(".hand");
				//鼠标在小图的位置()
				mouseX = event.pageX-$this.offset().left - $mark.outerWidth()/2;
				mouseY = event.pageY-$this.offset().top - $mark.outerHeight()/2;
				//最大值
				maxLeft =$this.width()- $mark.outerWidth();
				maxTop =$this.height()- $mark.outerHeight();
				markLeft = mouseX;
				markTop = mouseY;
				updataMark($mark);
				updataBig();
			}
			

	
})

