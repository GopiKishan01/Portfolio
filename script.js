const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const highlight = document.querySelector('.highlight'); 
const about = document.querySelector('.intro');

let Name = "Gopi Kishan Arya";
let n = Name.length;
let isDel = true;

function animateName() {
  highlight.textContent = Name.substring(0, n);

  if (isDel) {
    n--;
    if (n < 0) {
      isDel = false;
    }
  } else {
    n++;
    if (n > Name.length) {
      isDel = true;
    }
  }

  setTimeout(animateName,isDel? 50 : 90);
}

animateName();

let statement ="I'm a B.Tech student passionate about Frontend Web Development. I love building projects, solving problems with code, and continuously learning new technologies.";
let len = 0;

function animateAbout(){
  about.textContent = statement.substring(0,len);
  len++;
  if(len <= statement.length) setTimeout(animateAbout, 30);
  else{
    setTimeout(() => {
      about.textContent = "";
      len = 0;
      animateAbout();
    }, 1000);
  }
}

animateAbout();

// ✅ Hamburger menu code
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});

document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
