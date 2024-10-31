// Dark/Light mode toggle functionality using the slider
document.getElementById('mode-toggle-slider').addEventListener('click', function () {
    // Toggle the 'dark-mode' class on the .websiteBody element
    document.querySelector('.websiteBody').classList.toggle('dark-mode');
    
    // Store the user's preference in localStorage
    if (document.querySelector('.websiteBody').classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// On page load, check if the user has a saved preference
window.addEventListener('load', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.querySelector('.websiteBody').classList.add('dark-mode');
    }
});
