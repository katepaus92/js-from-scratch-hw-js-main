/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {    
    let string = Array.from(str)
    let res = []
    for (let i=0; i<string.length; i++){
        res.push(string[i], string[i])        
    }

    return res.join('')
}
console.log("doubleEachCharacter:", doubleEachCharacter('hello'));
