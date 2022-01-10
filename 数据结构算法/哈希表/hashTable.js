/**
 * hash表实现
 * 
 * 采用链地址法来实现hash表
 */

/**
 * 原来不存在key，插入操作
 * 存在key，修改操作
 */

function HashTable() {
  // 属性
  this.storage = []; // 数组中存放相关的元素
  this.count = 0; // 当前已经存在了多少数据
  this.limit = 5; // 初始设置数组的长度

  // 方法 / 哈希函数
  HashTable.prototype.hashFn = function(str, size) {
    let hashCode = 0;
    
    // 将字符串转 => 数字 unicode 
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }
  
    // 取余操作
    let index = hashCode % size;
  
    return index;
  }

  // 插入/修改
  /**
   * 1. 根据key获取索引值
   *    目的：将数据插入到对应到位置
   * 2. 根据索引值取出bucket
   *  a. 如果bucket不存在，创建bucket并且防止在该索引的位置
   * 3. 判断新增还是修改原来的值
   *  a. 如果已经有值，那么修改值
   *  b. 如果没有，执行后续的添加操作
   */

  HashTable.prototype.put = function(key, value) {

    let currentIndex = this.hashFn(key, this.limit);

    let bucket = this.storage[currentIndex];

    if (bucket == null) {
      bucket = [];
      this.storage[currentIndex] = bucket;         
   }

    for (let i = 0; i < bucket.length; i++) {
      let tuble = bucket[i];
      if (tuble[0] == key) {
        tuble[i] = value;
        return;
      }
    }


    bucket.push([key, value]);

    this.count += 1;
  }

}

