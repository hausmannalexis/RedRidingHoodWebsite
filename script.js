// Dark/Light mode toggle functionality using the slider
document.getElementById('mode-toggle-slider').addEventListener('click', function () {
    // Toggle the 'dark-mode' class on the <html> element
    document.documentElement.classList.toggle('dark-mode');
    
    // Store the user's preference in localStorage
    if (document.documentElement.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// On page load, check if the user has a saved preference
window.addEventListener('load', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
    }
});
