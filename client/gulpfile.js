const gulp=require('gulp');
const gulpSass=require('gulp-sass');
const sass=gulpSass(require('sass'));//turn on compiler gulp 

// gulp.task('sass',async function(){
//     gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
// })

gulp.task('watch',async function(){ //npm run watchتسوي تنفيذ 
    gulp.watch('src/components/**/*.scss',async function(){//تسوي مراقية اي تفيير يحدث في هذا المسار 
        gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))// src/cssتراقب وتسجل الاحداث في هذا المسار الي نفسة الفوك وبعدين تمرره عبر الكومبايلر الساس ليقوم وتحطة جوه هذا المسار
    })
})