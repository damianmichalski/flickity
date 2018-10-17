// external js: flickity.pkgd.js+

var templateItem = document.getElementById('template-slider').innerHTML;
Mustache.parse(templateItem);
var listItems = '';

for(var i = 0; i < productsData.length; i++){
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

