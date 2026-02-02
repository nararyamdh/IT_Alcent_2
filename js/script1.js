// Function to hide the loading screen and show the content
function hideLoader() {
    // Get the loading div and the content div
    const loadingScreen = document.getElementById('loader');
    const content = document.querySelector('.body');

    // Hide the loading screen
    loadingScreen.style.display = 'none';

    content.style.display = 'block'; 
}

window.addEventListener('load', hideLoader);
