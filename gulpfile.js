	
	
	var gulp=require("gulp");//引入gulp
	
	
	var connect=require("gulp-connect");//引入gulp-conncet
	
	gulp.task("hello",function(){
		gulp.src(["html/*.html"]).pipe(connect.reload());//刷新页面
	})

	gulp.task("watch",function(){
		gulp.watch("html/*.html",["hello"]);//监听只要改变html里面的所有的html，就会执行watch函数，
	})
	gulp.task("connect",function(){
		connect.server({//启动一个环境
			port:8082,//端口号
			root:"js",//需要启动环境的目录
			livereload:true//同时设置reload会刷新页面
		})
	})
	//gulp.task("default",['connect','watch']);
	
	
	//打包压缩js的
	var concat = require("gulp-concat");
	var uglify = require("gulp-uglify");
	gulp.task("concat",function(){
		gulp.src(["js/*.js"]).pipe(concat("all.js")).pipe(uglify()).pipe(gulp.dest("jsmini"));
	});
	
	gulp.task("change",function(){
		gulp.watch(["js/*.js"],["concat"]);
	})

	//gulp.task("default",['change']);
	
	
	//打包压缩css的
	var minify = require("gulp-minify-css");
	gulp.task("minify",function(){
		gulp.src(["css/*.css"]).pipe(minify()).pipe(gulp.dest("cssmini"));
	});
	gulp.task("mini",function(){
		gulp.watch(["css/*.css"],["minify"]);
	})

	//gulp.task("default",['mini']);



	//打包压缩img的
	var miniimages = require("gulp-imagemin");
	gulp.task("miniimages",function(){
		gulp.src(["img/*.jpg"]).pipe(miniimages()).pipe(gulp.dest("miniimg"));
	});	
	//gulp.task("default",['miniimages']);
	


	//打包压缩样式预处理器less
	var miniless = require("gulp-less");
	gulp.task("miniless",function(){
		gulp.src(["less/*.less"]).pipe(miniless()).pipe(gulp.dest("cssmini"));
	});	
	
	gulp.task("default",['miniless']);

