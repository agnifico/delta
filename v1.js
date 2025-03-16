gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".container",
});


function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}


var shutter_open = gsap.timeline()
    .to('#ts2', {
        left: '50%',
        borderWidth: 2,
        duration: .25
    })
    .to('#ts1', {
        right: '50%',
        borderWidth: 2,
        duration: .25
    }, '<.1')
    .to('#ts1', {
        right: '100%',
        borderWidth: 0,
        duration: .25
    }, '<0.4')
    .to('#ts2', {
        left: '100%',
        borderWidth: 0,
        duration: .25
    }, '<.1')

shutter_open.pause();


gsap.set('#trm-1', { text: "'graphic design'" });
gsap.set('#trm-0', { text: "'isometric'" });
function openTab(tabName, displayType = 'visible', thissound = "ui-click") {
    PlaySound(thissound);
    const x = document.getElementsByClassName('armoury-details');
    const z = document.getElementsByClassName('terminal-tags');
    shutter_open.restart();
    for (let i = 0; i < x.length; i++) {
        x[i].style.visibility = "hidden";
        z[i].style.visibility = "hidden";
    }
    var y = { 'cw': "'content writing'", 'gd': "'graphic design'", 'wd': "'web design'" };
    gsap.to('#trm-1', {
        text: y[tabName],
        duration: 0.5
    })

    document.getElementById(tabName).style.visibility = displayType;
    document.getElementById(tabName + '-tag-set').style.visibility = displayType;
}

function openTab2(tabName, displayType = 'visible', thissound = "ui-click") {
    PlaySound(thissound);
    const x = document.getElementsByClassName('img-grid');
    var y = {
        'img-grid-one': "'isometric'",
        'img-grid-two': "'forge blueprints'",
    };
    active_grid = y[tabName];
    gsap.to('#trm-0', {
        text: y[tabName],
        duration: 0.5
    })
    for (let i = 0; i < x.length; i++) {
        x[i].style.visibility = "hidden";
    }

    document.getElementById(tabName).style.visibility = displayType;
}


// ----------- Quote Timeline ------------------
let quote_timeline = gsap.timeline({
    scrollTrigger: '.quote-panel',
    delay: 0
});

quote_timeline.from('#q1a', {
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


// ----------- Logo Page Timeline ------------------

let logo_page_timeline = gsap.timeline({
    scrollTrigger: '.logo-panel',
    delay: .5,
    toggleActions: "restart pause restart pause",
});

logo_page_timeline.from('#h1a', {
    y: "20%",
    opacity: 0,
    duration: .5,
    ease: "power",
}, '=').from('#h1b', {
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
}, '=').from('.welcome > .common-text', {
    y: "-20%",
    opacity: 0,
    duration: .5,
    ease: "power",
}, '=')

// ----------- SKILLS Page Timeline ------------------


let tl6 = gsap.timeline({
    scrollTrigger:
    {
        trigger: '.skills-panel',
        // onEnter: ({progress, direction, isActive}) => console.log(progress, direction, "onEnter: " + String(isActive)),
        // onLeave: ({progress, direction, isActive}) => console.log(progress, direction, "onLeave: " + String(isActive)),
        // onEnterBack: ({progress, direction, isActive}) => console.log(progress, direction, "onEnterBack: " + String(isActive)),
        // onLeaveBack: ({progress, direction, isActive}) => console.log(progress, direction, "onLeaveBack: " + String(isActive)),
        toggleActions: "play none restart reverse"
    },
    delay: 0,

});

let tl61 = gsap.timeline({
    scrollTrigger:
    {
        trigger: '.skills-panel',
        toggleActions: "restart reverse none none"
    },
    delay: 0,
});

tl61.fromTo('#trm-0', {
    // position: "relative",
    opacity: 1
}, {
    // position: "absolute",
    opacity: 0,
    text: '',
    // duration: 0
}, '<0')

let terminal_enter = gsap.timeline({
    scrollTrigger:
    {
        trigger: '.skills-panel',
        toggleActions: "play none none reverse"
    },
    delay: 0,
});

// let magic0 = gsap.timeline({
//     scrollTrigger:
//     {
//         trigger: '.skills-panel',
//         toggleActions: "restart none restart none"
//     },
//     delay: 0,
// });

// magic0.to('#trm-0', {
//     text: '',
//     duration: 0
// })

terminal_enter.fromTo('.terminal', {
    // width: '0%',
    // pin: true,
    opacity: 0,
}, {
    // width: '100%',
    opacity: 1,
    duration: .15,
}, '<.3').to('#trm-4', {
    text: "armoury// skillset ",
}, '<0').to('#trm-5', {
    text: "--tags",
}, '<0')

let shutter = gsap.timeline({
    scrollTrigger:
    {
        trigger: '.skills-panel',
        toggleActions: "restart reverse restart reverse"
        // 
    },
    delay: .55
});

shutter.from('.terminal', {
    y: 100,
    duration: .2
}).to('.terminal-tags-container', {
    opacity: 1,
    duration: .1
}, '<').to('#ts1', {
    right: '100%',
    borderWidth: 0,
    duration: .2,
}, '<.2')
.to('#ts2', {
    left: '100%',
    borderWidth: 0,
    duration: .2,
}, '<0')

tl6.fromTo('#bt-1 > button', {
    y: -100,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    stagger: .05,
    duration: .30
}, '<.3').fromTo('.armoury-details', {
    y: 100,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: .30
}, '<.3')



// ------------------- GALLERY ----------------------------

let terminal_cmd = gsap.timeline({
    scrollTrigger:
    {
        trigger: '.gallery-panel',
        toggleActions: "restart none restart reverse"
    },
    delay: 1,

});

terminal_cmd.to('#trm-4', {
    text: 'showcase// portfolio',
}, '=').to('#trm-5', {
    text: '--gallery',
}, '<0')

let magic1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.gallery-panel',
        toggleActions: "restart none none reverse",
        // once: true
    },
});

// magic1.from('#trm-0', {
//     text:active_grid,
// })
magic1.fromTo('#trm-1', {
    // position: "relative",
    opacity: 1
}, {
    // position: "absolute",
    opacity: 0,
    text: '',
    // duration: 0
}, '<0')
.fromTo('#trm-0', {
    position: "absolute",
    opacity: 0
}, {
    position: "relative",
    opacity: 1,
    duration: 0
}, '<0');

let gallery_enter = gsap.timeline({
    scrollTrigger: {
        trigger: '.gallery-panel',
        toggleActions: "play none none reverse"
    },
    delay: 1,
});

gallery_enter.from('#bt-2', {
    opacity: 0,
    duration: .25,
    y: 50,
}).to('.img-grid img', {
    opacity: 1,
    duration: 1.5,
    stagger: 1 / 8
}, '=');


// ------------------------------ CONTACTS -------------------------------

let contacts1 = gsap.timeline({
    scrollTrigger:
    {
        trigger: '.contacts-panel',
        toggleActions: "restart none none reverse"
    },

});

contacts1.to('.terminal', {
    y: 250,
    duration: .4,
})

// -------------------------------------------------------------


var buttons = document.getElementsByTagName('button');
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener('mousedown', function () {
        if (document.querySelector('.button-active')) {
            console.log(document.querySelector('.button-active'))
            document.querySelector('.button-active').classList.remove('button-active');
        }
        gsap.fromTo('.forge-blueprint', {
            // duration: .2,
            opacity: 0,
            y: "-100%"
        }, {
            delay: .2,
            y: 0,
            duration: .3,
            opacity: 1,
        })
        btn.classList.add('button-active');
    })
}


