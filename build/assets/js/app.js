!function(){return function o(e,s,i){function t(r,l){if(!s[r]){if(!e[r]){var c="function"==typeof require&&require;if(!l&&c)return c(r,!0);if(n)return n(r,!0);var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a}var d=s[r]={exports:{}};e[r][0].call(d.exports,function(o){return t(e[r][1][o]||o)},d,d.exports,o,e,s,i)}return s[r].exports}for(var n="function"==typeof require&&require,r=0;r<i.length;r++)t(i[r]);return t}}()({1:[function(o,e,s){$(function(){o("./modules/svg4everybody")(),o("./modules/back2top")(),o("./modules/menu")(),o("./modules/tags")(),o("./modules/showMore")(),o("./modules/radio")(),o("./modules/checkbox")(),o("./modules/slick")(),o("./modules/popup")(),o("./modules/tabs")()})},{"./modules/back2top":2,"./modules/checkbox":3,"./modules/menu":4,"./modules/popup":5,"./modules/radio":6,"./modules/showMore":7,"./modules/slick":8,"./modules/svg4everybody":9,"./modules/tabs":10,"./modules/tags":11}],2:[function(o,e,s){e.exports=function(){$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>500?$("#back2top").fadeIn():$("#back2top").fadeOut()}),$("#back2top").click(function(){$("body, html").animate({scrollTop:0},1e3)})})}},{}],3:[function(o,e,s){e.exports=function(){$(".checkbox input").on("click",function(){$(this).parents(".checkbox").toggleClass("active")})}},{}],4:[function(o,e,s){e.exports=function(){$("#burger__input").on("click",function(){$("#header__menu").toggleClass("active")}),$(".header__menu-link").on("click",function(){$("#header__menu").removeClass("active")})}},{}],5:[function(o,e,s){e.exports=function(){$(".popup-open").on("click",function(){var o=$(this).attr("href");console.log(o),$("body").addClass("no-scroll"),$(o).fadeIn(),$(".popup__layer").fadeIn()}),$(".popup__layer, .popup__close").on("click",function(){$("body").removeClass("no-scroll"),$(".popup, .popup__layer").fadeOut()})}},{}],6:[function(o,e,s){e.exports=function(){$(".profile-edit__form-decor-radio").on("click",function(){$(".profile-edit__form-decor-radio").parents("label").removeClass("active"),$(".profile-edit__form-decor-radio").parents(".profile-edit__form-decor-item").removeClass("active"),$(this).parents("label").addClass("active"),$(this).parents(".profile-edit__form-decor-item").addClass("active")}),$(".profile-edit__radio-row-label").on("click",function(){$(".profile-edit__radio-row-label").removeClass("active"),$(this).addClass("active")})}},{}],7:[function(o,e,s){e.exports=function(){$(".profile-top__show-more-open").on("click",function(){$(".profile-top__show-more-open").fadeOut(0),$(".profile-top__show-more-close").fadeIn(0),$("#profile-all-info").slideDown()}),$(".profile-all-info__close, .profile-top__show-more-close").on("click",function(){$("#profile-all-info").slideUp(),$(".profile-top__show-more-close").fadeOut(0),$(".profile-top__show-more-open").fadeIn(0)})}},{}],8:[function(o,e,s){e.exports=function(){$(".profile-teacher-education__sertificate-slider").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!1,responsive:[{breakpoint:501,settings:{slidesToShow:2}}]}),$(".profile-teacher__reviews-slider").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!1,responsive:[{breakpoint:769,settings:{slidesToShow:2}},{breakpoint:577,settings:{slidesToShow:1}}]}),$(".profile-teacher__reviews-t-slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,dots:!1,responsive:[{breakpoint:951,settings:{slidesToShow:1}}]}),$(".course-schedule__slider").slick({infinite:!1,slidesToShow:6,slidesToScroll:1,dots:!1,responsive:[{breakpoint:1111,settings:{slidesToShow:5}},{breakpoint:951,settings:{slidesToShow:4}},{breakpoint:681,settings:{slidesToShow:3}},{breakpoint:501,settings:{slidesToShow:2}}]}),$(".courses-top__slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,dots:!1,responsive:[{breakpoint:861,settings:{slidesToShow:1}}]})}},{}],9:[function(o,e,s){e.exports=function(){$(function(){svg4everybody()})}},{}],10:[function(o,e,s){e.exports=function(){$(".course-questions-tabs__question").on("click",function(){$(this).parents(".course-questions-tabs-row").hasClass("active")?($(".course-questions-tabs-row").removeClass("active"),$(".course-questions-tabs__answer").slideUp()):($(".course-questions-tabs-row").removeClass("active"),$(".course-questions-tabs__answer").slideUp(),$(this).parents(".course-questions-tabs-row").addClass("active"),$(this).siblings(".course-questions-tabs__answer").slideDown())}),$(".my-course-body-tabs__btn").on("click",function(){var o=$(this).data("tab");$(".my-course-body-tabs__btn, .my-course-body-tabs__tab").removeClass("active"),$(this).addClass("active"),$(".my-course-body-tabs__tab-"+o).addClass("active")})}},{}],11:[function(o,e,s){e.exports=function(){$(".profile-article__tags-item--arrow").on("click",function(){$(this).toggleClass("active");var o=$(this).parents(".profile-article__tags-list");$(o).children(".profile-article__tags-item.hidden").slideToggle()})}},{}]},{},[1]);