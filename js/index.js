const currentDate = new Date();
const thisYear = currentDate.getFullYear(); 

const footer = document.createElement("footer");
const copyright = document.createElement("p"); 
copyright.innnerHTML = `<small>Helen Abera &copy; ${thisYear}</small>`;

footer.appendChild(copyright);
document.body.appendChild(footer); 

let skills = ["Project Management", "Health Care Admin", "JavaScript", "CSS", "HTML"];
let skillsSection = document.getElementById("skills"); 
let skillsList = document.createElement("ul"); 
skillsSection.appendChild(skillsOrder); 

for (let skill of skills) {
    const skillItem = document.createElement("li");
    skill.innerText = skillItem;
    skillsListappendChild(skill); 
}