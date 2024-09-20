fetch('iphone11.json')
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
        div.innerHTML = 'Mobile name: ' + data[i].name + ' <br/>' + 'Technology: ' + data[i].Technology + '<br/>' + 'Announced: ' + data[i].Announced + ' <br/>' + 'Status: ' + data[i].Status + ' <br/>' + 'Dimensions: ' + data[i].Dimensions + ' <br/>' + 'Weight: ' + data[i].Weight + ' <br/>' + 'SIM: ' + data[i].SIM + ' <br/>' + 'Type: ' + data[i].Type + ' <br/>' + 'Size: ' + data[i].Size + ' <br/>' + 'Resolution: ' + data[i].Resolution + ' <br/>' + 'OS: ' + data[i].OS + ' <br/>' + 'Chipset: ' + data[i].Chipset + ' <br/>' + 'CPU: ' + data[i].CPU + ' <br/>' + 'GPU: ' + data[i].GPU + '<br>' + 'Card Slot: ' + data[i].Cardslot + ' <br/>' + 'Internal: ' + data[i].Internal + ' <br/>' + 'Quad: ' + data[i].Quad + ' <br/>' + 'Features: ' + data[i].Features + ' <br/>' + 'Videomain: ' + data[i].Videomain + ' <br/>' + 'Dual: ' + data[i].Dual + ' <br/>' + 'Loudspeaker: ' + data[i].Loudspeaker + ' <br/>' + 'WLAN: ' + data[i].WLAN + ' <br/>' + 'USB: ' + data[i].USB + ' <br/>' + 'Sensors: ' + data[i].Sensors + ' <br/>' + 'Charging: ' + data[i].Charging + ' <br/>' + 'Colors: ' + data[i].Colors + ' <br/>' + 'Models: ' + data[i].Models + ' <br/>' + 'Price: ' + data[i].Price + ' <br/>' + 'Display: ' + data[i].Display + ' <br/>' + 'Price: ' + data[i].Price;

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