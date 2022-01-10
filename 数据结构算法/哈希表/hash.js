/**
 * 哈希表
 * 
 *  1. 基于数组 实现
 *  2. 比树快，可以瞬间查找元素
 * 
 *  优点 ： 将数组中查询慢点的数据操作，变的非常快
 *         非常快速的增删改查
 *  缺点：
 *  1. 哈希表中的数据是咩有顺序的，所以不能以一种固定的方式（比如从小到达）来遍历其中的元素
 *  2. 哈希表中key是不允许重复的，不能放置相同的key，用于保存不同的key 
 * 
 * 
 * 哈希表是啥： 结构就是数组，但是神奇之处在于对（下标值的一种变换），这种变换我们称为哈希函数，通过哈希函数可以获取HashCode
 */

/**
 * 案例一：公司使用一种数据结构来保存所有员工
 */ 

// 案例二: 设计一个数据结构，保存联系人和电话

// 案例三：使用一种数据结构存储单词信息，比如有50000个单词，找到单词后每个单词有自己的翻译&读音&应用等等

// 1. 字符串 =》比较大的数字：hashcode
// 2. 将大的数子hascode压缩到数组范围(size )之内
function hashFn(str, size) {

  let hashCode = 0;
  
  // 将字符串转 => 数字 unicode
  for (let i = 0; i < str.length; i++) {
    console.log(str.charCodeAt(i))
    hashCode = 37 * hashCode + str.charCodeAt(i);
  }

  // 取余操作
  let index = hashCode % size;

  return index;
}


// console.log(hashFn('str', 4))
