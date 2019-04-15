// Turning my HTML cube div into a JavaScript variable so I can work with it
const theCube = document.querySelector('.cube');
const htmlClasses = document.querySelector('.cube').classList;

function toggleColour() {
    if (htmlClasses.contains("cubePrimaryColour")) {
        htmlClasses.remove('cubePrimaryColour');
        htmlClasses.add('cubeSecondaryColour');
    }
    else {
        htmlClasses.remove('cubeSecondaryColour');
        htmlClasses.add('cubePrimaryColour');
    }
};

document.addEventListener('scroll', toggleColour);