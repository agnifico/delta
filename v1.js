gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".container"
});

// gsap.set('#sh1', {text: ''});

let tl1 = gsap.timeline({
    scrollTrigger: '.one',
    delay: 0
});

tl1.from('#q1a', {
    opacity: 0,
    duration: .5,
    delay: 1
}).from('#q1c', {
    opacity: 0,
    duration: .5
}, '<1').to('#q1b', {
    duration: .5,
    text: "artist",
    ease: "none",
    delay: 1
}, '<1').from('#q1d', {
    opacity: 0,
    duration: .5
}, '<1.2').from('.sq1', {
    stagger: 1,
    opacity: 0,
    duration: .5
}, "<1.3")




let tl2 = gsap.timeline({
    scrollTrigger: '.two',
    delay: .5,
    toggleActions: "restart pause complete pause",
});

tl2.from('#h1a', {
    y: "20%",
    opacity: 0,
    duration: .5,
    ease: "power",
}).from('#h1b', {
    y: "-20%",
    opacity: 0,
    duration: .5,
    ease: "power",
}, '=').to('#h1b', {
    duration: .5,
    text: "jxnesforge",
    delay: 1
}, '<.3').from('.welcome > img', {
    x: "-20%",
    opacity: 0,
    duration: .5,
    ease: "power",
}, '=')

let tl3 = gsap.timeline({
    scrollTrigger: '.three',
    delay: 1.5,
});


let tl35 = gsap.timeline({
    scrollTrigger: '.three',
    delay: .5,
});

tl3.from('.controls', {
    opacity: 0,
    duration: .25,
    y: 50,
});
tl35.to('.img-grid img', {
    opacity: 1,
    duration: 1.5,
    stagger: 1 / 8
});


let tl4 = gsap.timeline({
    scrollTrigger: '.four',
    delay: 0,
});

tl4.from('.xpillar', {
    duration: 1.5,
    // fontFamily: "Inconsolata",
    text: "",
    stagger: .5
});

let tl5 = gsap.timeline({
    scrollTrigger: '.five',
    delay: .75,
});

// tl5.fromTo('.forge-blueprint', {
//     opacity: 0,
// }, {
//     delay: .5,
//     duration: .5,
//     opacity: 1,
// })


