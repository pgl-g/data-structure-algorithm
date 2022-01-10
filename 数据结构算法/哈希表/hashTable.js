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
  this.count = 0; // 当前已经存在了多少数据 记录bucket中长度
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
    // 修改
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] == key) {
        tuple[1] = value;
        return;
      }
    }

    // 新增
    bucket.push([key, value]);

    this.count += 1;
  }


  /**
   * 根据key查找bucket =》判断bucket是否为null =》在查找返回
   */

    HashTable.prototype.get = function(key) {

      let index = this.hashFn(key, this.limit);

      let bucket = this.storage[index];

      if (bucket == null) return null;
      
      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i];
        if (tuple[0] == key) {
          return tuple[1];
        } 
      }
      // 没有找到，直接返回
      return null;
    }

    HashTable.prototype.remove = function(key) {

      let index = this.hashFn(key, this.limit);

      let bucket = this.storage[index];

      if (bucket == null) return null;
      
      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i];
        if (tuple[0] == key) {
          bucket.splice(i, 1);
          this.count--;
          return tuple[1];
        } 
      }
      // 没有找到，直接返回
      return null;
    }

    HashTable.prototype.isEmpty = function() {
      return this.count == 0;
    }

    HashTable.prototype.size = function() {
      return this.count;
    }


}

