/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  // Проверяем, что аргумент является строкой
  if (typeof str !== 'string') return false;
  
  // Удаляем пробелы в начале и конце строки
  str = str.trim();
  
  // Пустая строка не является числом
  if (str === '') return false;
  
  // Проверяем, является ли строка корректным числом
  return !isNaN(Number(str)) && !isNaN(parseFloat(str));
}


console.log(isNumeric("123")) // Ожидаемый результат: true
console.log(isNumeric("12.3")) // Ожидаемый результат: true
console.log(isNumeric("123abc")) // Ожидаемый результат: false
console.log(isNumeric("abc")) // Ожидаемый результат: false
console.log(isNumeric(" ")) // Ожидаемый результат: false
