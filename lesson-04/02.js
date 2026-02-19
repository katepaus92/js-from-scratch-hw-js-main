/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
function includesElement(array, element) {    
    for (let i = 0; i < array.length; i++){        
        if (array[i] === element){
            return true
        }
    }
    return false
}
function findUniqueElements(array) {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++){
        let res = includesElement(uniqueArray, array[i])
        if (res === false){
            uniqueArray.push(array[i])
        }
    }
    return uniqueArray
}


console.log("uniqueArray: ", findUniqueElements([1, 2, 3, 2, 1, 4]));




