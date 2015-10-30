$(function() {
    $(".imageArea").hide(), $(".newImage").hide(), $('form[name="submitImgSrc"]').on("submit", function(e) {
        e.preventDefault();
        var src = $('input[name="imgSrc"]').val();
        $("#editableImage").attr("src", src), $(".imageArea").show();
    });
});