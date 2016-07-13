	
	//用户验证
	$("#txt").on("blur",function(){
		$(".p1").html("");
		var oTxt=$("#txt").val();
		var reg1=/^\w{3,16}$/;
		if(reg1.test(oTxt)){
			$(".p1").html("·输入正确");	
		}else{
			$(".p1").html("·用户名格式不对");
			$("#txt").val("");
			$("#txt").focus();
		}
	})
	//密码验证
	$("#pass1").on("blur",function(){
		var oTxt=$("#pass1").val();
		var reg1=/^[a-zA-Z]\w{5,17}$/;
		if(reg1.test(oTxt)){
			$(".p2").html("·输入正确");	
		}else{
			$(".p2").html("·用户名格式不对");
			$("#pass1").val("");
			$("#pass1").focus();
		}
	})
	$("#pass2").on("blur",function(){
		var oPsw=$("#pass1").val();
		var oRpsw=$("#pass2").val();
		if(oPsw==oRpsw){
			$(".p3").html("输入正确");
		}else{
			$(".p3").html("两次密码输入不一致，请重新输入");
			$("#pass2").val("");
			$("#pass2").focus();
		}
	})

	$("#signin").on("tap",function(){
		var oTxt=$("#txt").val();				
		var oPsw=$("#pass1").val();
		console.log(oTxt);
		console.log(oPsw);
		$.get("http://datainfo.duapp.com/shopdata/userinfo.php", {"status":"register","userID": oTxt,"password": oPsw },function(data){
			console.log(data);
			if(data==0){
				alert("用户已经存在，请重新注册");
				$("#txt").val("");
				$("#pass1").val("");
				$("#pass2").val("");
				$("#txt").focus();
			}else if(data==1){
				console.log("success");
				location.href="ringup.html";
			}else if(data==2){
				alert("数据库报错");
			}
		} );
	})









