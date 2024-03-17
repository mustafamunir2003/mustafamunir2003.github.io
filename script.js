// Custom JavaScript code

$(document).ready(function() {
    // Smooth scrolling for navbar links
    $('.navbar-nav .nav-link').click(function() {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);
        return false;
    });

    // Submit contact form
    $('form').submit(function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted successfully!');
    });

    function toggleTheme() {
        // Check if dark mode is enabled
        if ($('body').hasClass('dark-mode')) {
            // Switch to light mode
            $('body').removeClass('dark-mode');
            $('#darkModeToggle').text('Dark Mode'); // Update button text
            $('#themeStylesheet').attr('href', 'light-mode.css'); // Switch to light mode stylesheet
            localStorage.setItem('theme', 'light'); // Store theme preference in localStorage
        } else {
            // Switch to dark mode
            $('body').addClass('dark-mode');
            $('#darkModeToggle').text('Light Mode'); // Update button text
            $('#themeStylesheet').attr('href', 'dark-mode.css'); // Switch to dark mode stylesheet
            localStorage.setItem('theme', 'dark'); // Store theme preference in localStorage
        }
    }

    // Check theme preference in localStorage on page load
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        // If dark mode is preferred, switch to dark mode
        toggleTheme();
    }

    // Toggle theme when the button is clicked
    $('#darkModeToggle').click(function() {
        toggleTheme();
    });
 
});
function flipProfile() {
    var profile = document.getElementById('profile');
    profile.classList.toggle('flip');
} 