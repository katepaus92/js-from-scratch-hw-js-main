// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(a) {
    let even = true
    if (a % 2 === 1)
        even = false
    return even
}
let res = isEven(2);
console.log('isEven: ', res);
