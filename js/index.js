const currentDate = new Date();
const thisYear = currentDate.getFullYear();

const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<small>Helen Abera &copy; ${thisYear}</small>`;

footer.appendChild(copyright);
document.body.appendChild(footer);

let skills = ["Project Management", "Health Care Admin", "JavaScript", "CSS", "HTML"];
let skillsSection = document.getElementById("mySkills");
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);

for (let skill of skills) {
    const skillItem = document.createElement("li");
    skillItem.innerText = skill;
    skillsList.appendChild(skillItem);
}; 


let messageForm = document.querySelector("[name='leave_message]"); 
let messageSection = document.getElementById("messages"); 
let messageList = messageSection.querySelector("ul")
messageSection.hidden = true; 

let idCounter = 0;

function makeId() {
    let id = "entry" + idCounter++;
    return id; 
}

let entryById={}; 

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = event.target.usersName.value; 
    let email = event.target.usersEmail.value; 
    let message = event.target.usersMessage.value; 

    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);
    let uid = makeId();
    let newMessage = document.createElement("li");
    newMessage.classList.add("message-item"); 

    newMessage.innerHTML = `<a href="mailto:${email} ">${name}  </a><span>wrote: ${message}</span> `
    newMessage.setAttribute("id", uid); 

    entryById[uid] = {usersName: name, usersEmail: email, usersMessage: message}; 
    newMessage.appendChild(makeEditButton());
    newMessage.appendChild(makeRemoveButton()); 

    messageList.appendChild(newMessage);
    messageForm.requestFullscreen();
    messageSection.hidden = false; 


}); 
/*

// DOM Selection
const messageForm = document.forms["leave_message"];

// Event listener to handle form submission
messageForm.addEventListener("submit", function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Retrieve form field values
    const usersName = messageForm.elements["usersName"].value;
    const usersEmail = messageForm.elements["usersEmail"].value;
    const usersMessage = messageForm.elements["usersMessage"].value;

    // Log form field values
    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);

    // Clear the form
    messageForm.reset();

    // Display messages in list
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>${usersMessage}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});


messageForm.addEventListener("submit", function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Retrieve form field values
    const usersName = messageForm.elements["usersName"].value;
    const usersEmail = messageForm.elements["usersEmail"].value;
    const usersMessage = messageForm.elements["usersMessage"].value;

    // Display messages in list
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    // Create a new list item for the message
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>${usersMessage}</span>
    `;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    // Add event listener to remove button
    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode; // Find the parent element of the button
        entry.remove(); // Remove the entire message entry
    });

    // Append remove button to the new message
    newMessage.appendChild(removeButton);

    // Append new message to the message list
    messageList.appendChild(newMessage);

    // Clear the form
    messageForm.reset();
});





/* const currentDate = new Date();
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