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
        prevArrow: '<img class="slider__arrows slider__arrows_left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider__arrows slider__arrows_right" src="img/arrows-right.svg" alt="">',
        asNavFor: '.slider-dotts'
    });
    $('.slider-dotts').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.header__slider'
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider__arrows slider__arrows_left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider__arrows slider__arrows_right" src="img/arrows-right.svg" alt="">',
    });

});
