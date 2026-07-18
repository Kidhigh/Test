/* ==========================================
   PIXEL LABS V2
   PREMIUM MOTION SYSTEM
========================================== */

/* ==========================
   GSAP SETUP
========================== */


gsap.registerPlugin(ScrollTrigger);



/* ======================
   LOADER
====================== */


window.addEventListener("load",()=>{


const tl = gsap.timeline();



tl.to(".loader-text",{

opacity:1,

y:0,

duration:1,

ease:"power4.out"

})


.to(".loader-text",{

opacity:0,

y:-30,

duration:.6,

delay:.5

})


.to(".loader",{

height:0,

duration:1.2,

ease:"power4.inOut"

})


});

setTimeout(()=>{

document.querySelector(".loader").style.height="0";

},2500);



/* ==========================
   LENIS SMOOTH SCROLL
========================== */


const lenis = new Lenis({

    duration:1.2,

    easing:(t)=>1-Math.pow(1-t,3),

    smoothWheel:true,

    wheelMultiplier:.8,

    touchMultiplier:1.5,

    syncTouch:true,

    prevent:(node)=>{
        return node.closest(".mobile-menu");
    }

});


lenis.on("scroll", ScrollTrigger.update);



gsap.ticker.add((time)=>{

    lenis.raf(time * 1000);

});


gsap.ticker.lagSmoothing(0);



window.addEventListener("load",()=>{

ScrollTrigger.refresh();

});





/* ======================
   HERO TEXT REVEAL
====================== */


const heroTitle = document.querySelector(".hero-title");


if(heroTitle){

gsap.from(".hero-title span",{

    y:120,

    opacity:0,

    stagger:0.15,

    duration:1.2,

    ease:"power4.out",

    delay:1.8

});



gsap.from(".word",{


y:120,

opacity:0,

rotateX:-50,

stagger:.08,

duration:1.2,

ease:"power4.out",

delay:1.8


});


}




/* ==========================
   HEADER EFFECT
========================== */


const header = document.querySelector(".header");


lenis.on("scroll", ({scroll})=>{


    if(scroll > 80){

        header.style.background =
        "rgba(5,5,5,0.15)";

    }

    else{

        header.style.background =
        "rgba(5,5,5,0.15)";

    }


});








/* ==========================
   HERO INTRO ANIMATION
========================== */


const heroTimeline = gsap.timeline();



heroTimeline


.from(".hero-content .eyebrow",{

    y:40,

    opacity:0,

    duration:1.3,

    ease:"power4.out"

})


.from(".hero h1",{

    y:100,

    opacity:0,

    duration:1.2,

    ease:"power4.out"

},"-=0.6")



.from(".hero-description",{

    y:40,

    opacity:0,

    duration:1

},"-=0.7")



.from(".hero-actions",{

    y:30,

    opacity:0,

    duration:0.8

},"-=0.5");







/* ==========================
   HERO PARALLAX
========================== */


gsap.to(".hero-video",{

scale:1.05,

yPercent:8,

ease:"none",

scrollTrigger:{

trigger:".hero",

start:"top top",

end:"bottom top",

scrub:true

}

});



/* ==========================
GLOBAL REVEAL ANIMATIONS
========================== */

gsap.utils.toArray(
".service-item, .process-card, .statement, .project, .section-header"
).forEach((element)=>{


gsap.fromTo(element,

{
opacity:0,
visibility:"hidden",
y:60
},

{

opacity:1,
visibility:"visible",
y:0,

duration:1.2,

ease:"power4.out",

scrollTrigger:{

trigger:element,

start:"top 85%",

toggleActions:"play none none reverse"

}

});


});




/* ==========================
 PREMIUM CONTENT REVEALS
========================== */


gsap.utils.toArray(
".service-item, .process-card"
).forEach((item,index)=>{


gsap.fromTo(item,

{
opacity:0,
y:80,
filter:"blur(10px)"
},

{
opacity:1,
y:0,
filter:"blur(0px)",

duration:1.2,

ease:"power4.out",

scrollTrigger:{

trigger:item,

start:"top 85%",

toggleActions:"play none none reverse"

}

});


});




/* ==========================
   IMAGE REVEAL EFFECT
========================== */


const images = document.querySelectorAll(".project-image img");



images.forEach((image)=>{


    gsap.from(image,{


        scale:1.15,


        y:50,


        duration:1.5,


        ease:"power3.out",



        scrollTrigger:{


            trigger:image,


            start:"top 85%",


            scrub:false


        }


    });


});







/* ==========================
   PROJECT PARALLAX
========================== */


gsap.utils.toArray(".project-image").forEach((image)=>{


    gsap.to(image,{


        y:-40,


        ease:"none",


        scrollTrigger:{


            trigger:image,


            start:"top bottom",


            end:"bottom top",


            scrub:true


        }


    });



});





/* ==========================
   PROJECT HOVER EFFECT
========================== */


const projects =
document.querySelectorAll(".project-image");



projects.forEach(project=>{


    project.addEventListener(
    "mouseenter",
    ()=>{


        gsap.to(project,{
            
            scale:1.02,

            duration:.5,

            ease:"power3.out"

        });


    });



    project.addEventListener(
    "mouseleave",
    ()=>{


        gsap.to(project,{

            scale:1,

            duration:.5,

            ease:"power3.out"

        });


    });


});








/* ==========================
   SMOOTH ANCHOR LINKS
========================== */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target =
        document.querySelector(
        this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            lenis.scrollTo(target,{

                offset:-80,

                duration:1.2

            });


        }


    });



});



/* ===================================
   GSAP OFF-CANVAS MENU
=================================== */

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const backdrop = document.querySelector('.menu-backdrop');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

const menuTL = gsap.timeline({
    paused:true
});

menuTL
.set(mobileMenu,{
    visibility:"visible"
},0)

.set(backdrop,{
    visibility:"visible",
    pointerEvents:"auto"
},0)

.to(backdrop,{
    opacity:1,
    duration:.3
},0)

.to(mobileMenu,{
    x:0,
    duration:.65,
    ease:"power4.out"
},0)

.from(".mobile-nav a",{
    opacity:0,
    x:30,
    stagger:.08,
    duration:.45
},.15);

let menuOpen = false;

function openMenu() {
    menuOpen = true;
    hamburger.classList.add('active');
    menuTL.play();
}

function closeMenu(){

    menuOpen = false;

    hamburger.classList.remove("active");

    menuTL.reverse();

}

menuTL.eventCallback("onReverseComplete",()=>{

    gsap.set(mobileMenu,{
        visibility:"hidden"
    });

    gsap.set(backdrop,{
        visibility:"hidden",
        pointerEvents:"none"
    });

});


if (hamburger) {
    hamburger.addEventListener("click", () => {
        menuOpen ? closeMenu() : openMenu();
    });
}

if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
}

mobileLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});



/* ======================
   MAGNETIC BUTTONS
====================== */

if (window.innerWidth > 992) {

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {

        button.addEventListener("mousemove", (e) => {

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                x: x * 0.12,
                y: y * 0.12,
                duration: 0.25,
                overwrite: true
            });

        });

        button.addEventListener("mouseleave", () => {

            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            });

        });

    });

}





/* ======================
CUSTOM CURSOR
====================== */


const cursor = document.querySelector(".cursor");

if (cursor) {

    window.addEventListener("mousemove", (e) => {

        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.25,
            ease: "power3.out"
        });

    });

}


/* ==========================
CASE STUDY IMAGE ZOOM
========================== */


gsap.utils.toArray(".case-media img")
.forEach(image=>{


gsap.to(image,{

scale:1,

ease:"none",

scrollTrigger:{


trigger:image,

start:"top bottom",

end:"center center",

scrub:true


}


});


});

