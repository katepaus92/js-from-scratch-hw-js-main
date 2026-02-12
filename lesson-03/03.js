// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    let max = a
    if (b > max) max = b
    if (c > max) max = c
    return max
}       

let maximum = findLargest(10, 11, 11)
console.log('Max: ', maximum)


