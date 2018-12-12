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

			var dollar = 0;
			var number = 0;
			

			$.ajax({
				url:"../data/mechine.json",
				success:function(arr){
				var goods = eval($.cookie("good"));
				if(goods){
					for(var i = 0 ; i< arr.length ;i++){
					for(var j = 0 ;j< goods.length ; j++){
						if(goods[j].id == arr[i].id){
							$(`<div class="goood">
									<img src="${arr[i].img}" alt="" class="image">
									<div class="sp">
										<span class="sp111">${arr[i].name}</span>
										<span class="sp222">${arr[i].title}</span>
									</div>
									<span class="moneyy">${arr[i].money2}</span>
									<div class="btn">
										<button class="minus" id="${goods[j].id}" money="${arr[i].money2}">-</button>
										<span class="number1">${goods[j].num}</span>
										<button class="plus" id="${goods[j].id}" money="${arr[i].money2}">+</button>
									</div>
									<span class="last">${goods[j].num * arr[i].money2}</span>
									<button class="delete" id="${goods[j].id}">删除</button>
							</div>`).appendTo(".caraccount");

							dollar += parseInt(arr[i].money2 * goods[j].num);
							number += parseInt(goods[j].num);

							
						}	
					}

				}
				}
				
				$(".spa5").html(dollar);
				$(".spa2").html(number);

				},
				error:function(msg){
					alert("error");
				}
			})
		$(".caraccount").on("click",".plus",function(){
			var id = this.id;
			var money = parseInt($(this).attr("money"));
			var goodss = eval($.cookie("good"));
			for(var i = 0;i<goodss.length ;i++){
				if(id == goodss[i].id){
					goodss[i].num++;
					$(this).parents(".goood").find(".number1").html(goodss[i].num);
					var money3 = money + parseInt( $(this).parents(".goood").find(".last").html());
					$(this).parents(".goood").find(".last").html(money3);
					number++;
					$(".spa2").html(number);
					dollar += money;
					$(".spa5").html(dollar);
					

					
					
				}

			}

			var strings = JSON.stringify(goodss);
			$.cookie("good",strings,{expires:7});
			// $.cookie("good",null);
		})

		$(".caraccount").on("click",".minus",function(){
			var id = this.id;
			var money = parseInt($(this).attr("money"));
			var goodss = eval($.cookie("good"));
			for(var i = 0;i<goodss.length ;i++){
				if(id == goodss[i].id){
					goodss[i].num--;
					if(goodss[i].num <= 0){
						goodss[i].num =1;
					}else{
						number--;
						$(".spa2").html(number);
						dollar -= money;
						$(".spa5").html(dollar);
						var money3 =parseInt( $(this).parents(".goood").find(".last").html()) -money;
						$(this).parents(".goood").find(".last").html(money3);
					}
					$(this).parents(".goood").find(".number1").html(goodss[i].num);
					
					
					
				}
			}

			var strings = JSON.stringify(goodss);
			$.cookie("good",strings,{expires:7});
		})
		$(".caraccount").on("click",".delete",function(){
			var id = this.id;
			$(this).parents(".goood").remove();
			var goodsss = eval($.cookie("good"));
			var arr = new Array;
			for(var i = 0;i<goodsss.length ;i++){
			if(id != goodsss[i].id){
				
				arr.push(goodsss[i]);
				
				}
			}
			var strings = JSON.stringify(arr);
			$.cookie("good",strings,{expires:7});
		})

		
})