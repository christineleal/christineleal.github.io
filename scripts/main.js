// this function will change the first photo to the other when it's clicked and vice versa.
// also "let" basically establishes a variable.
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/scooter-possum.jpg') {
      myImage.setAttribute('src','images/possum2.jpg');
    } else {
      myImage.setAttribute('src','images/scooter-possum.jpg');
    }
}

// when an item with this attribute (h1) is selected it sends out that alert.
document.querySelector('h1').addEventListener('click', function() {
  alert('hur hur hur hur hur');
});

// sets the button and heading inside variables
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// this prompts the user to enter their name, local storage stores their name in the browser called 
// 'name'. then, it changes the heading to add their name to the end.
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'ever been to freddy fazbear\'s pizzaria , ' + myName + '?';
  }
}

// if the name data doesn't exist, the setUserName function runs to create it.
// if it does exist, then it retrieves it with getItem.
if(!localStorage.getItem('name')) {
  setUserName();  
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'possums are cool, ' + storedName;
}

//when the button is clicked, it runs the setUserName function.
myButton.onclick = function() {
  setUserName();
}