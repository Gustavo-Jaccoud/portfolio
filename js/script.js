let currentIndex = 0;
const projects = document.querySelectorAll('.project');
const totalProjects = projects.length;

const showProject = (index) => {
    projects.forEach((project, i) => {
        project.classList.remove('active');
        if (i === index) {
            project.classList.add('active');
        }
    });
};

const goToNextProject = () => {
    currentIndex = (currentIndex + 1) % totalProjects;
    showProject(currentIndex);
};

const goToPreviousProject = () => {
    currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
    showProject(currentIndex);
};

document.querySelector('.passar').addEventListener('click', goToNextProject);
document.querySelector('.voltar').addEventListener('click', goToPreviousProject);

showProject(currentIndex);