const yesCheckbox = document.getElementById('yesCheckbox');
const noCheckbox = document.getElementById('noCheckbox');
const backgroundImage = document.querySelector('.background-image');

// Function to move the "No" checkbox to a random position
function moveNoCheckbox() {
    const maxX = window.innerWidth - noCheckbox.offsetWidth - 80; // substract no span width
    const maxY = (window.innerHeight - noCheckbox.offsetHeight) / 2;

    const randomX = Math.max(0, Math.floor(Math.random() * maxX)); // Ensure not negative
    const randomY = Math.max(0, Math.floor(Math.random() * maxY));
    
    const noSpan = document.querySelector('#noCheckbox + span');
    noSpan.style.position = 'absolute';
    noSpan.style.top = `${randomY}px`;
    noSpan.style.left = `${randomX}px`;
}

// Event listener for hovering over the "No" checkbox
noCheckbox.addEventListener('mouseover', moveNoCheckbox);

// Event listener for hovering over the "Yes" checkbox
yesCheckbox.addEventListener('mouseover', () => {
    yesCheckbox.checked = true; // Check the box on hover
});

// Event listener for clicking the "Yes" checkbox
yesCheckbox.addEventListener('click', () => {
    // Change the background image
    backgroundImage.style.backgroundImage = "url('https://via.placeholder.com/1920x1080/00FF00')"; // New image URL - REPLACE THIS
});

// Initial positioning of the No checkbox (optional, if you want it random from the start)
moveNoCheckbox();