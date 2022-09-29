import projects from './projects.json'assert {type: 'json'};

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

// project data
const projectNumber = projects.projects.length;
const projectList = document.getElementById('project_list')
for(let i=0; i<projectNumber; i++) {
    projectList.innerHTML = projectList.innerHTML + "<div class='project-tile'><span><img src=" + projects.projects[i].image+ " alt=" + projects.projects[i].name+ "></span>" +
    "<h2 class='title'><a target='_blank' href=" + projects.projects[i].link+ ">" + projects.projects[i].name+ "</a></h2>" +
    "<p class='stack'>" + projects.projects[i].stack+ "</p></div>"
}

