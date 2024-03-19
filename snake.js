let snake_lis = document.querySelectorAll(".snake-menu li");

function removeActive(elements) {
    elements.forEach(e => {
        // Add event listener to each li element
        e.addEventListener("click", e => {
            // Remove active class from all li elements
            elements.forEach(element => {
                element.classList.remove("active");
            });

            // Add active class to the clicked li element
            e.target.classList.add("active");
        });

        // Prevent the click event from bubbling up when clicking on <a> elements
        let links = e.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', e => {
                e.stopPropagation(); // Stop event propagation
            });
        });
    });
}

removeActive(snake_lis);
