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
				// sc_msg();

			})
			$(".list").on("mouseover",function(){
				$(".list").css("display","block");
			})
			$(".list").on("mouseout",function(){
				$(".list").css("display","none");
			})


	$.ajax({

		url:"../data/mechine.json",
		success:function(arr){
			for(var i = 0;i< arr.length;i++){
				$(`<div class="mechines" >
					<img src="${arr[i].img}" alt="">
					<span>${arr[i].name}</span>
					<span>${arr[i].title}</span>
					<div class="money">
						<span>${arr[i].money}</span>
						<span>${arr[i].money2}</span>
					</div>
					<button class="but" id="${arr[i].id}">
						<img src="../images/fly.jpg" alt="">
						<span >加入购物车</span>
					</button>
				</div>`).appendTo(".mechine");
			}
			
		},
		error:function(msg){
			alert("error")
		}


		

	})

	// 购物车
		// 
		
		sc_car();



		$(".mechine").on("click",".but",function(){

			sc_msg();

			var id = this.id;

			var first = $.cookie("good") == null ? true : false;
			if(first){
				$.cookie('good',`[{id:${id},num:1}]`,{
					expires:7});
			}else{
				$(".good").remove();
				var arr = eval($.cookie('good'));
				var same = false;
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
						arr[i].num++;
						var cookieStr = JSON.stringify(arr);
						$.cookie('good', cookieStr, {expires: 7});
						same = true;
						break;
					}
				}
				if(!same){
					var obj = {id:id,num:1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie('good',cookieStr,{expires:7});
				}
			}
			sc_car();

		})

		function sc_car(){
			var str = $.cookie("good");
			if(str){
				var arr = eval(str);
				var sum = 0;
				for(var i = 0;i<arr.length;i++){
					sum+= arr[i].num;
				}
				$(".span2").html(sum);
			}
		}

		function sc_msg(){

			$.ajax({
				url:'../data/mechine.json',
				success:function(arr){
					// $(".up").html("");
					var cookie_arr = eval($.cookie("good"));
					for(var i = 0; i < cookie_arr.length;i++){
						for(var x= 0; x < arr.length;x++){
							if(cookie_arr[i].id == arr[x].id){
								$(`
							<div class="good">
								<img src="${arr[x].img}" alt="" class="goodimg">
								<span class="goodspan">${arr[x].title}</span>
								<div class="small">
									<div class="span9">
										<span class="money">${arr[x].money2}</span>
										<span>X</span>
										<span class="num">${cookie_arr[i].num}</span>
									</div>
									<button class="delete">删除</button>
								</div>
						</div>`).appendTo('.up');
							}
						}
					}

				},
			error:function(msg){
				alert("error");
			}
			})
		}
		$(".span2").html("0");
		// $.cookie("good",null);
})