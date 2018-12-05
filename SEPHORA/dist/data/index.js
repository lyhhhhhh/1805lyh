define(['jquery'],function(jquery){
	function index(){
		$(function(){




		$.ajax({
			url:"index.json",
			success:function(arr){
				alert(arr);
			}
		})
// 	文字滚动
	
	
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

// 	// 我的丝芙兰
	
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

// 	//banner滚动
	
	var oBan = $(".banner").find(".second").find(".ban").find(".ul");
	// var oBtn = oBan.find(".ol").find("li");
	var tBtn=  $(".banner").find(".second").find(".ban").find(".ol2").find("li");
	var oPic = oBan.find("li"); 


	var tNow = 0;
	var timer2 = null;

	tBtn.click(function(){
		// alert("1");
		tNow = $(this).index();
		tab2();
	})

	function tab2(){
		
		tBtn.attr("id", "");
		tBtn.eq(tNow).attr("id","buttoncss");

		oBan.stop().animate({left: -1190 * tNow},1000,function(){
			// alert("1");
			// alert(oPic.size());
			if(tNow == oPic.size() - 1){

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

	timer2 = setInterval(timerinner,3000);

	$('.ban').hover(function(){
		clearInterval(timer2);
	},function(){
		timer2 = setInterval(timerinner,3000);
	})

		//小banner图
			var oroll = $(".all").find(".left").find(".roll");
			var oButton = oroll.find(".ul2").find("li");
			var tButton = oroll.find(".ol1").find("li");
			var omove = oroll.find("move");
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


	

		})
	}
	return {
			index:index
			}
})