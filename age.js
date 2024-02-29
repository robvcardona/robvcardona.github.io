// Set the birthdate
const myBirthdate = new Date("February 14, 1998");

// Function to update age
function updateAge() {
    // Get the current date and time
    const now = new Date();

    // Calculate the difference in milliseconds
    const ageInMilliseconds = now - myBirthdate;

    // Calculate years, months, days, hours, minutes, and seconds
    const years = now.getFullYear() - myBirthdate.getFullYear();
    const months = now.getMonth() - myBirthdate.getMonth();
    const days = now.getDate() - myBirthdate.getDate();
    const hours = now.getHours() - myBirthdate.getHours();
    const minutes = now.getMinutes() - myBirthdate.getMinutes();
    const seconds = Math.floor(ageInMilliseconds / 1000) % 60;

    // Display the age
    let ageOutput = `Age: ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    // Update the element with the calculated age
    let ageElement = document.getElementById("age");

    // Check if the element exists before updating its content
    if (ageElement) {
        ageElement.innerHTML = ageOutput;
    } else {
        console.error("Error: Element with id 'age' not found.");
    }
}

// Initial call to updateAge to display the age when the page loads
updateAge();

// Update the age every second
setInterval(updateAge, 1000);