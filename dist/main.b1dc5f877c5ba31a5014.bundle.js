webpackJsonp([1,5],{343:function(t,n){function a(t){throw new Error("Cannot find module '"+t+"'.")}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id=343},344:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(433),i=a(0),o=a(455),r=a(454);o.a.production&&a.i(i.a)(),a.i(e.a)().bootstrapModule(r.a)},453:function(t,n,a){"use strict";var e=a(0);a.d(n,"a",function(){return r});var i=this&&this.__decorate||function(t,n,a,e){var i,o=arguments.length,r=o<3?n:null===e?e=Object.getOwnPropertyDescriptor(n,a):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,a,e);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(n,a,r):i(n,a))||r);return o>3&&r&&Object.defineProperty(n,a,r),r},o=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},r=function(){function t(){this.firstLoad=!0,this.title="app works!",this.MenuActiveTab=0,this.addScroll()}return t.prototype.addScroll=function(){function t(){var t=$(document).scrollTop();$(n+" a").each(function(){var n=$(this).attr("href"),a=$(n);if(console.log(a,a.position().top),a.position().top<=t+150&&a.position().top+a.outerHeight()>t){$("a span.active").removeClass("active"),console.log("this = ",$(this).context.hash);var e=$(this).context.hash;if($("a[href^="+e+"] span").addClass("active"),"#what_for_you"==e)var i=1,o=setInterval(function(){var t=document.getElementById("myBar"+i),n=document.getElementById("myPrProc"+i),a=$(t).width(),e=setInterval(function(){if(a<100||n&&n.id&&"myPrProc1"==n.id&&a<106)a++,t.style.width=a+"%",$(n).text(a+"%");else{clearInterval(e)}},10);if(i<5)i++;else{clearInterval(o)}},800)}})}$(document).ready(function(){$("#menu").on("click","a",function(t){t.preventDefault();var n=$(this).attr("href"),a=$(n).offset().top;console.log(n,a),$("body,html").animate({scrollTop:a},1400)})});var n=".icon-bar";$(document).ready(function(){$(document).on("scroll",t),$("a[href^=#]").click(function(a){a.preventDefault(),$(document).off("scroll"),$(n+" a span.active").removeClass("active"),$(this).addClass("active");var e=$(this).attr("href"),i=$(e);$("html, body").animate({scrollTop:i.offset().top+10},500,function(){window.location.hash=e,$(document).on("scroll",t)})})})},t.prototype.move=function(){},t=i([a.i(e.U)({selector:"app-root",template:a(610),styles:[a(608)]}),o("design:paramtypes",[])],t)}()},454:function(t,n,a){"use strict";var e=a(192),i=a(0),o=a(423),r=a(429),s=a(453);a.d(n,"a",function(){return p});var c=this&&this.__decorate||function(t,n,a,e){var i,o=arguments.length,r=o<3?n:null===e?e=Object.getOwnPropertyDescriptor(n,a):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,a,e);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(n,a,r):i(n,a))||r);return o>3&&r&&Object.defineProperty(n,a,r),r},l=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},p=function(){function t(){}return t=c([a.i(i.b)({declarations:[s.a],imports:[e.a,o.a,r.a],providers:[],bootstrap:[s.a]}),l("design:paramtypes",[])],t)}()},455:function(t,n,a){"use strict";a.d(n,"a",function(){return e});var e={production:!0}},608:function(t,n){t.exports='@import url("https://fonts.googleapis.com/css?family=Montserrat");a{text-decoration:none}.logo{width:100%;padding-left:15%;padding-right:15%;background-color:rgba(43,51,62,.185)}.icon-bar{width:215px;background-color:#232a34;position:fixed;height:100%}.icon-bar .tab-control{border-top:2px solid #2b333e;display:block;text-align:center;padding:15px;padding-left:40px;padding-right:40px;transition:all .3s ease;color:#505865;font-size:16px;text-decoration:none;font-family:Montserrat,sans-serif;font-weight:400;letter-spacing:normal;font-stretch:100%}.icon-bar .tab-control .fa{padding:8px;font-size:30px}.icon-bar .tab-control:hover{background-color:rgba(0,0,0,.199);text-decoration:none;color:#e4e3e3}.active{color:#ecbe00}.main-title{font-family:Montserrat,sans-serif;font-weight:900;padding-left:calc(50% - 210px);padding-top:100px;font-size:80px;color:#fff;text-shadow:2px 2px 3px #000,0 0 2px #000}.main-title p{padding-top:75px}.main-title.add{font-size:20px;padding-top:60px}.text-main-title{font-family:Montserrat,sans-serif;font-weight:900;padding-left:27%;padding-top:160px;font-size:48px;color:#ecbe00;line-height:150%}.text-main-title,.text-main-title.city{text-shadow:2px 2px 3px #000,0 0 2px #000}.text-main-title.city{padding-top:20px;font-size:28px;color:#fff;padding-left:50%}.parallax{background-image:url(../assets/img/img_parallax.jpg);height:100%;min-height:1100px;background-attachment:fixed;background-position:75% 25%;background-repeat:no-repeat;background-size:cover}.parallax.main{background-position:15% 25%;background-image:url(../assets/img/geometria-64187951-photo3.png)}.parallax.cards{background-size:cover;background-image:url(../assets/img/upRVLprQOec.jpg);min-height:1500px}@media only screen and (max-device-width:1024px){.parallax{background-attachment:scroll}}.center-block{position:absolute;left:33%;right:calc(33% - 210px);top:90%;height:auto;background-color:#1c212a;color:#fff}.center-block p{font-family:Montserrat,sans-serif;font-weight:400;letter-spacing:normal;font-stretch:100%;font-size:20px;padding:55px;padding-bottom:0;line-height:160%}.center-block a p,.center-block a p:hover{padding:15px;margin:55px;text-align:center;color:#ecbe00;border:1px solid #ecbe00}.center-block a p:hover{background-color:rgba(0,0,0,.199)}.player .title .portrait{display:none}.parallax.cards .cards-content{padding-top:640px;padding-left:220px;width:100%}.parallax.cards .cards-content h1{font-family:Montserrat,sans-serif;padding-top:100px;font-weight:600;font-size:70px;text-align:center;color:#f0f8ff;text-shadow:1px 1px 1px #000,0 0 1px #000}.parallax.cards .cards-content .progress{padding-top:30px;padding-left:calc(20% + 215px);padding-left:20%;width:80%;-ms-flex-line-pack:center;align-content:center;height:auto;background-color:#00000000}.parallax.cards .cards-content .progress span{font-family:Montserrat,sans-serif;padding-left:20px;font-weight:100;font-size:25px;text-align:center;color:#f0f8ff;text-shadow:1px 1px 1px #000,0 0 1px #000}#myProgress1{width:100%;height:30px;background-color:hsla(0,0%,50%,0)}#myBar1{width:1%;height:30px;background-color:#4caf50}#myProgress2{width:95%;background-color:hsla(0,0%,50%,0)}#myBar2{width:1%;height:30px;background-color:#4caf50}#myProgress3{width:95%;background-color:hsla(0,0%,50%,0)}#myBar3{width:1%;height:30px;background-color:#4caf50}#myProgress4{width:95%;background-color:hsla(0,0%,50%,0)}#myBar4{width:1%;height:30px;background-color:#4caf50}#myProgress5{width:95%;background-color:hsla(0,0%,50%,0)}#myBar5{width:1%;height:30px;background-color:#4caf50}'},610:function(t,n){t.exports='\n\x3c!--<h1>\n  {{title}}\n</h1>\n <div id="myProgress">\n  <div id="myBar"></div>\n</div>\n<br>\n<button (click)="move()">Click Me</button> \n\n<p>In this example we have turned off parallax scrolling for mobile devices. It works as expected on all desktop screens sizes.</p>\n<p>Scroll Up and Down this page to see the parallax scrolling effect.</p> --\x3e\n\n\n<div class="icon-bar" id="menu">\n  <a href="#main">\n    <img class="logo" src="../assets/img/IM GV2 2.png">\n  </a>\n  <a class="tab-control" href="#main" (click)="MenuActiveTab=0">\n      <span [ngClass]="{\'active\':MenuActiveTab==0}"><i class="fa fa-home"></i></span>\n      <span [ngClass]="{\'active\':MenuActiveTab==0}"><p>Главная</p></span>\n    </a> \n  <a class="tab-control" href="#what_for_you" (click)="MenuActiveTab=1">\n    <span [ngClass]="{\'active\':MenuActiveTab==1}"><i class="fa fa-gift"></i></span>\n    <span [ngClass]="{\'active\':MenuActiveTab==1}"><p>Что Вам</p></span>\n  </a> \n  <a class="tab-control" href="#portfolio" (click)="MenuActiveTab=2">\n    <span [ngClass]="{\'active\':MenuActiveTab==2}"><i class="fa fa-caret-square-o-right"></i></span>\n    <span [ngClass]="{\'active\':MenuActiveTab==2}"><p>Портфолио</p></span>\n  </a> \n  <a class="tab-control" href="#why_i" (click)="MenuActiveTab=3">\n      <span [ngClass]="{\'active\':MenuActiveTab==3}"><i class="fa fa-user-circle"></i></span>\n      <span [ngClass]="{\'active\':MenuActiveTab==3}"><p>Почему Я</p></span>\n    </a> \n    <a class="tab-control" href="#uslugi" (click)="MenuActiveTab=4">\n        <span [ngClass]="{\'active\':MenuActiveTab==4}"><i class="fa fa-magic"></i></span>\n        <span [ngClass]="{\'active\':MenuActiveTab==4}"><p>Услуги</p></span>\n      </a> \n      <a class="tab-control" href="#contacts" (click)="MenuActiveTab=5">\n          <span [ngClass]="{\'active\':MenuActiveTab==5}"><i class="fa fa-address-card"></i></span>\n          <span [ngClass]="{\'active\':MenuActiveTab==5}"><p>Контакты</p></span>\n        </a> \n</div>\n\n<div>\n    <div class="center-block" >      \n        <iframe style="padding-top:35px;" id="player" src="https://player.vimeo.com/video/250352302?title=false&author_name=false&author_logo=false&byline=false&api=1&player_id=player" width="100%" height="450px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n        <p>Если у вас намечается свадьба, юбилей, корпоративное мероприятие, вечеринка, день рождения, наполните его волшебством! Звоните!</p>\n        <a href="#main"><p>Да, я хочу, чтобы о моем событии говорили с восторгом</p></a>\n    </div> \n\n\n<div class="parallax main" id="main">\n    <h1 class="main-title"><p><b style="color: #ECBE00;">Г</b>ОРБАЧЕВ</p><p>ВЛАДИСЛАВ<b style="color: #ECBE00;">.</b></p></h1>\n    <h4 class="main-title add glitch">• ИЛЛЮЗИОНИСТ НОВОГО ПОКОЛЕНИЯ •</h4>\n    <h2 class="text-main-title">ВОЛШЕБНОЕ ШОУ НА ВАШЕМ ПРАЗДНИКЕ</h2>\n    <h2 class="text-main-title city">г. Донецк</h2>\n    \n</div>\n\n\n<div class="parallax cards" >\n  <div class="cards-content">\n  <h1 id="what_for_you">ЧТО ВЫ ПОЛУЧИТЕ?</h1>\n    <div class="progress" style="padding-top:100px;">\n      <span >ЭМОЦИИ <span id="myPrProc1"></span></span>\n      <div id="myProgress1">\n        <div id="myBar1"></div>\n      </div>\n    </div>\n\n    <div class="progress">\n        <span>ВТорое <span id="myPrProc2"></span></span>\n        <div id="myProgress2">\n          <div id="myBar2"></div>\n        </div>\n      </div>\n\n      <div class="progress">\n          <span>Третье <span id="myPrProc3"></span></span>\n          <div id="myProgress3">\n            <div id="myBar3"></div>\n          </div>\n        </div>\n\n        <div class="progress">\n          <span>Третье <span id="myPrProc4"></span></span>\n          <div id="myProgress4">\n            <div id="myBar4"></div>\n          </div>\n        </div>\n\n        <div class="progress">\n          <span>Третье <span id="myPrProc5"></span></span>\n          <div id="myProgress5">\n            <div id="myBar5"></div>\n          </div>\n        </div>\n  </div>\n\n</div>\n\n<div style="height:900px;background:red;" id="portfolio">\n\n</div>\n\n<div style="height:1200px;background:green;" id="why_i">\n\n</div>\n\n\n\n</div>'},625:function(t,n,a){t.exports=a(344)}},[625]);