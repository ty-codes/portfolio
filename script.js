
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


document.querySelector('#contact-form').addEventListener('submit', (e) => {
	e.preventDefault();
	e.target.elements.name.value = '';
	e.target.elements.email.value = '';
	e.target.elements.message.value = '';
});

