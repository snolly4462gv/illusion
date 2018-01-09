import { Component } from '@angular/core';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app works!';
  MenuActiveTab:number = 0;
  constructor(){

     
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href')
    ,
  
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		console.log(id, top);
    //анимируем переход на расстояние - top за 1500 мс
    if(id!="#main")top+=400;
		$('body,html').animate({scrollTop: top}, 1400);
	});
});


// var menu_selector = ".icon-bar"; 
// function onScroll(){
// 	var scroll_top = $(document).scrollTop();
// 	$(menu_selector + " a").each(function(){
// 		var hash = $(this).attr("href");
// 		var target = $(hash);
// 		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
// 			$(menu_selector + " a.active").removeClass("active");
// 			$(this).addClass("active");
// 		} else {
// 			$(this).removeClass("active");
// 		}
// 	});
// }
// $(document).ready(function () {
// 	$(document).on("scroll", onScroll);
// 	$("a[href^=#]").click(function(e){
// 		e.preventDefault();
// 		$(document).off("scroll");
// 		$(menu_selector + " a.active").removeClass("active");
// 		$(this).addClass("active");
// 		var hash = $(this).attr("href");
// 		var target = $(hash);
// 		$("html, body").animate({
// 		    scrollTop: target.offset().top
// 		}, 500, function(){
// 			window.location.hash = hash;
// 			$(document).on("scroll", onScroll);
// 		});
// 	});
// });
// $(document).ready(function(){
// 	$(".top-menu").changeActiveNav();
// });


  }


   move() {
    let elem = document.getElementById("myBar"); 
    let width = 1;
     setInterval(()=>{
      {
        if (width < 100)  {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
    }, 10);
  }





    

}




