//onload, sets all links on every page to open in a new tab unless part of the nav
window.onload = function(){
   var allAnchors = document.getElementsByTagName('a');

   for (var i = 0; i < allAnchors.length; i++) {

      if (!((allAnchors[i].classList.contains('navlink')) || (allAnchors[i].classList.contains('mobile-navlink')))) {
         allAnchors[i].setAttribute('target', '_blank');
      }
   }
}

// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight();

// $(window).scroll(function(event) {
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();

//     if (Math.abs(lastScrollTop - st) <= delta) {
//         return;
//     }

//     if (st > lastScrollTop && st > navbarHeight) {
//         $('header').removeClass('nav-down').addClass('nav-up');
//     }  else {
//         if (st + $(window).height() < $(document).height()) {
//             $('header').removeClass('nav-up').addClass('nav-down');
//         }
//     }
    
//    lastScrollTop = st;
// }