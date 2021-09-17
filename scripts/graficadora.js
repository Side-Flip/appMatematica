const canvas = "#grafica";
const btn_barras = "#boton-barras";
const btn_lineas = "#boton-lineas";
const btn_pizza = "#boton-pizza";
const labels = "#inputLabels";
const data = "#inputData";

let grafica;

$(btn_barras).click(function (e) {

    etiquetas = $(labels).val().split(","); 
    datos = $(data).val().split(",");
    graficar(datos, etiquetas, 'bar');
});

$(btn_lineas).click(function (e) {

    etiquetas = $(labels).val().split(","); 
    datos = $(data).val().split(",");
    graficar(datos, etiquetas, 'line');
});

$(btn_pizza).click(function (e) {

    alert("toma tu dona UwU");
});

function detectDonut(data){

    if(data[0].includes("%")){
       return true;
    }

    else{
        return false;
    }
}

function graficar(datos, etiqueta, tipo){

    var ctx = $(canvas);

    if(grafica){
        grafica.destroy();
    }
    
    grafica = new Chart(ctx, {
        type: tipo,
        data: {
            labels: etiqueta,
            datasets: [{
                label: '# de datos',
                data: datos,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


