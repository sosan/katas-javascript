const data = [1, 2, 3, 4, 10, 11, 12, 13, 22, 121, 122, 123, 45, 46, 47, 48];
console.time('consecutivos1');
numbersSorted = checkIsConsecutive(data);
console.timeEnd('consecutivos1');
console.log(numbersSorted)

function checkIsConsecutive(arrayDataNumbers) 
{

    let sectionNumbers = [];
    let listNumbers = [];

    for (currentIndex = 0, nextIndex = 1; currentIndex < arrayDataNumbers.length; currentIndex++, nextIndex++)
    {

        if (arrayDataNumbers[currentIndex] + 1 !== arrayDataNumbers[nextIndex]) 
        {
            if (arrayDataNumbers[currentIndex] - 1 !== arrayDataNumbers[currentIndex - 1]) continue;

            sectionNumbers.push(arrayDataNumbers[currentIndex]);
            listNumbers.push(sectionNumbers);
            sectionNumbers = [];
            continue;

        }

        sectionNumbers.push(arrayDataNumbers[currentIndex]);

    }

    return listNumbers;

};
