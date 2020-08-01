/* 
PROGRAMA DONDE ENCUENTRA LAS POSIBLES PAREJAS UNICAS DE UNA LISTA DE NUMEROS POSITIVOS QUE SU SUMA DAN UN NUMERO(8)

*/

var arrayResultados = [];
sumatorio_combo([10, 1, 2, 7, 6, 1, 5], 8);
console.log(arrayResultados);
// [ [ 1, 2, 5 ], [ 1, 7 ], [ 1, 1, 6 ], [ 2, 6 ] ]

function sumatorio_combo(arrayNums, sumaTarget, arrayParcial = [])
{
    let sumaParcial = 0;

    for (let i = 0; i < arrayParcial.length; i++)
    {
        sumaParcial += arrayParcial[i];
    }

    if (sumaParcial === sumaTarget) 
    {
        let encontrado = 0;
        arrayParcial.sort();
        for (let k = 0; k < arrayResultados.length; k++)
        {
            if (arrayParcial.toString() === arrayResultados[k].toString())
            {
                encontrado++;
            }
        }

        if (encontrado < 1)
        {
            arrayResultados.push(arrayParcial);
        }

        return;
        
    }

    if (sumaParcial > sumaTarget) 
    {
        return;
    }

    let arrayNumsRemaning = [];

    for (let i = 0; i < arrayNums.length; i++) 
    {
        arrayNumsRemaning = arrayNums.slice(i + 1);
        sumatorio_combo(arrayNumsRemaning, sumaTarget, arrayParcial.concat([arrayNums[i]]));
    }

}
