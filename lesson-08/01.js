/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
    // Разбиваем строку на массив слов
    let words = str.split(' ');
    let result = [];
    
    // Проходим по каждому слову с помощью цикла for
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        
        // Пропускаем пустые строки (на случай нескольких пробелов)
        if (word.length === 0) {
            result.push('');
            continue;
        }
        
        // Делаем первую букву заглавной, остальные - строчными
        let capitalizedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
        result.push(capitalizedWord);
    }
    
    // Собираем слова обратно в строку
    return result.join(' ');
}

console.log(capitalizeWords("hello world from javascript")); //"Hello World From JavaScript"
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // "Javascript Is Awesome"
console.log(capitalizeWords("HELLO WORLD")); // "Hello World"
console.log(capitalizeWords("привет мир")); // "Привет Мир"