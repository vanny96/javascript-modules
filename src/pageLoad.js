const loadTitle = (title) => {
    let element = document.createElement("h1");

    element.innerHTML= title;
    return element;
}

const loadParagraph = (paragraph) => {
    let element = document.createElement("p");

    element.innerHTML= paragraph;
    return element;
}

export {loadTitle, loadParagraph};