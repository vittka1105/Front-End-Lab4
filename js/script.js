let educationElement = document.getElementById('education');
let hobbyElement = document.querySelector('.hobby')
let clickedOnce = false;

educationElement.addEventListener('click', function () {
    if (!clickedOnce) {
        educationElement.classList.add('click-once');
        educationElement.classList.remove('click-double')
    } else {
        educationElement.classList.add('click-double');
    }

    clickedOnce = !clickedOnce;
});

hobbyElement.addEventListener('click', function () {
    if (!clickedOnce) {
        hobbyElement.classList.add('click-once')
        hobbyElement.classList.remove('click-double')
    } else {
        hobbyElement.classList.add('click-double')
    }
    clickedOnce = !clickedOnce;
});

function addImage() {
    let newImage = document.createElement('img');
    newImage.src = './img/Одеса.jpg';
    newImage.alt = 'місто Одеса';
    newImage.id = 'myImage';
    document.body.appendChild(newImage);
}

function zoomIn() {
    let image = document.getElementById('myImage');
    if (image) {
        let currentWidth = image.width;
        image.style.width = currentWidth * 1.2 + 'px'; // Збільшення розміру на 20%
    }
}

function zoomOut() {
    let image = document.getElementById('myImage');
    if (image) {
        let currentWidth = image.width;
        image.style.width = currentWidth * 0.8 + 'px'; // Зменшення розміру на 20%
    }
}

function removeImage() {
    let image = document.getElementById('myImage');
    if (image) {
        image.remove();
    }
}
