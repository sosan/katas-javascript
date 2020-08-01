/*
    PROGRAMA DONDE ENCUENTRA LA DISTANCIA ENTRE UN CARACTER DEL STRING
    Y EL ELEMENTO DEL STRING

*/


show_distancia("helloworld", "l");
//[2, 1, 0, 0, 1, 2, 2, 1, 0, 1]

function show_distancia(palabra, caracter)
{

    let distancias = [];
    let distanciaActual = -1;
    
    for(let i = 0; i < palabra.length; i++)
    {
        if (palabra[i] === caracter)
        {
            distanciaActual = i;
        }


    }

    return distancias;

}

