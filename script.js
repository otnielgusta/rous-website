$(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
})

//ANCHOR Mobile Menu

const menuButton = document.getElementById("mobile-menu");

menuButton.onclick = function() {menuFunction()};

var isMenuOpen = false;

function menuFunction() {
  let bodyDOM = document.getElementsByTagName("body")[0];
  let htmlDOM = document.getElementsByTagName("html")[0];
  let headerMenu = document.getElementById("header");
  let content = document.getElementById("menu-content");
  let imgBtn = document.getElementById("mobile-menu");

  if(isMenuOpen == false){
    bodyDOM.style.overflowY = 'hidden';
    htmlDOM.style.overflowY = 'hidden';

    headerMenu.style.display ='block';
    headerMenu.style.width ='100%';
    headerMenu.style.height ='100vh';

    content.style.display = 'flex';
    
    imgBtn.classList.remove('btnExitToMenu');
    imgBtn.classList.add('btnMenuToExit');

    // imgBtn.setAttribute('src','./assets/fechar-menu.png');

    isMenuOpen = true;
  }
  else {
    bodyDOM.style.overflowY = 'initial';
    htmlDOM.style.overflowY = 'initial';

    headerMenu.style.display ='flex';
    headerMenu.style.width ='initial';
    headerMenu.style.height ='initial';

    content.style.display = 'none';

    imgBtn.classList.remove('btnMenuToExit');
    imgBtn.classList.add('btnExitToMenu');
    

    // imgBtn.setAttribute('src','./assets/menu.png');

    isMenuOpen = false;
  }

}

function closeMenu(){
  let bodyDOM = document.getElementsByTagName("body")[0];
  let htmlDOM = document.getElementsByTagName("html")[0];
  let headerMenu = document.getElementById("header");
  let content = document.getElementById("menu-content");
  let imgBtn = document.getElementById("mobile-menu");

  if(document.documentElement.clientWidth <= 1024) {
    bodyDOM.style.overflowY = 'initial';
    htmlDOM.style.overflowY = 'initial';

    headerMenu.style.display ='flex';
    headerMenu.style.width ='initial';
    headerMenu.style.height ='initial';

    content.style.display = 'none';

    imgBtn.classList.remove('btnMenuToExit');
    imgBtn.classList.add('btnExitToMenu');
    
    isMenuOpen = false;
  }
}

// RESIZE FIX MENU

window.addEventListener("resize", fixResize);

function fixResize(){
  let w = document.documentElement.clientWidth;

  if (w >= 1024) {
    let content = document.getElementById("menu-content");
    let headerMenu = document.getElementById("header");

    content.removeAttribute('style');
    headerMenu.removeAttribute('style');
  }
}

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};