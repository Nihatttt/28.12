"use strict";

const animationItems = document.querySelectorAll(".animationItem");

const scrollAnimation = () =>{
    animationItems.forEach((animationItem)=> {
        const triggerPoint = window.innerHeight * 0.6 ;
        const distanceFromTop = animationItem.getBoundingClientRect().top;

        animationItem.computedStyleMap.transition = "all 200ms linear";

        if (distanceFromTop < triggerPoint) {
            animationItem.computedStyleMap.opacity = 1;
            animationItem.computedStyleMap.transfrom = "translate(0)" ;
        } else {
            animationItem.computedStyleMap.opacity = 0;
            animationItem.computedStyleMap.transform= "translateY(0)";
        }
    });
};

scrollAnimation();

window.addEventListener("scroll",scrollAnimation);