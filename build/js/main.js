$(function(){

    // hide this area until image is set
    $('.imageArea').hide();
    $('.newImage').hide();

    $('form[name="submitImgSrc"]').on('submit', function(e){
        e.preventDefault();

        // get link from input
        var src = $('input[name="imgSrc"]').val();

        // set image attribute to link
        $('#editableImage').attr('src', src);

        $('.imageArea').show();
    });

});
