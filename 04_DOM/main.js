// ------------ working with HTML document ------------

// ------- find elements
document.body; // body tag element
document.documentElement; // html tag element

const list = document.getElementById("main-list"); // by ID
console.log(list);

const mutedItems = document.getElementsByClassName("muted");
console.log("Muted items count:", mutedItems.length);

document.getElementsByTagName('h1');

console.log(document.querySelector('ul li.important')); // by CSS selector
console.log(document.querySelectorAll('ul li.muted')); // by CSS selector

// ------- node methods
console.log(`List info: ${list.id}, ${list.tagName}, ${list.className}`);

// get element content: textContent, innerHTML, outerHTML
console.log("List Text:", list.textContent);
console.log("List Inner HTML:", list.innerHTML);
console.log("List Outer HTML:", list.outerHTML);

// simple way to modify content
list.innerHTML += '<li class="muted" title="I am fine!!!">New List Item!</li>';

// -------- create elements dynamically
const newItem = document.createElement("li");
newItem.textContent = "Dynamically Item!";
// add CSS class
newItem.classList.add('important');
// add attributes
newItem.setAttribute('title', 'I am created in JS:)');
//  add to the DOM
list.append(newItem);

// ----------------- add elements to DOM 
// append(), prepend(), before(), after()
const p = document.createElement("p");
p.textContent = "Before text!";
list.before(p);

list.append("Append text!");
list.prepend("Prepend text!");
list.after("After text!");

// ----------------- get child nodes
console.log("List Child Nodes:", list.childNodes); // include elements, text nodes
console.log("List Children:", list.children); // include only elements
const fourthItem = list.children[3];

// ----------------- working with CSS classes
fourthItem.classList.remove('muted');
fourthItem.classList.add('important');

// add event handler
fourthItem.onclick = () => {
    fourthItem.classList.toggle('important');
}

// ----------------- working with attributes
if (!fourthItem.hasAttribute('title')) {
    fourthItem.setAttribute('title', 'click me');
}

console.log('Fourth item title:', fourthItem.getAttribute('title'));
//forthItem.removeAttribute('title');

// ----------------- get items by hierarchy
console.log("Next sibling:", fourthItem.nextSibling); // include elements and text nodes
console.log("Previous sibling:", fourthItem.previousSibling); // include elements and text nodes

console.log("Next sibling element:", fourthItem.nextElementSibling); // include elements only
console.log("Previous sibling element:", fourthItem.previousElementSibling); // include elements only

console.log('Parent item:', fourthItem.parentNode);
console.log('List First child element:', list.firstElementChild);
console.log('List Last child element:', list.lastElementChild);
