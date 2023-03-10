///////////////////////////////////////
// Sticky navigation: Intersection Observer API
// Udemy: The Complete JavaScript Course 2023: From Zero to Expert
// Code By: Jonas Schmedtmann
// Section 13, Video 197, "A Better Way: The Intersection Observer API"

// What it does: allows our code to observe changes to the way that a certain target element intersects another element OR the way it intersects the viewport

// The goal for this use case: As soon as the header is completely out of view, stick the navigation bar to the top of the screen so the user can select links without having to scroll back up to the top

// Step 1: Select the target element that you base the action on. In this case, we want to perform an action on our nav bar AFTER the header meets a certain condition. Header is the target.
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;

// Step 2: Create the callback function that contains the actions you are wainting to perform when the conditions are met. Parameters: (entries, observer) Observer is optional. You can create the function and define it after you set up the observer if you want
const stickyNav = function (entries) {
  const [entry] = entries; // Gets the first entry of entries
  if (entry.isIntersecting === false) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

// Step 3: Create the observer. It requires a callback function and options. The Callback function will be called each time the observed element is intersecting the root elemnent at the defined threshold. The options set the conditions and is an object.
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // The element the target is intersecting. Entire viewport if null
  threadhold: 0, // The % of intersection at which the observer will be called. 0 = when target element completely out of view, 0.2 = 20% out of/in view. Can be an array with multi thresholds
  rootMargin: `-${navHeight}px`, // Set rootMargin to the width of the nav bar for a cleaner effect
});

// Step 4: Set the observer to observe the target element
headerObserver.observe(header);
