// Turning my HTML cube div into a JavaScript variable so I can work with it
const theCube = document.querySelector('.cube');
const htmlClasses = document.querySelector('.cube').classList;
console.log(htmlClasses);

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

theCube.addEventListener('click', toggleColour);