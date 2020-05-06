/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var navigation;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
navigation = document.querySelector('#navbar__list'); // Select navigation <ul> tag
var section = document.querySelectorAll('h2')
for(var i = 0; i < section.length; i++) {
    var item = document.createElement('li'); // Create <li> tag for list
    item.textContent = section[i].textContent;
    var link = document.createElement('a')
    link.href = '#section' + (i + 1);
    link.appendChild(item)
    navigation.appendChild(link);
}
var nav = document.querySelectorAll("section");
for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("wheel", function() {
      nav[i].classList.add("your-active-class");
    });
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

