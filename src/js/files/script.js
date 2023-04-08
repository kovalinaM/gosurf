// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import $ from 'jquery'
import 'slick-carousel'
    
window.jQuery = window.$ = $; 

$(function(){
    $('.header__slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows " src="img/arrows-right.svg" alt="">'
    });
});