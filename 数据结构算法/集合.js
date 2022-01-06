


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

  // 并集
  Set.prototype.union = function(otherSet) {
    // 创建当前的集合对象 A
    // 创建新的集合对象B
    let newObject = new Set();

    // 集合A
    let valus = newObject.value();
    for (let i = 0; i < valus.length; i++) {
      newObject.add(valus[i])
    }

    // 集合B
    valus = otherSet.value();
    for (let i = 0; i < valus.length; i++) {
      newObject.add(valus[i])
    }

    return newObject;
  }


  // 交集
  Set.prototype.interSection = function(otherObj) {
    /**
     * a集合 b集合 抽取公共的数据
     */
    // 收集器
    let resultSection = new Set();
    
    // 获取a集合
    let values = this.value();

    for (let i = 0; i < values.length; i++) {
      if (otherObj.has(values[i])) {
        resultSection.add(values[i]);
      }
    }
    return resultSection;

  }

  /**
   * 差集
   *  1. 创建一个新的集合，
   *  2. 遍历集合A中的所有元素，判断是否在集合B中
   *  3. 不存在集合B中，将该元素添加到新集合中
   *  最后将新集合返回
   */
  Set.prototype.differenceSet = function(otherSet) {

    let resultSet = new Set();

    // 集合A
    let values = this.value();

    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        resultSet.add(values[i]);
      }
    }

    return resultSet;
  }
}
