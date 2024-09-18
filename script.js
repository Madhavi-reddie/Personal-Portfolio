/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
  
    
  

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }



/* ----- TYPING EFFECT ----- */
 let typingEffect = new Typed(".typedText",{
    strings : [" Tech-Savvy Engineer"," Driven Researcher"," Dedicated Lerner"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})



/* -- PROJECT BOX -- */
sr.reveal('.project-card',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
sr.reveal('.side h2',{delay:200})
sr.reveal('.section-title',{delay:200})


/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.education-info',{delay:100})
srRight.reveal('.form-control',{delay: 100})
srRight.reveal('scroll-section',{delay:100})
srRight.reveal('.internship-container',{delay:100})
srRight.reveal('.certification-container',{delay:100})

/* -- certification  -- */
function togglePanel(id) {
  const panel = document.getElementById(id);
  const arrow = panel.previousElementSibling.querySelector('.arrow');

  if (panel.classList.contains('show')) {
    panel.classList.remove('show');
    arrow.classList.remove('rotate');
  } else {
    closeAllPanels();  // Optional: Close all other panels if you want only one open at a time
    panel.classList.add('show');
    arrow.classList.add('rotate');
  }
}

function closeAllPanels() {
  const allPanels = document.querySelectorAll('.accordion-content');
  const allArrows = document.querySelectorAll('.arrow');

  allPanels.forEach(panel => panel.classList.remove('show'));
  allArrows.forEach(arrow => arrow.classList.remove('rotate'));
}



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)