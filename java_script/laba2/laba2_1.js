/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x, n) {
    return x**n;
  }
/**
 * Возвращает сумму чисел от 1 до n включительно.
 *
 * @param {number} n Вводимое число.
 * @return {number} sum, сумма от 1 до n.
 */
    function sumTo(n) {
    let i = 0;
    let sum = 0;
    while(i <= n) {
        sum = n * (n + 1) / 2;
        i++;
    }
    return sum;
  }
  function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        res = n * factorial(n - 1);
    }
    
  }