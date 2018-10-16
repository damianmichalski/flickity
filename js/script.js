// external js: flickity.pkgd.js

var carousel = document.querySelector('.carousel');
var flkty = new Flickity(carousel, {
    initialIndex: 1,
    pageDots: false,
    hash: true,
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
