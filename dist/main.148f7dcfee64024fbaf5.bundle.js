webpackJsonp([1,5],{343:function(t,a){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=343},344:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n(433),o=n(0),i=n(455),r=n(454);i.a.production&&n.i(o.a)(),n.i(e.a)().bootstrapModule(r.a)},453:function(t,a,n){"use strict";var e=n(0);n.d(a,"a",function(){return r});var o=this&&this.__decorate||function(t,a,n,e){var o,i=arguments.length,r=i<3?a:null===e?e=Object.getOwnPropertyDescriptor(a,n):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,a,n,e);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(i<3?o(r):i>3?o(a,n,r):o(a,n))||r);return i>3&&r&&Object.defineProperty(a,n,r),r},i=this&&this.__metadata||function(t,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,a)},r=function(){function t(){this.firstLoad=!0,this.title="app works!",this.MenuActiveTab=0,this.addScroll()}return t.prototype.addScroll=function(){function t(){var t=$(document).scrollTop();$(a+" a").each(function(){var a=$(this).attr("href"),n=$(a);if(console.log(n,n.position().top),n.position().top<=t+150&&n.position().top+n.outerHeight()>t){$("a span.active").removeClass("active"),console.log("this = ",$(this).context.hash);var e=$(this).context.hash;if($("a[href^="+e+"] span").addClass("active"),"#what_for_you"==e){var o=1;setInterval(function(){var t=document.getElementById("myBar"+o),a=document.getElementById("myPrProc"+o),n=$(t).width();setInterval(function(){n<100&&(n++,t.style.width=n+"%",$(a).text(n+"%"))},10),o<=5&&o++},800)}}})}$(document).ready(function(){$("#menu").on("click","a",function(t){t.preventDefault();var a=$(this).attr("href"),n=$(a).offset().top;console.log(a,n),"#what_for_you"==a&&(n+=400),$("body,html").animate({scrollTop:n},1400)})});var a=".icon-bar";$(document).ready(function(){$(document).on("scroll",t),$("a[href^=#]").click(function(n){n.preventDefault(),$(document).off("scroll"),$(a+" a span.active").removeClass("active"),$(this).addClass("active");var e=$(this).attr("href"),o=$(e);$("html, body").animate({scrollTop:o.offset().top+10},500,function(){window.location.hash=e,$(document).on("scroll",t)})})})},t.prototype.move=function(){},t=o([n.i(e.U)({selector:"app-root",template:n(610),styles:[n(608)]}),i("design:paramtypes",[])],t)}()},454:function(t,a,n){"use strict";var e=n(192),o=n(0),i=n(423),r=n(429),c=n(453);n.d(a,"a",function(){return p});var s=this&&this.__decorate||function(t,a,n,e){var o,i=arguments.length,r=i<3?a:null===e?e=Object.getOwnPropertyDescriptor(a,n):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,a,n,e);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(i<3?o(r):i>3?o(a,n,r):o(a,n))||r);return i>3&&r&&Object.defineProperty(a,n,r),r},l=this&&this.__metadata||function(t,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,a)},p=function(){function t(){}return t=s([n.i(o.b)({declarations:[c.a],imports:[e.a,i.a,r.a],providers:[],bootstrap:[c.a]}),l("design:paramtypes",[])],t)}()},455:function(t,a,n){"use strict";n.d(a,"a",function(){return e});var e={production:!0}},608:function(t,a){t.exports='@import url("https://fonts.googleapis.com/css?family=Montserrat");a{text-decoration:none}.logo{width:100%;padding-left:15%;padding-right:15%;background-color:rgba(43,51,62,.185)}.icon-bar{width:215px;background-color:#232a34;position:fixed;height:100%}.icon-bar .tab-control{border-top:2px solid #2b333e;display:block;text-align:center;padding:15px;padding-left:40px;padding-right:40px;transition:all .3s ease;color:#505865;font-size:16px;text-decoration:none;font-family:Montserrat,sans-serif;font-weight:400;letter-spacing:normal;font-stretch:100%}.icon-bar .tab-control .fa{padding:8px;font-size:30px}.icon-bar .tab-control:hover{background-color:rgba(0,0,0,.199);text-decoration:none;color:#e4e3e3}.active{color:#ecbe00}.main-title{font-family:Montserrat,sans-serif;font-weight:900;padding-left:calc(50% - 210px);padding-top:100px;font-size:80px;color:#fff;text-shadow:2px 2px 3px #000,0 0 2px #000}.main-title p{padding-top:75px}.main-title.add{font-size:20px;padding-top:60px}.text-main-title{font-family:Montserrat,sans-serif;font-weight:900;padding-left:27%;padding-top:160px;font-size:48px;color:#ecbe00;line-height:150%}.text-main-title,.text-main-title.city{text-shadow:2px 2px 3px #000,0 0 2px #000}.text-main-title.city{padding-top:20px;font-size:28px;color:#fff;padding-left:50%}.parallax{background-image:url(../assets/img/img_parallax.jpg);height:100%;min-height:1100px;background-attachment:fixed;background-position:75% 25%;background-repeat:no-repeat;background-size:cover}.parallax.main{background-position:15% 25%;background-image:url(../assets/img/geometria-64187951-photo3.png)}.parallax.cards{background-size:cover;background-image:url(../assets/img/upRVLprQOec.jpg);min-height:1500px}@media only screen and (max-device-width:1024px){.parallax{background-attachment:scroll}}.center-block{position:absolute;left:33%;right:calc(33% - 210px);top:90%;height:auto;background-color:#1c212a;color:#fff}.center-block p{font-family:Montserrat,sans-serif;font-weight:400;letter-spacing:normal;font-stretch:100%;font-size:20px;padding:55px;padding-bottom:0;line-height:160%}.center-block a p,.center-block a p:hover{padding:15px;margin:55px;text-align:center;color:#ecbe00;border:1px solid #ecbe00}.center-block a p:hover{background-color:rgba(0,0,0,.199)}.player .title .portrait{display:none}.parallax.cards .cards-content{padding-top:600px;padding-left:220px;width:100%}.parallax.cards .cards-content h1{font-family:Montserrat,sans-serif;padding-top:100px;font-weight:600;font-size:70px;text-align:center;color:#f0f8ff;text-shadow:1px 1px 1px #000,0 0 1px #000}.parallax.cards .cards-content .progress{padding-top:30px;padding-left:calc(20% + 215px);padding-left:20%;width:80%;-ms-flex-line-pack:center;align-content:center;height:auto;background-color:#00000000}.parallax.cards .cards-content .progress span{display:inline-block;color:#fff}#myProgress1{width:100%;height:30px;background-color:hsla(0,0%,50%,0)}#myBar1{width:1%;height:30px;background-color:#4caf50}#myProgress2{width:100%;background-color:grey}#myBar2{width:1%;height:30px;background-color:#4caf50}#myProgress3{width:100%;background-color:grey}#myBar3{width:1%;height:30px;background-color:#4caf50}'},610:function(t,a){t.exports='\n\x3c!--<h1>\n  {{title}}\n</h1>\n <div id="myProgress">\n  <div id="myBar"></div>\n</div>\n<br>\n<button (click)="move()">Click Me</button> \n\n<p>In this example we have turned off parallax scrolling for mobile devices. It works as expected on all desktop screens sizes.</p>\n<p>Scroll Up and Down this page to see the parallax scrolling effect.</p> --\x3e\n\n\n<div class="icon-bar" id="menu">\n  <a href="#main">\n    <img class="logo" src="../assets/img/IM GV2 2.png">\n  </a>\n  <a class="tab-control" href="#main" (click)="MenuActiveTab=0">\n      <span [ngClass]="{\'active\':MenuActiveTab==0}"><i class="fa fa-home"></i></span>\n      <span [ngClass]="{\'active\':MenuActiveTab==0}"><p>Главная</p></span>\n    </a> \n  <a class="tab-control" href="#what_for_you" (click)="MenuActiveTab=1">\n    <span [ngClass]="{\'active\':MenuActiveTab==1}"><i class="fa fa-gift"></i></span>\n    <span [ngClass]="{\'active\':MenuActiveTab==1}"><p>Что Вам</p></span>\n  </a> \n  <a class="tab-control" href="#portfolio" (click)="MenuActiveTab=2">\n    <span [ngClass]="{\'active\':MenuActiveTab==2}"><i class="fa fa-caret-square-o-right"></i></span>\n    <span [ngClass]="{\'active\':MenuActiveTab==2}"><p>Портфолио</p></span>\n  </a> \n  <a class="tab-control" href="#why_i" (click)="MenuActiveTab=3">\n      <span [ngClass]="{\'active\':MenuActiveTab==3}"><i class="fa fa-user-circle"></i></span>\n      <span [ngClass]="{\'active\':MenuActiveTab==3}"><p>Почему Я</p></span>\n    </a> \n    <a class="tab-control" href="#uslugi" (click)="MenuActiveTab=4">\n        <span [ngClass]="{\'active\':MenuActiveTab==4}"><i class="fa fa-magic"></i></span>\n        <span [ngClass]="{\'active\':MenuActiveTab==4}"><p>Услуги</p></span>\n      </a> \n      <a class="tab-control" href="#contacts" (click)="MenuActiveTab=5">\n          <span [ngClass]="{\'active\':MenuActiveTab==5}"><i class="fa fa-address-card"></i></span>\n          <span [ngClass]="{\'active\':MenuActiveTab==5}"><p>Контакты</p></span>\n        </a> \n</div>\n\n<div>\n    <div class="center-block" >      \n        <iframe style="padding-top:35px;" id="player" src="https://player.vimeo.com/video/250352302?title=false&author_name=false&author_logo=false&byline=false&api=1&player_id=player" width="100%" height="450px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n        <p>Если у вас намечается свадьба, юбилей, корпоративное мероприятие, вечеринка, день рождения, наполните его волшебством! Звоните!</p>\n        <a href="#main"><p>Да, я хочу, чтобы о моем событии говорили с восторгом</p></a>\n    </div> \n\n\n<div class="parallax main" id="main">\n    <h1 class="main-title"><p><b style="color: #ECBE00;">Г</b>ОРБАЧЕВ</p><p>ВЛАДИСЛАВ<b style="color: #ECBE00;">.</b></p></h1>\n    <h4 class="main-title add glitch">• ИЛЛЮЗИОНИСТ НОВОГО ПОКОЛЕНИЯ •</h4>\n    <h2 class="text-main-title">ВОЛШЕБНОЕ ШОУ НА ВАШЕМ ПРАЗДНИКЕ</h2>\n    <h2 class="text-main-title city">г. Донецк</h2>\n    \n</div>\n\n\n<div class="parallax cards" id="what_for_you">\n  <div class="cards-content">\n  <h1>ЧТО ВЫ ПОЛУЧИТЕ?</h1>\n    <div class="progress" style="padding-top:100px;">\n      <span >ЭМОЦИИ <span id="myPrProc1"></span></span>\n      <div id="myProgress1">\n        <div id="myBar1"></div>\n      </div>\n    </div>\n\n    <div class="progress">\n        <span>ВТорое <span id="myPrProc2"></span></span>\n        <div id="myProgress2">\n          <div id="myBar2"></div>\n        </div>\n      </div>\n\n      <div class="progress">\n          <span>Третье <span id="myPrProc3"></span></span>\n          <div id="myProgress3">\n            <div id="myBar3"></div>\n          </div>\n        </div>\n  </div>\n\n</div>\n\n<div style="height:900px;background:red;" id="portfolio">\n\n</div>\n\n<div style="height:1200px;background:green;" id="why_i">\n\n</div>\n\n\n\n</div>'},625:function(t,a,n){t.exports=n(344)}},[625]);