document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('#nav a');

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove the 'active-link' class from all links
            links.forEach(function (otherLink) {
                otherLink.classList.remove('active-link');
            });

            // Add the 'active-link' class to the clicked link
            link.classList.add('active-link');
        });
    });
});
