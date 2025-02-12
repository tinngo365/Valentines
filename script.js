const yesCheckbox = document.getElementById('yesCheckbox');
const noCheckbox = document.getElementById('noCheckbox');
const noSpan = document.querySelector('#noCheckbox + span'); // Target the span directly
const backgroundImage = document.querySelector('.background-image');

// Function to move the "No" checkbox to a random position
function moveNoCheckbox() {
    const maxX = window.innerWidth - noSpan.offsetWidth; // Use noSpan's width
    const maxY = (window.innerHeight - noSpan.offsetHeight) / 2;

    const randomX = Math.max(0, Math.floor(Math.random() * maxX));
    const randomY = Math.max(0, Math.floor(Math.random() * maxY));

    noSpan.style.position = 'absolute'; // Ensure absolute positioning
    noSpan.style.top = `${randomY}px`;
    noSpan.style.left = `${randomX}px`;

    console.log("moveNoCheckbox function called!"); // **ADD THIS LINE FOR DEBUGGING**
}

// Event listener for hovering over the "No" checkbox's SPAN
noSpan.addEventListener('mouseover', moveNoCheckbox); // Listen on the span

// Event listener for hovering over the "Yes" checkbox
yesCheckbox.addEventListener('mouseover', () => {
    yesCheckbox.checked = true; // Check the box on hover
});

// Event listener for clicking the "Yes" checkbox
yesCheckbox.addEventListener('click', () => {
    // Change the background image
    backgroundImage.style.backgroundImage = "url('Valentine_CardYes.jpg')"; // New image URL - REPLACE THIS
});

// Initial positioning (optional)
moveNoCheckbox();