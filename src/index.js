import {loadTitle, loadParagraph} from './pageLoad.js';
import {main} from "./mainContent.js";
import {about} from "./aboutContent";

let contentDiv = document.getElementById("content");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        buttons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");
    })
})

let addTextToContent = (button, title, paragraph) => {
    button.addEventListener("click", () => {
        contentDiv.innerHTML = "";
    
        contentDiv.appendChild(loadTitle(title));
        contentDiv.appendChild(loadParagraph(paragraph));
    })
}

addTextToContent(buttons[0], main.title, main.paragraph);
addTextToContent(buttons[1], about.title, about.paragraph);
buttons[0].click();