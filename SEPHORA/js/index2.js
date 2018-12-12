define(['jquery'],function($){
	function index2(){
		$(function(){
<<<<<<< HEAD
			// 文字滚动
			
			$.ajax({
				url:"../data/index.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						$(`<div class="roof">
								<div class="skin"></div>
								<ul class="skinul">
					
								</ul>
							</div>

							<div class="middle">
								<img src="../images/hp_skinfloor_20181122.jpg" alt="">
								<div class="more">
									<div>
										<span>Wei</span>
										<span>蔚蓝之美膜力全开节日套装</span>
										<span>￥799.00</span>
										<a href=""><img src="../images/1_n_06758_180x180.jpg" alt=""></a>
									</div>
									
								</div>
							</div>

							<ul class="bottom">
								<li><img src="../images/lancome_144X60.png" alt=""></li>
								
							</ul>`).apppendTo($('.skincare'));
						for(var j = 0; j < arr[i].title.length; j++){
							$(`<li>${arr[i].title[j]}</li>`).apppendTo($(".skinul"));
						}
						
					}

				}
			})
=======
			
			

			// 文字滚动
>>>>>>> 化妆品
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

			// //banner滚动
			
<<<<<<< HEAD
			var oBan = $(".banner").find(".second").find(".ban").find(".ul");
			// var oBtn = oBan.find(".ol").find("li");
=======
			var oBan = $(".banner").find(".second").find(".ban").find(".ull");
			var oBtn = $(".banner").find(".second").find(".ban").find(".ol").find("li");
>>>>>>> 化妆品
			var tBtn=  $(".banner").find(".second").find(".ban").find(".ol2").find("li");			
			var oPic = oBan.find("li"); 


			var tNow = 0;
			var timer2 = null;

			tBtn.click(function(){
<<<<<<< HEAD
				// alert("1");
=======
>>>>>>> 化妆品
				tNow = $(this).index();
				tab2();
			})

<<<<<<< HEAD
=======
			oBtn.click(function(){
				tNow = $(this).index();
				tab4();
			})

			function tab4(){
				

				oBan.stop().animate({left: -1190 * tNow}, 1000 ,function(){
					// alert("1");
					// alert(oPic.size());
					// alert(tNow);
					if(tNow == oPic.size() - 1){
						tNow = 0;
						oBan.css("left",0);
					}
				});
			}

>>>>>>> 化妆品
			function tab2(){
				
				tBtn.attr("id", "");
				tBtn.eq(tNow).attr("id","buttoncss");

				oBan.stop().animate({left: -1190 * tNow}, 1000 ,function(){
					// alert("1");
					// alert(oPic.size());
<<<<<<< HEAD
					if(tNow == oPic.size() - 1){

=======
					// alert(tNow);
					if(tNow == oPic.size() - 1){
>>>>>>> 化妆品
						tNow = 0;
						oBan.css("left",0);
					}
				});
			}


			function timerinner(){
				tNow++;
				tab2();
				if(tNow == oPic.size() - 1){
					tBtn.eq(0).attr("id","buttoncss");
				}
			}

<<<<<<< HEAD
			// timer2 = setInterval(timerinner,1000);

			// $('.ban').hover(function(){
			// 	clearInterval(timer2);
			// },function(){
			// 	timer2 = setInterval(timerinner,1000);
			// })
=======
			timer2 = setInterval(timerinner,3000);

			$('.ban').hover(function(){
				clearInterval(timer2);
			},function(){
				timer2 = setInterval(timerinner,3000);
			})


			// 侧边栏
			$(".commodity").on("mouseover",".li1",function(){
				// alert("success");
				$(this).find(".hidden").css("display","block");
				$(this).css("border-left","2px solid black");
			})
			$(".commodity").on("mouseout",".li1",function(){
				$(this).find(".hidden").css("display","none");
				$(this).css("border-left","none");
			})

			$.ajax({
				url:"../data/part.json",
				success:function(arr){
					for(var i = 0;i < arr.length ; i++){
						// alert(arr.length);
						$(`<li class="li1">
						<span class="span5">${arr[i].lispan}</span>
						<ul class="ul7">
							
						</ul>
						<div class="hidden">
							<div class="white">
								<span class="span6">${arr[i].span6}</span>
								<div class="uls">
									<ul class="ul8">
										<span class="special">热销气垫</span>
										<li>轻巧便携实力派</li>
									</ul>
									<ul class="ul8">
										<span class="special">塑造立体轮廓</span>
										<li>人气腮红</li>
										<li>明星高光</li>
										<li>实力修容</li>
									</ul>
									<ul class="ul8">
										<span class="special">魅惑电眼</span>
										<li>眼线笔</li>
										<li>彩妆盘</li>
										<li>眼线液</li>
									</ul>
									<ul class="ul8">
										<span class="special">精油护肤巧搭配</span>
										<li>精油滋养</li>
										<li>精华呵护</li>
										<li>乳霜焕能</li>
									</ul>
									<ul class="ul8">
										<span class="special">精选面膜</span>
										<li>润泽保湿</li>
										<li>美白亮肤</li>
										<li>提拉紧致</li>
										<li>深层清洁</li>
									</ul>
									<ul class="ul8">
										<span class="special">魅惑美唇</span>
										<li>电光橘唇</li>
										<li>聚光红唇</li>
										<li>星光粉唇</li>
										<li>暖光砖红唇</li>
										<li>柔光豆沙唇</li>
										<li>水光透唇</li>
									</ul>
								</div>
								<ul class="down">
								
								</ul>
							</div>
							<div class="black"><img src="${arr[i].img}" alt=""></div>
						</div>
						</li>`).appendTo($(".goodlist"));
						for(var j = 0 ;j < arr[i].ulli.length;j++){
							// alert(arr[i].ulli.length);
							$(`<li>${arr[i].ulli[j]}</li>`).appendTo($(".li1").eq(i).find(".ul7"));
						}
						for(var m = 0; m< arr[i].imgs.length;m++){
							$(`<li><img src="${arr[i].imgs[m]}" alt=""></li>`).appendTo($(".li1").eq(i).find(".down"));
						}
						// for(var k = 0;k< 6;k++){
						// 	$(`
						// 		<span class="special">${arr[i].uls.special[k]}</span>
						// 		<li>${arr[i].uls.li[k]}<li>
						// 	`).appendTo($(".uls").eq(i).find(".ul8"));

						// }
						// for(var y = 0; y<6;y++){
						// 	$(`<li>${arr[i].uls.li[y]}<li>`).appendTo(".ul8");
						// }

						
					}
				},
				error:function(msg){
					console.log("error");
				}
			})
>>>>>>> 化妆品


			//小banner图
			var oroll = $(".all").find(".left").find(".roll");
<<<<<<< HEAD
			var oButton = oroll.find(".ul2").find("li");
			var tButton = oroll.find(".ol1").find("li");
			var omove = oroll.find("move");
=======
			var oButton = $(".all").find(".left").find(".roll").find(".ul2").find("li");
			var tButton = $(".all").find(".left").find(".roll").find(".ol1").find("li");
			var omove = $(".all").find(".left").find(".roll").find("move");
>>>>>>> 化妆品
			var oimg = omove.find("li");

			var oNow = 0;
			var interval3 = null;

			// oButton.click(function(){
			// 	oNow = $(this).index();
			// 	tab3();
			// })

			function tab3(){
				// oButton.attr("id","");
				// oButton.eq(oNow).attr("id","buttoncss");

				omove.stop().animate({left:-590 * oNow},1000,function(){
					if(oNow == oimg.size() - 1){
						oNow = 0;
						omove.css("left",0);
					}
				});
			}
			function timerinner3(){
				oNow++;
				tab3();
				// if(oNow == oimg.size() - 1){
				// 	oButton.eq(0).attr("id","buttoncss");
				// }
			}

			interval3 = setInterval(timerinner3,2000);

			// oimg.hover(function(){
			// 	clearInterval(timer3);
			// },function(){
			// 	timer3 = setInterval(timerinner3,2000);
			// })
			// 
		
<<<<<<< HEAD
		// 品牌选项卡
			$(".all .right .a").find("a").click(function(){
=======



		
		
		
		// 品牌选项卡
			$(".all").find("a").click(function(){
>>>>>>> 化妆品
				$(".all .right .a").find("a").attr("class","");
				$(".all .right").find(".logo").css("display","none").eq($(this).index()).css("display","block");
				$(this).attr("class",'active');
			})

<<<<<<< HEAD
			$(".all .right .logo").find("div").on("mouseover",function(){
				$(this).find("div").css("display","block");
			})
			$(".all .right .logo").find("div").on("mouseout",function(){
				$(this).find("div").css("display","none");
			})

		//	 精品推荐
			$(".picks .piece .first .childs").find("img").on("mouseover",function(){
				$(this).stop().animate({left: 90},500,function(){		
					// $(this).css("left","90px");
=======
			$(".logo").on("mouseover","div",function(){
				$(this).find("div").css("display","block");
			})
			$(".logo").on("mouseout","div",function(){
				$(this).find("div").css("display","none");
			})

			$.ajax({
			url:"../data/brands.json",
			success:function(arr){
				for(var i = 0 ; i < arr.length ;i++){
					// alert(arr.length);
					$(`<div><img src="${arr[i]}" alt=""><div><span>丝芙兰</span><button>点击查看</button></div></div>`).appendTo($(".logo"));
					
				}
			},
			error:function(msg){
				alert("error");
			}
		})

			
		//	 精品推荐
			$(".picks .piece .first .childs").find("img").on("mouseover",function(){
				$(this).stop().animate({left: 90},500,function(){		
>>>>>>> 化妆品
				});
			})
			$(".picks .piece .first .childs").find("img").on("mouseout",function(){
				$(this).stop().animate({left: 100},500,function(){
<<<<<<< HEAD
					// $(this).css("left","100px");
				});
			})
			
		//	护肤品类 

			$(".skincare .middle .more").find("div").find("a").find("img").on("mouseover",function(){
				$(this).stop().animate({left: -10},500,function(){		
				});
			})
			$(".skincare .middle .more").find("div").find("a").find("img").on("mouseout",function(){
				$(this).stop().animate({left: 0},500,function(){
				});
			})

			$(".skincare .bottom").find("li").find("img").on("mouseover",function(){
				$(this).stop().animate({opacity:0.5},500,function(){		
				});
			})
			$(".skincare .bottom").find("li").find("img").on("mouseout",function(){
=======
				});
			})
			$(".picks .piece .first .children").find("img").on("mouseover",function(){
				$(this).stop().animate({left: 90},500,function(){		
				});
			})
			$(".picks .piece .first .children").find("img").on("mouseout",function(){
				$(this).stop().animate({left: 100},500,function(){
				});
			})
			

			$(".picks .piece .second .childs").find("img").on("mouseover",function(){
				$(this).stop().animate({left: 90},500,function(){		
				});
			})
			$(".picks .piece .second .childs").find("img").on("mouseout",function(){
				$(this).stop().animate({left: 100},500,function(){
				});
			})
			$(".picks .piece .second .children").find("img").on("mouseover",function(){
				$(this).stop().animate({left: 90},500,function(){		
				});
			})
			$(".picks .piece .second .children").find("img").on("mouseout",function(){
				$(this).stop().animate({left: 100},500,function(){
				});
			})


			$(".picks .piece .third .childs").find("img").on("mouseover",function(){
				$(this).stop().animate({left: 90},500,function(){		
				});
			})
			$(".picks .piece .third .childs").find("img").on("mouseout",function(){
				$(this).stop().animate({left: 100},500,function(){
				});
			})
			$(".picks .piece .third .children").find("img").on("mouseover",function(){
				$(this).stop().animate({left: 90},500,function(){		
				});
			})
			$(".picks .piece .third .children").find("img").on("mouseout",function(){
				$(this).stop().animate({left: 100},500,function(){
				});
			})
		//	护肤品类 

		

			$.ajax({
				url:"../data/index.json",
				success:function(arr){
						for(var i = 0; i < arr.length; i++){
							$(`<div class="roof">
									<div class="skin"></div>
									<ul class="skinul">
						
									</ul>
								</div>

								<div class="middle">
									<img src="${arr[i].img}" alt="">
									<div class="more">
										
										
									</div>
								</div>

								<ul class="bottom">
									
									
								</ul>`).appendTo($('.skincare'));
							for(var j = 0; j < arr[i].title.length; j++){
								$(`<li>${arr[i].title[j]}</li>`).appendTo($(".skinul"));
							}

							for(var l = 0;l < arr[i].content.length;l++){
								$(`<div>
										<span>${arr[i].content[l].head}</span>
										<span>${arr[i].content[l].text}</span>
										<span>${arr[i].content[l].mony}</span>
										<a href=""><img src="${arr[i].content[l].img}" class="imgg" alt=""></a>
								</div>`).appendTo($('.more'));
							}
							for(var k = 0;k < arr[i].biglogo.length;k++){
								$(`<li><img src="${arr[i].biglogo[k]}" class="logoimages" alt=""></li>`).appendTo($(".skincare .bottom"));
							}

						}
				},
				error:function(msg){
					alert("error");
				}
			})


			$(".bottom").on("mouseover",".logoimages",function(){
				alert("1");
				$(this).stop().animate({opacity:0.5},500,function(){		
				});
			})
			$(".bottom").on("mouseout",".logoimages",function(){
>>>>>>> 化妆品
				$(this).stop().animate({opacity:1},500,function(){
				});
			})

<<<<<<< HEAD
			// 猜你喜欢

=======
			$(".skincare .middle .more").on("mouseover",".imgg",function(){
				$(this).stop().animate({left: -10},500,function(){		
				});
			})
			$(".skincare .middle .more").on("mouseout",".imgg",function(){
				$(this).stop().animate({left: 0},500,function(){
				});
			})
			// 猜你喜欢
			$.ajax({
				url:"../data/guess.json",
				success:function(arr){
					for(var i = 0; i<arr.length;i++){
						$(`<div>
							<img src="${arr[i].img}" alt="">
							<span>${arr[i].name}</span>
							<span class="span4"><a href="">${arr[i].title}</a></span>
							<span>${arr[i].money}</span>
						</div>`).appendTo(".leave");
					}
				},
				error:function(msg){
					alert(error);
				}
			})
>>>>>>> 化妆品

		})
	}
	return {
		index2:index2
	}
})
