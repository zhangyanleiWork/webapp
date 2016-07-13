/*-----join传---*/
//var s;
$.ajax({
		type: "get",
		url: "http://datainfo.duapp.com/shopdata/getclass.php",
		async: false,
		success: function(data) {
			//按照特定的格式把字符串解析为对象,msg是数组
			var msg = JSON.parse(data);
			console.log(data);
			console.log(msg)
			var len = msg.length;
			

			//列表图标
			//遍历数组
			for (var i = 0; i < len; i++) {
				//创建dl
				var oDl = document.createElement("dl");
				//将oDl添加到#list的后面，   还可以用append（）是$("#list").append(oDl);
				$(oDl).appendTo("#list");
				//$("#list").append(oDl);
				//console.log(i);
				if (i == 0) {
					$(oDl).addClass("active");
				}
				switch (i) {
					case 0:
						$(oDl).html("<dt class='iconfont'>&#xe60c;</dt><dd>" + msg[0].className + "</dd>");
						break;
					case 1:
						$(oDl).html("<dt class='iconfont'>&#xe600;</dt><dd>" + msg[1].className + "</dd>");
						break;
					case 2:
						$(oDl).html("<dt class='iconfont'>&#xe60e;</dt><dd>" + msg[2].className + "</dd>");
						break;
					case 3:
						$(oDl).html("<dt class='iconfont'>&#xe610;</dt><dd>" + msg[3].className + "</dd>");
						break;
					case 4:
						$(oDl).html("<dt class='iconfont'>&#xe611;</dt><dd>" + msg[4].className + "</dd>");
						break;
					case 5:
						$(oDl).html("<dt class='iconfont'>&#xe612;</dt><dd>" + msg[5].className + "</dd>");
						break;
					case 6:
						$(oDl).html("<dt class='iconfont'>&#xe613;</dt><dd>" + msg[6].className + "</dd>");
						break;
					case 7:
						$(oDl).html("<dt class='iconfont'>&#xe614;</dt><dd>" + msg[7].className + "</dd>");
						break;
					case 8:
						$(oDl).html("<dt class='iconfont'>&#xe617;</dt><dd>" + msg[8].className + "</dd>");
						break;
					case 9:
						$(oDl).html("<dt class='iconfont'>&#xe618;</dt><dd>" + msg[9].className + "</dd>");
						break;
					case 10:
						$(oDl).html("<dt class='iconfont'>&#xe619;</dt><dd>" + msg[10].className + "</dd>");
						break;
					case 11:
						$(oDl).html("<dt class='iconfont'>&#xe620;</dt><dd>" + msg[11].className + "</dd>");
						break;
					case 12:
						$(oDl).html("<dt class='iconfont'>&#xe621;</dt><dd>" + msg[12].className + "</dd>");
						break;
					default:
						break;
				}

			}
			//列表点击右面出现相应的列表
			$("#list dl").on("tap", function() {
				var num = $(this).index();

				$("#list dl").eq(0).removeClass();
				$(this).addClass("active").siblings().removeClass("active");
				$.ajax({
					type: "get",
					url: "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",
					async: false,
					data: "classID=" + num, //,
					success: function(msg) {
						//console.log(num);
						//console.log(msg)

						var len = msg.length;
						$("#detail").html("");
						for (var i = 0; i < len; i++) {
							var oDl = document.createElement("dl");
							$(oDl).appendTo("#detail");
							//console.log(msg[i].goodsName);
							var detail = "<dt><img src='" + msg[i].goodsListImg + "'</dt><dd><h1>" + msg[i].goodsName + "</h1><p>￥" + msg[i].price + "</p><i>折扣：0." + msg[i].discount + "</i></dd>"
							$(oDl).html(detail);
						}
					}
				});
			})

		}
	})
	//刷新就让数据出来
$.ajax({
	type: "get",
	url: "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",
	async: false,
	success: function(msg) {
		var len = msg.length;
		for (var i = 0; i < len; i++) {
			var oDl = document.createElement("dl");
			$(oDl).appendTo("#detail");
			//console.log(msg[i].goodsName);
			var detail = "<dt><img src='" + msg[i].goodsListImg + "'</dt><dd><h1>" + msg[i].goodsName + "</h1><p>￥" + msg[i].price + "</p><i>折扣：0." + msg[i].discount + "</i></dd>"
			$(oDl).html(detail);
		}
	}
});
/*-----join传---*/