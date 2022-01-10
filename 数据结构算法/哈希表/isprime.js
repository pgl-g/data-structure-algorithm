/**
 * 质数 > 1 的自然数
 *  普通质数的判断
 *  特点： 只能被1和自己整除，不能被2到num - 1之间的数字整除
 */

function isPrime1(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

// 高效质数判断
/**
 *  一个数偌可以进行因式分解,那么分解的数一定是小于等于sqrt（n），一个大于等于
 * 比如16可以被分别，那么是2*8，2小于sqrt(16), 也就是4， 8大于4，而4*4都是等于sqrt(n);
 */
function isPrime2(num) {
  // 获取平方根
  let temp = parseInt(Math.sqrt(num));

  // 循环判断
  for (let i = 2; i <= temp; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}