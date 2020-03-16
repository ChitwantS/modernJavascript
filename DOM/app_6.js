// Removing and Replacing the Elements

// REPLACE ELEMENT
// Create a new element

const newHeading = document.createElement('h2');

// Add Class
newHeading.className = 'task-title';

// Add a text Node
const newHeadingText = document.createTextNode('New Tasks');
newHeading.appendChild(newHeadingText);

// Get the OLD Heading
const oldHeading = document.getElementById('task-title');

// Get the parent
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT


const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove from the Lis
lis[0].remove();

// Remove Child Element
list.removeChild(lis[3]);

