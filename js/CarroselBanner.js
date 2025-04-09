
export function CarroselBanner(slides, qtSlide, count, dots){
    let width = window.innerWidth;
    dots[count].classList.remove('dot-checked');    

    count++;
    
    if(count >=qtSlide) { count = 0;}

    slides.style.transform = `translateX(${-count*width}px)`;
    console.log("terminou", width);

    dots[count].classList.add('dot-checked');
    return count;
}
