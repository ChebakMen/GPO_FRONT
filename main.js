//неготово к исполькованию

var dropZone = $('#input-file__block-cont');

dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
    return false;
});

dropZone.on('dragover dragenter', function() {
    dropZone.addClass('dragover');
});

dropZone.on('dragleave', function(e) {
    dropZone.removeClass('dragover');
});

dropZone.on('dragleave', function(e) {
    let dx = e.pageX - dropZone.offset().left;
    let dy = e.pageY - dropZone.offset().top;
    if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
         dropZone.removeClass('dragover');
    };
});