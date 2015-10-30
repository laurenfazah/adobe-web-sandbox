$(function(){

    $('.imageArea').hide();


    $('form[name="submitImgSrc"]').on('submit', function(e){
        e.preventDefault();

        var src = $('input[name="imgSrc"]').val();
        console.log(src);

        $('#editableimage').attr('src', src);

        $('.imageArea').show();
    });

});
