$(document).ready(function() {
    $('.cookie-popupMob').fadeIn();
});

document.onkeydown = function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
        return false;
    }
    if (e.keyCode == 123) {
        return false;
    }
};

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
