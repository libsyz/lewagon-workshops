// Make sure Javascript file is linked

console.log("This file is connected");

// Selected Elements //

const navButton = document.querySelector('.navbar-button');
const callToAction = document.querySelector('.caption-cta');

const chatboxButton = document.querySelector('.chatbutton');
const chatbox = document.querySelector('.chatbox');

// Event Listeners //

navButton.addEventListener('mouseover', highlightButton);
navButton.addEventListener('mouseout', unHighlightButton);

callToAction.addEventListener('mouseover', highlightButton);
callToAction.addEventListener('mouseout', unHighlightButton);

chatboxButton.addEventListener('click', showChatbox);

// Functions - Do cool stuff //

function highlightButton() {
  navButton.classList.add('highlighted');
}

function unHighlightButton() {
  navButton.classList.remove('highlighted');
}


function showChatbox() {
  chatbox.classList.toggle('show');
};
