


/**
 * 集合
 * 哈希表
 * 无序，不能重复的元素构成
 *  1. 在数学中国，允许集合元素重复
 *  2. 在计算机中，集合通常表示的结构中的元素是不允许重复的
 * 
 * 特殊数组
 *  1. 里面的元素没有顺序，也不能重复
 */

/**
 * 封装set类
 * 
 * 1. 代码就是封装了一个集合的构造函数
 * 2. 在集合中，添加了一个items的属性，用于保存之后添加到集合中的元素，因为Object的keys本身就是一个集合
 */


function Set() {
  

  // 属性
  this.items = {};

  // add（value） 方法
  Set.prototype.add = function(value) {

    // 检测是否含有钙元素
    if (this.has(value)) return false; 

    this.items[value] = value;
    return true 
  }


  // has是否含有这个元素
  Set.prototype.has = function(value) {
    return this.items.hasOwnProerty(value);
  }

  // remove 删除某一元素
  Set.prototype.remove = function(value) {

    // 得判断 该元素不存在 返回false
    if (!this.has(value)) return false;

    delete this.items[value];

    return true;
  }

  // clear 清除该对象所有元素
  Set.prototype.clear = function() {
    return this.items = {};
  }

  // size 整个对象的长度
  Set.prototype.size = function() {
    return Object.keys(this.items).length;
  }

  // value 返回所有的值
  Set.prototype.value = function() {
    return Object.keys(this.items);
  }
}
