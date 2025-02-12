gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".container"
});


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
}, '<1.5').from('.sq1', {
    stagger: 1,
    opacity: 0,
    duration: .5
}, "<1.3")




let tl2 = gsap.timeline({
    scrollTrigger: '.two',
    delay: .5
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
}, '<.3')