var gulp = require("gulp");
//拷贝
<<<<<<< HEAD
gulp.task('copy-html1',function(){
=======
// gulp.task('copy-html1',function(){
// 	return gulp.src('*.html')
// 	.pipe(gulp.dest('dist/html'))
// 	.pipe(connect.reload());
// })
gulp.task("copy-html2",function(){
>>>>>>> 化妆品
	return gulp.src('index.html')
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
})
gulp.task('copy-html',function(){
	return gulp.src('html/*.html')
	.pipe(gulp.dest('dist/html'))
	.pipe(connect.reload());
})
//拷贝图片
gulp.task('images',function(){
	return gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})


//拷贝js
gulp.task("data",function(){
	return gulp.src('js/**/*')
	.pipe(gulp.dest('dist/data'))
	.pipe(connect.reload());
})

<<<<<<< HEAD
gulp.task("build",['copy-html','copy-html1','images','data','scss'],function(){
=======
gulp.task("build",['copy-html','copy-html2','images','data','scss'],function(){
>>>>>>> 化妆品
	console.log("项目构建成功");
})


//sass
var scss = require("gulp-sass-china");
// var minifyCSS = require("gulp-minify-css");
//
//
//编译scss
gulp.task("scss",function(){
	return gulp.src("scss/**/*")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
	// .pipe(minifyCSS())
	// .pipe(rename("index.min.css"))
	// .pipe(gulp.dest("dist/css"))
	
})


//监听
gulp.task('watch',function(){
<<<<<<< HEAD
	gulp.watch('index.html',['copy-html1']);
=======
	gulp.watch('*.html',['copy-html2']);
>>>>>>> 化妆品
	gulp.watch("images/**/*",['images']);
	gulp.watch('js/**/*',['data']);
	gulp.watch("scss/**/*",['scss']);
	gulp.watch('html/*.html',['copy-html']);
	gulp.watch('js/*.json',['data']);
})


// //服务器
var connect = require("gulp-connect");
gulp.task("server",function(){
	connect.server({
		root: 'dist', 
		port: 8888,   
		livereload: true 
	})
})

gulp.task('default',["watch","server"]);

// var concat = require("gulp-concat");

// var uglify = require("gulp-uglify");

// var rename = require("gulp-rename");


// //
// gulp.task("scripts", function(){
// 	return gulp.src(['js/index.js'])
// 	.pipe(uglify())
// 	.pipe(gulp.dest('dist/data'))
// 	.pipe(rename('index.min.js'))
// 	.pipe(gulp.dest('dist/data'))
// 	.pipe(connect.reload());
// })

// gulp.task("scripts", function(){
// 	return gulp.src(['js/index2.js'])
// 	.pipe(uglify())
// 	.pipe(gulp.dest('dist/data'))
// 	.pipe(rename('index2.min.js'))
// 	.pipe(gulp.dest('dist/data'))
// 	.pipe(connect.reload());
// })
