var scanf = require('scanf');

console.log('ingresar nota');

var capturarNota = scanf('%d');

console.log(capturarNota);



if(capturarNota  < 3){
    console.log('Su calificacion es - Muy deficiente');
}
if(capturarNota >= 3 && capturarNota < 5){
    console.log('Su calificacion es - Insuficiente');
}
if(capturarNota >= 5 && capturarNota < 6){
    console.log('Su calificacion es - Suficiente');
}
if(capturarNota >= 6 && capturarNota < 7){
    console.log('Su calificacion es - Bien');
}
if(capturarNota >= 7 && capturarNota < 9){
    console.log('Su calificacion es - Notable');
}
if(capturarNota >= 9 && capturarNota <= 10){
    console.log('Su calificacion es - Sobresaliente');
}