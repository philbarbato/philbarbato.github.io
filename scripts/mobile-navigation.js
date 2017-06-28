/* globals Modernizr: false */

// if screen is 'hand' size
if(Modernizr.mq('only all and (max-width: 61em)')){
  // establish variables
  var nav = document.querySelector('.nav-main'),
      navToggleButton = document.querySelector('.nav-main__toggle'),
      touchMoving = false;

  // keep track of when user is scrolling so we don't fire a toggle click.
  document.ontouchmove = function() {
    'use strict';

    touchMoving = true;
  };

  // need touchend too?


  //nav toggle function
  var navToggle = function(e){
    'use strict';

    nav.classList.toggle('nav-main--closed');
    nav.classList.toggle('nav-main--open');
    e.preventDefault();
    e.stopPropagation();
  };


  // show toggle and collapse menu
  nav.classList.add('nav-main--active');
  nav.classList.add('nav-main--closed');

  // add touch/click event for main navigation
  navToggleButton.addEventListener('touchstart', function(e){
    'use strict';

    navToggle(e);
  });

  navToggleButton.addEventListener('click', function(e){
    'use strict';

    navToggle(e);
  });

}
