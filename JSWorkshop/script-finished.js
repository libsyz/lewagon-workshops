console.log('our JS file is connected');

// Selected Elements //

const trackButton = document.querySelector('.navbar-button');
const callToAction = document.querySelector('.caption-cta')

const chatButton = document.querySelector('.chatbutton');

const chatbox = document.querySelector('.chatbox');

const banner = document.querySelector('.banner');

const chatbuttonImage = document.querySelector('.chatbutton-img');

// Event Listeners //

trackButton.addEventListener('mouseover', buttonHighlight);
trackButton.addEventListener('mouseout', buttonRestore);

callToAction.addEventListener('mouseover', buttonHighlight);
callToAction.addEventListener('mouseout', buttonRestore);

chatButton.addEventListener('mouseover', buttonExpand);
chatButton.addEventListener('mouseout', buttonShrink);

chatButton.addEventListener('click', showChatbox);

banner.addEventListener('click', hideChatbox);

// Functions - Do cool stuff //

function buttonHighlight () {
  console.log('entering function');
  this.classList.add('highlighted');
}

function buttonRestore () {
  this.classList.remove('highlighted');
}

function buttonExpand () {
  this.classList.add('bigger');
}

function buttonShrink () {
  this.classList.remove('bigger');
}

function showChatbox(event) {
  if (event) {
    event.stopPropagation();
  }
  chatbox.classList.toggle('show');
}

function hideChatbox (event) {
  console.log(event);
  const classArray = Array.from(chatbox.classList)
    if (classArray.includes('show') == true && event.path.includes(chatbox) == false ) {
      chatbox.classList.remove('show');
    }
}


setTimeout( showChatbox, 10000);
