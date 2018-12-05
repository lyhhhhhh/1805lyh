		$(function(){
			$("#verification_code").on("click",function(){
				var arr = [];
				for(var i = 0; i < 6 ; i ++){
					var tmp = parseInt(Math.random() * 62);
					if(tmp >= 0 && tmp <= 9){
						arr.push(tmp);
					}else if(tmp >= 10 && tmp <= 35){
						var str = String.fromCharCode(tmp + 55);
						arr.push(str);
					}else{
						var str = String.fromCharCode(tmp + 61);
						arr.push(str);
						}
					}
				var Arr = arr.join("");
			$("#verification_code").html(Arr);
			})


		var variate1 = false;
		$("#phone_number").blur(function(){
			if($("#phone_number") == 11 && /[0-9]{11}/.test($("#phone_number"))){
			variate1 = true;
		alert('1');
			}
		})
 		
		$("#verify").blur(function(){
			if($("#verify").val() !== $("#verification_code").html()){
			variate1 = true;
			}
		})
		
		$("#pass").blur(function(){
			if($("#pass").length >= 6 && $("#pass").length <=16 && /[^0-9a-zA-Z]/g.test($("#pass"))){
			variate1 = true;
			}
		})
		
		$("#pass").blur(function(){
			if($("#pass").val() !== $("#confirm_password").val()){
			variate1 = true;
			}
		})
		

		if(!variate1 == true){
			$("#agreement").css("background","black");	
			$("#agreement").on("mouseover",function(){
				$("#agreement").css("background","red");	
			})	
			$("#agreement").on("mouseout",function(){
				$("#agreement").css("background","black");	
			})
			
		}else{
			$("#agreement").css("background","#cccccc");
		}

		
		
		$("#agreement").on("click",function(){
			var str = `username=${$("#phone_number").val()}&password=${$("#pass").val()}`;
			alert(str);
			$.ajax({
				url:"../data/register.php",
				method:"post",
				data:str,
				success:function(data){
					alert('注册成功');
				},
				error:function(msg){
					console.log("失败");
					alert(msg);
				}
			})
		})

		

		$("#phone_number").val("");
		$("#verify").val("");
		$("#pass").val("");
		$("#confirm_password").val("");	
		$("#agreement").css("background","#cccccc");
})