/* 
PROGRAMA DONDE ENCUENTRA k ELEMENTOS DE NUMEROS DESDE UN PUNTO PIVOTE X
k => numeros elementos; en este caso 3
x => punto de pivote; en este caso 5
closest_nums(nums, k, x)

*/

function findPosPivot(array, numPivot, posMin, posMax)
{

    if (array[posMin] === numPivot)
    {
        return posMin;
    }

    if (array[posMax] === numPivot)
    {
        return posMax;
    }

    let posMid =  parseInt((posMin + posMax) / 2);

    if (array[posMid] >= numPivot && array[posMid - 1] < numPivot)
    {
        return posMid;
    }

    if (array[posMid] < numPivot)
    {
        return findPosPivot(array, numPivot, posMid + 1, posMax);
    }

    return findPosPivot(array, numPivot, posMin, posMid - 1);


}




function closest_nums(array, cantidadNumeros, numPivot) 
{

    let arrayDestino = []
    let posPivot = findPosPivot(array, numPivot, 0, array.length - 1);
    let cantidadBucles = 0;
    
    //izquierda y luego derecha
    for (let i = 0; i < cantidadNumeros; i++)
    {
        let par = 0 == i % 2;
        let negative = 1;
        if (par === false)
        {
            negative = -1;
            cantidadBucles++;
        }


        let index = posPivot + (cantidadBucles * negative);
        let elementoDentroArray = array[index];
        arrayDestino.push(elementoDentroArray)

    }

    return arrayDestino

}

// k => numeros elementos; en este caso 3
// x => punto de pivote; en este caso 5
//closest_nums(nums, k, x)
let arrayNums = closest_nums([1, 3, 7, 8, 9], 3, 5);
//resultado=[7, 3, 8]
console.log(arrayNums);