/* The Anakin Dynasty - Portal & Landing Template
   Author: The Anakin Dynasty
   Version: 1.0.0
   File Description: Main JS file of the template
*/

//  Window scroll sticky class add

function windowScroll() {
    const navbar = document.getElementById("navbar-example");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})