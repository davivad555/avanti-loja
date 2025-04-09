import { CarroselBanner } from "./CarroselBanner.js";
import {showMenuDesktop, showMenuMobile } from "./departamentos.js";
import { resultSeach } from "./search.js";

let banners = document.querySelector('.slide-hero')
let qtSlide = banners.children.length;
let dots = document.querySelectorAll(".dots")
let time = 5000;
let count = 0;

setInterval(()=>{count = CarroselBanner(banners, qtSlide,count,dots)},time);



/*exibi menu com departmentos e categorias */
showMenuDesktop();

resultSeach();

showMenuMobile()
