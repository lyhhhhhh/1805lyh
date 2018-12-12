$(function(){
	$(".btn1").on("click",function(){
		var str = `username=${$("#input1").val()}&password=${$("#password").val()}`;
		alert(str);
		$.ajax({
			method:"post",
			url:"../data/login.php",
			data:str,
			success:function(data){
				alert(data);
			},
			error:function(msg){
				alert("error");
			}
		})
	})
})