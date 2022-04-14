const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

//with this function, if you click on an h1 item, it sends the alert. 
document.querySelector('h1').addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
  });

//this is the same thing as the one above.
let myHTML = document.querySelector('li');
myHTML.addEventListener('click', function() {
    alert('I love these movies, fight me on them.')
});

//this also does the same thing
document.querySelector('img').addEventListener('click', () => {
    alert("hehe, it's a possum :)");
});