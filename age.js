let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

let today = new Date();

const myMonth = "February"
const myDay = 14
const myYear = 1998

const birthd = myYear + " " + myMonth + " " + myDay;

let birthday = new Date(birthd);

let diffAlive = today - birthday;

milliseconds = diffAlive % 1000;
diffAlive = (diffAlive - (milliseconds)) / 1000;

seconds = diffAlive % 60

diffAlive = (diffAlive - seconds) / 60;

minutes = diffAlive % 60
diffAlive = (diffAlive - minutes) / 60;

hours = diffAlive % 24
days = (diffAlive - hours) / 24;

let thisYear = today.getFullYear()
let myAge = thisYear - myYear;

let aliveFor = document.getElementById("age").innerHTML = "Age:" + " " + myAge + " " + "years, " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds old";

