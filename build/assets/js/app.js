!function(){return function o(e,r,t){function i(l,c){if(!r[l]){if(!e[l]){var s="function"==typeof require&&require;if(!c&&s)return s(l,!0);if(n)return n(l,!0);var f=new Error("Cannot find module '"+l+"'");throw f.code="MODULE_NOT_FOUND",f}var a=r[l]={exports:{}};e[l][0].call(a.exports,function(o){return i(e[l][1][o]||o)},a,a.exports,o,e,r,t)}return r[l].exports}for(var n="function"==typeof require&&require,l=0;l<t.length;l++)i(t[l]);return i}}()({1:[function(o,e,r){$(function(){o("./modules/svg4everybody")(),o("./modules/back2top")(),o("./modules/menu")(),o("./modules/tags")(),o("./modules/showMore")(),o("./modules/radio")()})},{"./modules/back2top":2,"./modules/menu":3,"./modules/radio":4,"./modules/showMore":5,"./modules/svg4everybody":6,"./modules/tags":7}],2:[function(o,e,r){e.exports=function(){$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>500?$("#back2top").fadeIn():$("#back2top").fadeOut()}),$("#back2top").click(function(){$("body, html").animate({scrollTop:0},1e3)})})}},{}],3:[function(o,e,r){e.exports=function(){$("#burger__input").on("click",function(){$("#header__menu").toggleClass("active")}),$(".header__menu-link").on("click",function(){$("#header__menu").removeClass("active")})}},{}],4:[function(o,e,r){e.exports=function(){$(".profile-edit__form-decor-radio").on("click",function(){$(".profile-edit__form-decor-radio").parents("label").removeClass("active"),$(".profile-edit__form-decor-radio").parents(".profile-edit__form-decor-item").removeClass("active"),$(this).parents("label").addClass("active"),$(this).parents(".profile-edit__form-decor-item").addClass("active")})}},{}],5:[function(o,e,r){e.exports=function(){$(".profile-top__show-more-open").on("click",function(){$(".profile-top__show-more-open").fadeOut(0),$(".profile-top__show-more-close").fadeIn(0),$("#profile-all-info").slideDown()}),$(".profile-all-info__close, .profile-top__show-more-close").on("click",function(){$("#profile-all-info").slideUp(),$(".profile-top__show-more-close").fadeOut(0),$(".profile-top__show-more-open").fadeIn(0)})}},{}],6:[function(o,e,r){e.exports=function(){$(function(){svg4everybody()})}},{}],7:[function(o,e,r){e.exports=function(){$(".profile-article__tags-item--arrow").on("click",function(){$(this).toggleClass("active");var o=$(this).parents(".profile-article__tags-list");$(o).children(".profile-article__tags-item.hidden").slideToggle()})}},{}]},{},[1]);