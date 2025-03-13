gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

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
