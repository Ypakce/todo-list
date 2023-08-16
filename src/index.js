const addProjectButton = document.querySelector(".add-project-button");
const projectContainer = document.querySelector(".project-container");
const projectPopup = document.querySelector(".add-project-popup");
const projectPopupInput = document.querySelector(".add-project-popup-input");
const projectAddButton = document.querySelector(".button-add-project-popup");
const projectCancelButton = document.querySelector(".button-cancel-project-popup");

let projectList = [];

class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
}

function addProjectToList(name){
    const project = new Project(name);
    projectList.push(project);
    
}

function displayProjects(){
    while(projectContainer.firstChild){
        projectContainer.removeChild(projectContainer.firstChild);
    }

    for(let project of projectList){
        createProject(project);
    }
}

function createProject(project){
    const project_item = document.createElement("button");
    const project_name = document.createElement("div");
    const remove = document.createElement("div");

    project_item.classList.add("project-item");
    project_name.classList.add("project-name");
    remove.classList.add("project-cancel");

    project_item.textContent = `${project.name}`;
    remove.textContent = "X";

    project_item.appendChild(project_name);
    project_item.appendChild(remove);
    projectContainer.appendChild(project_item);

    remove.addEventListener("click", () => {
        projectList.splice(projectList.indexOf(project), 1);
        displayProjects();
    });
}

addProjectButton.addEventListener("click", () => {
    addProjectButton.style.display = "none";
    projectPopup.style.display = "block";
});

projectCancelButton.addEventListener("click", () => {
    projectPopupInput.value = "";
    projectPopup.style.display = "none";
    addProjectButton.style.display = "block";
});

projectAddButton.addEventListener("click", () => {
    const name = projectPopupInput.value;
    if(name == ""){

    }
    else{
        addProjectToList(name);
        displayProjects();
        projectPopupInput.value = "";
        projectPopup.style.display = "none";
        addProjectButton.style.display = "block";
    }
});