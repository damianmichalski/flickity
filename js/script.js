// external js: flickity.pkgd.js

var carousel = document.querySelector('.carousel');
var flkty = new Flickity( carousel, {
    initialIndex: 1,
    pageDots: false,
    hash: true,
    cellAlign: 'left'
});

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
    // filter for button clicks
    if ( !matchesSelector( event.target, '.button' ) ) {
        return;
    }
    var index = buttons.indexOf( event.target );
    flkty.select( index );
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
});


