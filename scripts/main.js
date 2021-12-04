let myImage = document.querySelector('img');
let degrees = 0;

myImage.onclick = function() {
    if(degrees === 270) {
        degrees = 0;
    } else {
        degrees += 90;
    }

    const srcPrefix = 'images/gas-meter'
    const srcFileType = '.jpg'

    myImage.setAttribute('src', srcPrefix + '-' + degrees.toString() + srcFileType);
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}