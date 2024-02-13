// Projcets titles
let projectTitles = document.querySelectorAll('.project-title');
let projectInfos = document.getElementsByClassName('project-info');

projectTitles.forEach((title, index) => {
    title.onclick = () => {
        // Toggle display for the corresponding project-info
        if (projectInfos[index].style.display === 'none' || projectInfos[index].style.display === '') {
            projectInfos[index].style.display = 'block';
        } else {
            projectInfos[index].style.display = 'none';
        }
    };
});