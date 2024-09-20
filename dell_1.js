fetch('dell_1.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        appendData(data);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'Name: ' + data[i].Name + ' <br/>' + 'Display: ' + data[i].Display + '<br/>' + 'Graphics: ' + data[i].Graphics + ' <br/>' + 'RAM: ' + data[i].RAM + ' <br/>' + 'SSD: ' + data[i].SSD + ' <br/>' + 'Ports: ' + data[i].Ports + ' <br/>' + 'Audio: ' + data[i].Audio + ' <br/>' + 'Keyboard: ' + data[i].Keyboard + ' <br/>' + 'Touchpad: ' + data[i].Touchpad + ' <br/>' + 'Communication: ' + data[i].Communication + ' <br/>' + 'Dimension: ' + data[i].Dimension + ' <br/>' + 'Weight: ' + data[i].Weight + ' <br/>' + 'Powersupply: ' + data[i].Powersupply + ' <br/>' + 'Battery: ' + data[i].Battery + ' <br/>' + 'Price: ' + data[i].Price;

        mainContainer.appendChild(div);
    }
}
//for the slider
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
    nextImage('next');
})

next.addEventListener('click', () => {
    nextImage('prev');
})

function nextImage(direction) {
    if (direction == 'next') {
        index++;
        if (index == totalImages) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalImages - 1;
        } else {
            index--;
        }
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('main');
    }
    images[index].classList.add('main');
}