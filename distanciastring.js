/*
    PROGRAMA DONDE ENCUENTRA LA DISTANCIA ENTRE UN CARACTER DEL STRING
    Y CADA ELEMENTO DEL STRING

*/


let resultado = show_distancia("helloworld", "l");
console.log(resultado);
//[2, 1, 0, 0, 1, 2, 2, 1, 0, 1]

function show_distancia(palabra, caracter)
{
    let resultados = [];
    let distanciaActual = parseInt(-Number.MIN_VALUE);

    for (let i = 0; i < palabra.length; i++ )
    {
        if (palabra[i].toString() == caracter.toString())
        {
            distanciaActual = i;
        }

        resultados.push(i - distanciaActual);
    }

    // console.log(resultados);
    // [5, 6, 0, 0, 1, 2, 3, 4, 0, 1]

    distanciaActual = Number.MAX_VALUE;
    for (let i = palabra.length - 1; i >= 0; i--)
    {
        if (palabra[i].toString() == caracter.toString())
        {
            distanciaActual = i;
        }

        resultados[i] = Math.min(resultados[i], distanciaActual - i);
    }

    // console.log(resultados);
    //[2, 1, 0, 0, 1, 2, 2, 1, 0, 1]

    return resultados;


}