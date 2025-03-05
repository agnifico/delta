gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

var buttons = document.getElementsByTagName('button');
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener('mousedown', function () {
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


// --------------------------------------------
// --------------------------------------------
// --------------------------------------------


const $bigBall = document.querySelector('.cursor__ball--big');
    // const $smallBall = document.querySelector('.cursor__ball--small');
    const $hoverables = document.querySelectorAll('.hoverable');
    const $hoverables2 = document.querySelectorAll('.hoverable2');

    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    for (let i = 0; i < $hoverables.length; i++) {
      if ((window.opener && !window.opener.closed)) break;
      $hoverables[i].addEventListener('mouseenter', onMouseHover);
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }
    for (let i = 0; i < $hoverables2.length; i++) {
        if ((window.opener && !window.opener.closed)) break;
        $hoverables2[i].addEventListener('mouseenter', onMouseHover2);
        $hoverables2[i].addEventListener('mouseleave', onMouseHoverOut);
      }

    // Move the cursor
    // window.CP.exitedLoop(0);

    function onMouseMove(e) {
      gsap.to($bigBall, .2, {
        x: e.pageX - 10,
        y: e.pageY - 10
      });

      // TweenMax.to($smallBall, .1, {
      //   x: e.pageX - 5,
      //   y: e.pageY - 7 });

    }

    // Hover an element
    function onMouseHover() {
      gsap.to($bigBall, .3, {
        scale: 4
      });

    }
    function onMouseHover2() {
        gsap.to($bigBall, .3, {
          scale: 2
        });
  
      }
    function onMouseHoverOut() {
      gsap.to($bigBall, .3, {
        scale: 1
      });

    }
