Shery.imageEffect("#cert-div",{style: 5, config:
  {"a":{"value":2,"range":[0,30]},"b":{"value":0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.8043893186732483},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.23,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.42,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.31,"range":[0,2]},"noise_scale":{"value":9.92,"range":[0,100]}},
   gooey:true});
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}



document.addEventListener("DOMContentLoaded", function () {
  // Get all the navigation links
  const navLinks = document.querySelectorAll(".navbar a");

  // Smooth scrolling function for each navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const sectionId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(sectionId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          
        });
      }
    });
  });
});

const hoverElements = document.querySelectorAll(".hover-effect");
hoverElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("hovered");
  });
  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("hovered");
  });
});
// start of GSAP part

gsap.from("#home .home-image", {
  opacity: 0,
  duration: 0.4,
  duration: 1,
  y: 60,
});
gsap.from(".header .logo, .navbar", {
  opacity: 0,
  duration: 0.8,
  duration: 1,
  stagger: 0.3,
  y: -100,
});
gsap.from(
  "#home .homeContent h3, #home .homeContent p, #home .homeContent .social-media",
  {
    opacity: 0,
    duration: 0.4,
    stagger: 0.3,
    // duration: 1,
    x: -60,
  }
);
gsap.from("#about .about-img", {
  opacity: 0,
  duration: 1.1,
  scrollTrigger: {
    trigger: "#about .about-img",
    scroller: "body",
    start: "top 85%",
    // markers:true
    end: "top 50%",
    // stagger:0.4,
    // markers:true,
    scrub: 3,
  },
  y: 60,
});
gsap.from("#about .about-content h2", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    start: "top 85%",
    // markers:true
  },
  y: -60,
});
gsap.from(
  "#about .about-content, #about .about-content h2 span, #about .about-content h3, #about .about-content p",
  {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about .about-img",
      scroller: "body",
      start: "top 85%",
      end: "top 50%",
      // stagger:0.4,
      // markers:true,
      scrub: 3,
    },
    x: 60,
  }
);

gsap.from("#home .homeContent h1", {
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  // duration: 1,
  y: 50,
});

gsap.from("#projects h2", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#projects h2",
    scroller: "body",
    start: "top 85%",
    end: "top 50%",
    scrub: 3,
    // markers:true
  },
  y: -60,
});
gsap.from("#contacts h2", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#contacts h2",
    scroller: "body",
    start: "top 85%",
    end: "top 50%",
    scrub: 3,
    // markers:true
  },
  y: -60,
});

gsap.from("#projects .project-container .project-box", {
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#projects .project-container .project-box",
    scroller: "body",
    start: "top 85%",
    end: "top 50%",
    stagger: 0.5,
    scrub: 3,
    // markers:true
  },
  y: 100,
});

gsap.from("#contacts .text-input, #contacts .num-input", {
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#contacts h2",
    scroller: "body",
    start: "top 85%",
    end: "top 50%",
    stagger: 0.5,
    scrub: 3,
    // markers:true
  },
  x: -60,
});

gsap.from("#contacts .sub-input, #contacts .email-input", {
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#contacts h2",
    scroller: "body",
    start: "top 85%",
    end: "top 50%",
    stagger: 0.5,
    scrub: 3,
    // markers:true
  },
  x: 60,
});

gsap.from("#contacts textarea", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#contacts .input-box",
    scroller: "body",
    start: "top 85%",
    end: "top 50%",
    scrub: 3,
    // markers:true
  },
  y: 60,
});

//End of GSAP part
// typed js

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", " Freelancer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = (e.pageX+7) + "px";
  cursor.style.top = (e.pageY+7) + "px";
});

gsap.registerPlugin(ScrollTrigger);

const skills = gsap.utils.toArray(".progress");

skills.forEach((skill) => {
  const skillProgress = skill.querySelector(".skill-progress");
  const skillValue = skillProgress.getAttribute("data-skill");

  ScrollTrigger.create({
    trigger: skill,
    start: "top 80%",
    onEnter: () => {
      gsap.to(skillProgress, {
        width: skillValue,
        duration: 1,
        ease: "power2.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(skillProgress, {
        width: "0%",
        duration: 0.5,
        ease: "power2.out",
      });
    },
    // markers: true // for debugging, remove this in production
  });
});

gsap.from("#skills h2", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#skills h2",
    scroller: "body",
    start: "top 85%",
    end: "top 50%",
    scrub: 3,
    // markers:true
  },
  y: -60,
});

gsap.from("#skills .skill-box", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#skills h2",
    scroller: "body",
    start: "top 85%",
    end: "top 50%",
    scrub: 3,
    // markers:true
  },
  y: 80,
});


const themeToggle = document.getElementById('theme-toggle');
const toggleIcon = document.getElementById('toggle-icon');
const body = document.body;

let checked = false;

themeToggle.addEventListener('click', () => {
  checked = !checked; // Toggle between true and false on each click

  if (checked) {
    // toggleIcon.className = 'bx bxs-moon'; // Change to moon icon
    // toggleIcon.innerHTML = "❤️";
    body.classList.add('dark-mode'); 
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");// Apply dark mode
  } else {
    // toggleIcon.className = 'bx bx-sun'; // Change to sun icon
    body.classList.remove('dark-mode');
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x"); // Remove dark mode

  }

  themeToggle.classList.toggle('checked'); // Add or remove 'checked' class for animation
});


function toggleTheme() {
  var toggleButton = document.querySelector('.toggle-button');
  toggleButton.classList.toggle('night');
}

window.onscroll = () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};


const section = document.querySelector(".about-content"),
overlay = document.querySelector(".overlay"),
showBtn = document.querySelector(".show-modal"),
closeBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click", () => section.classList.add("active"));

overlay.addEventListener("click", () =>
section.classList.remove("active")
);

closeBtn.addEventListener("click", () =>
section.classList.remove("active")
);








