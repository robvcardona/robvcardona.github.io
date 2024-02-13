// Projcets titles
let projectTitle1 = document.getElementById('project-title1');
let projectTitle2 = document.getElementById('project-title2');
let projectTitle3 = document.getElementById('project-title3');


// Projects infos
let projectInfo1 = document.getElementById('project-info1');
let projectInfo2 = document.getElementById('project-info2');
let projectInfo3 = document.getElementById('project-info3');

// Hide projects info
projectInfo1.style.display = "none";
projectInfo2.style.display = "none";
projectInfo3.style.display = "none";


projectTitle1.onclick = function() {
        if (projectInfo1.style.display === "none") {
                projectInfo1.style.display = "block";
        } else {
                projectInfo1.style.display = "none";
        }
};

projectTitle2.onclick = function() {
        if (projectInfo2.style.display === "none") {
                projectInfo2.style.display = "block";
        } else {
                projectInfo2.style.display = "none";
        }
};

projectTitle3.onclick = function() {
        if (projectInfo3.style.display === "none") {
                projectInfo3.style.display = "block";
        } else {
                projectInfo3.style.display = "none";
        }
};

