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




// Add class 'active' to section when near top of viewport
var section = document.querySelectorAll("section");
var activeSection = document.getElementById

for (let i = 0; i < section.length; i++) {
  section[i].addEventListener("wheel", function() {
    section[i].classList.add("your-active-class");
    if(section[i].previousElementSibling.classList.contains('your-active-class'))
      section[i].previousElementSibling.classList.remove("your-active-class")
    if(section[i].nextElementSibling != null && section[i].nextElementSibling.classList.contains('your-active-class'))
      section[i].nextElementSibling.classList.remove("your-active-class")

  });
}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

