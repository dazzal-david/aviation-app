document.addEventListener('DOMContentLoaded', function () {
    // Get the necessary elements
    const homeLink = document.getElementById('homeLink');
    const dropdownContent = document.getElementById('dropdownContent');

    // Add a click event listener to the home link
    homeLink.addEventListener('click', function () {
        // Toggle the 'hidden' class on the dropdown content
        dropdownContent.classList.toggle('hidden');
    });

    // Add a click event listener to close the dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!homeLink.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.add('hidden');
        }
    });
});
