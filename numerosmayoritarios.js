/* 
PROGRAMA DONDE ENCUENTRA UN ELEMENTO QUE APARECEN MAS VECES EN UN ARRAY
Y DEVUELVE EL NUMERO MAYORITARIO JUNTO CON EL NUMERO DE APARICIONES
*/

let resultado = show_mayoritarios([3, 5, 3, 1, 1, 2, 1, 5, 1, 5, 3]);
console.log(resultado);
//[1, 4]

function show_mayoritarios(arrayNumeros)
{
    let resultados = [];
    resultados.push(-1, -1);
    let numeroAparicion = 0;
    let indiceArrayNumeros = 1;

    
    arrayNumeros.sort();
    //[1, 1, 1, 1, 2, 3, 3, 3, 5, 5, 5]
    for (let i = 0; i < arrayNumeros.length; i++)
    {

        if (arrayNumeros[i] === arrayNumeros[indiceArrayNumeros])
        {
            numeroAparicion++;
        }
        else
        {
            numeroAparicion = 1;
            indiceArrayNumeros = i;

        }

        if (numeroAparicion > resultados[1])
        {
            resultados[0] = arrayNumeros[i];
            resultados[1] = numeroAparicion;
        }


    }

    return resultados;

}

