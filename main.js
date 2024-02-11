// Projcets titles
let projectTitle1 = document.getElementById('project-title1');
let projectTitle2 = document.getElementById('project-title2');
let projectTitle3 = document.getElementById('project-title3');


// Projects infos
let projectInfo1 = document.getElementById('project-info1');
let projectInfo2 = document.getElementById('project-info2');
let projectInfo3 = document.getElementById('project-info3');

// Hide projects info
projectInfo1.hidden = true;
projectInfo2.hidden = true;
projectInfo3.hidden = true;


projectTitle1.onclick = function() {
        if (projectInfo1.hidden === true) {
                projectInfo1.hidden = false;
        } else {
                projectInfo1.hidden = true;
        }
};

projectTitle2.onclick = function() {
        if (projectInfo2.hidden === true) {
                projectInfo2.hidden = false;
        } else {
                projectInfo2.hidden = true;
        }
};

projectTitle3.onclick = function() {
        if (projectInfo3.hidden === true) {
                projectInfo3.hidden = false;
        } else {
                projectInfo3.hidden = true;
        }
};

