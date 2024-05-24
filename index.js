// TESTE 
// $(document).ready(function(){
//     // Altera a cor de fundo para preto
    // $('body').css('background-color', 'black');
// });

$(document).ready(function() {
    $('#color1').click(function() {

        var bgColor = $(this).text().trim();
        $('.container-fluid').css('background-color', bgColor);
        $('.bg').css('color', bgColor);
    });


    $('#color2').click(function() {

        var bgColor = $(this).text().trim();
        $('.container-fluid').css('background-color', bgColor);
        $('.bg').css('color', bgColor);
    });

    $('#color3').click(function() {

        var bgColor = $(this).text().trim();
        $('.container-fluid').css('background-color', bgColor);
        $('.bg').css('color', bgColor);
    });

    $('#color4').click(function() {

        var bgColor = $(this).text().trim();
        $('.container-fluid').css('background-color', bgColor);
        $('.bg').css('color', bgColor);
    });



    

});