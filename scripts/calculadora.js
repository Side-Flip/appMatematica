const input = "#calc_display";

$("button").click(function (e) { 
    var button_value = $(this).val();
    switch(button_value){
        case "enter":
            var input_value = $(input).val();
            var output = enter(input_value);
            $(input).val(output);
            break;
        case "clear":
            limpiar();
            break;
        default:
            $(input).val($(input).val()+button_value);
    }
});

function enter(value){
    var expresion = eval(value);
    return expresion;
}

function limpiar(){
    $(input).val("");
}