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
    x: -350,
    duration: .3
}).to('#card-1', {
    x: -500,
    // y: -50,
    duration: .1
}).to('#card-3', {
    x: -200,
    // y: 50,
    duration: .1
});
tween1.pause();

// function openTab(tabName, displayType = 'visible', thissound = "soft-click") {
//     PlaySound(thissound);

//     if (lh1.style.position == 'absolute') {
//         lh1.style.position = 'relative';
//         tween1.play();
//     }
//     else {
//         if (tabName == lastCard) {
//             lh1.style.position = 'absolute';
//             tween1.reverse();
//             return;
//         }
//     }
//     for (let i = 0; i < x.length; i++) {
//         x[i].style.visibility = "hidden";
//     }
//     document.getElementById(tabName).style.visibility = displayType;
//     lastCard = String(tabName); 
// }

function openTab(tabName, displayType = 'visible', thissound = "soft-click") {
    PlaySound(thissound);
    // exit
    if (lastCard != ' ') {
        gsap.to('#' + lastCard, {
            y: -100,
            x: 0,
            opacity: 0,
            duration: .5
        });
        // card reverse
        if (tabName == lastCard) {
            tween1.reverse();
            lastCard = ' ';
            return;
        }
    }
    // entry
    gsap.to('#' + tabName, {
        y: -100,
        x: 0,
        opacity: 1,
        duration: .5
    });
    tween1.play();
    lastCard = String(tabName);
}


