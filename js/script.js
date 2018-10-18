// external js: flickity.pkgd.js+

var templateItem = document.getElementById('template-slider').innerHTML;
Mustache.parse(templateItem);
var listItems = '';

for (var i = 0; i < productsData.length; i++) {
    console.log(productsData);
    listItems += Mustache.render(templateItem, productsData[i]);
}
results.insertAdjacentHTML('beforeend', listItems);

var carousel = document.querySelector('.carousel');
var flkty = new Flickity(carousel, {
    imagesLoaded: true,
    percentPosition: false,
    pageDots: false,
    hash: true,
    contain: true,
    cellAlign: 'left'
});

var buttons = document.querySelector(".button");
buttons.addEventListener('click', function (event) {
    flkty.selectCell(0);
});

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});

// Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
window.initMap = function () {

    // Zapisujemy w zmiennej obiekt zawierający współrzędne geograficzne.
    var uluru = {lat: 52.1535639, lng: 18.2019688};

    // W zmiennej map zapisujemy nową instancję obiektu Map.
    var map = new google.maps.Map(document.getElementById('map'), {
        // Podajemy opcje mapy, np. zoom i punkt wycentrowania mapy.
        zoom: 11,
        center: uluru
    });

    // Definiujemy marker jako nową instancję obiektu Marker.
    var marker = new google.maps.Marker({
        // I podajemy opcje tego markera, np. na której mapie ma być dodany oraz jakie są jego współrzędne.
        position: uluru,
        map: map
    });

    for (var i = 0; i < productsData.length; i++) {
        var marker = productsData[i].coords;
        var markerNew = new google.maps.Marker({
            position: new google.maps.LatLng(marker[0][0], marker[0][1]),
            map: map
        });
    }
}
initMap();