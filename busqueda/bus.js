$(document).ready(function(){
    $("#input_buscar").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".Pcaj").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});