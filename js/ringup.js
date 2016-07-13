	//用户验证
	$("#txt").on("blur",function(){
		var oTxt=$("#txt").val();
		var reg1=/^\w{3,16}$/;
		if(reg1.test(oTxt)){
			$("#txttext").addClass("right");
			$("#txttext").html("输入正确");
				
		}else{
			$("#txttext").removeClass("right");
			$("#txttext").html("请重新输入用户名");
			$("#txt").val("");
			$("#txt").focus();
		}	
	})
	