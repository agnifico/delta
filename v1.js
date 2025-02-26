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

tl5.fromTo('.stage', {
    duration: .5,
    opacity: 0,
    y: -100
}, {
    duration: .2,
    opacity: 1,
    // x: 350,
    y: 0
})

//
let tl12= gsap.timeline({
    scrollTrigger: '.one',
    start: '50% top',
    end: 'bottom top',
    delay: 0,
    // toggleActions: "play reverse restart reverse",
});
tl12.to('#sh1', {
    text: "",
    duration: .5
})
let tl22= gsap.timeline({
    scrollTrigger: '.two',
    start: 'top top',
    end: 'bottom top',
    delay: 0,
    // toggleActions: "play pause restart complete",
});
tl22.to('#sh1', {
    text: "",
    duration: .5
})
let tl32= gsap.timeline({
    scrollTrigger: '.three',
    start: '50% top',
    end: 'bottom top',
    delay: 0,
    // toggleActions: "play pause restart complete",
});
tl32.to('#sh1', {
    text: "Gallery",
    duration: .5
})
let tl42= gsap.timeline({
    scrollTrigger: '.four',
    start: '50% top',
    end: 'bottom top',
    delay: 0,
    toggleActions: "play reverse restart reverse",
});
tl42.to('#sh1', {
    text: "",
    duration: .5
})
let tl52= gsap.timeline({
    scrollTrigger: '.five',
    delay: .5,
    stagger: 1
    // toggleActions: "play reverse restart reverse",
});
tl52.fromTo('#armoury',{
    text: " ",
    borderWidth: 0,
}, {
    text: "Skillset // Armoury",
    borderWidth: 4,
    duration: .75,
}).to('#armoury',{
    borderImage: "linear-gradient(to right, #A19375 0%, #554C3A 100%) 0 0 1 0",
})

let tl62= gsap.timeline({
    scrollTrigger: '.six',
    start: '50% top',
    end: 'bottom top',
    delay: 0,
    toggleActions: "play reverse restart reverse",
});
tl62.to('#sh1', {
    text: "More About Me",
    duration: .5
})


