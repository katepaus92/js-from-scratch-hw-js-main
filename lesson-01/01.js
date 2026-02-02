// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;
const MIN = 1;
const MAX = 20;
let number = MIN;
while (number <= MAX){
    sum += number;
    number++;
}
console.log("Сумма чисел от 1 до 20: "+ sum);

