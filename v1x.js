gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

const pillar = document.querySelectorAll('.pillar');

for (let index = 0; index < pillar.length; index++) {
    pillar[index].addEventListener('mouseover', () => {
        pillar[index].style.opacity = '1';
        pillar[index].style.scale = '1.1';
        pillar[index].style.marginBottom = '1rem';
        pillar[index].style.marginTop = '1rem';
    });

    pillar[index].addEventListener('mouseout', () => {

        pillar[index].style.opacity = '0.5';
        pillar[index].style.scale = '1';
        pillar[index].style.marginBottom = '';
        pillar[index].style.marginTop = '';
    });
}

// ---------------------------
var buttons = document.getElementsByTagName('button');
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener('click', function () {
        if(document.querySelector('.button-active')){
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

// const gd = document.getElementById('.card');
// const lh1 = document.getElementById("lh1")

// for (let index = 0; index < cards.length; index++) {
//     cards[index].addEventListener('click', () => {
//         if (lh1.style.position == 'relative') {
//             lh1.style.position = 'absolute';
//         }
//         else {
//             lh1.style.position = 'relative'
//         }
//     });
// }



// const root = document.getElementById('pc');

// document.addEventListener('mousemove', (event) => {
//   // calculate transformation values
//   const smoothMove = 0.05;
//   const rotateX = (event.clientY - window.innerHeight / 2) * smoothMove;
//   const rotateY = (event.clientX - window.innerWidth / 2) * -smoothMove / 2;

//   // set CSS variables
//   root.style.setProperty('--rotate-x', `${rotateX}deg`);
//   root.style.setProperty('--rotate-y', `${rotateY}deg`);
// });

function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

let lastCard = ' ';
let lh1 = document.getElementById("lh1");
let stage = document.getElementById("stage");
let x = document.getElementsByClassName('card-details-box');

let tween1 = gsap.timeline();

tween1.to('.card', {
    x: 0,
    duration: .3
}).to('#card-1', {
    x: 0,
    // y: -50,
    duration: .1
}).to('#card-3', {
    x: 0,
    // y: 50,
    duration: .1
});
tween1.pause();

function openTab(tabName, displayType = 'visible', thissound = "ui-click") {
    PlaySound(thissound);
    const x = document.getElementsByClassName('armoury-details');
    const y = document.getElementsByClassName('blueprint');

    for (let i = 0; i < x.length; i++) {
        x[i].style.visibility = "hidden";
        y[i].style.visibility = "hidden";
    }
    
    document.getElementById(tabName).style.visibility = displayType;
    document.getElementById(tabName + '-bp').style.visibility = displayType;
}

// function openTab(tabName, displayType = 'visible', thissound = "soft-click") {
//     PlaySound(thissound);
//     // return
//     if (lastCard != ' ') {
//         gsap.to('#' + lastCard, {
//             // y: -100,
//             x: 0,
//             opacity: 0,
//             duration: .5
//         });
//         // card reverse
//         if (tabName == lastCard) {
//             tween1.reverse();
//             lastCard = ' ';
//             return;
//         }
//     }
//     // entry
//     gsap.to('#' + tabName, {
//         // y: -100,
//         x: 0,
//         opacity: 1,
//         duration: .5
//     });
//     tween1.play();
//     lastCard = String(tabName);
// }


