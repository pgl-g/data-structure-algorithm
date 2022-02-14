
// 创建列表类
function ArrayList() {
  this.array = [];

  // 插入 将数据插入数组中
  ArrayList.prototype.inster = function(item) {
    this.array.push(item);
  }

  ArrayList.prototype.toStrings = function() {
    return this.array.join('-');
  }

  /**
   * 冒泡排序
   * 
   * 从头到尾依次比较相邻两个元素到大小关系
   * 左边高则，则交换位置，右边左移
   * 当走到最右端最高到队友一定是放在最右边
   * 
   * 最后一次进入： i = length - 2 比较length - 2 和 length - 1
   * 
   */
  ArrayList.prototype.bubblingSort = function() {
    // 第一次：j = length - 1，比较到倒数第一个位置
    // 第二次：j = length - 2，比较到倒数第二个位置
    // ...
    const length = this.array.length;
    for (let j = length - 1; j >= 0; j--) {
      // 第一次进来：i = 0，比较0 和 1位置到两个数据，如果0位置大有1位置大数据
      // 最后一次进来：i = length - 2， 比较length - 2和 length - 1大两个数据
      for (let i = 0; i < (length - 1 || j); i++) {
        if (this.array[i] > this.array[i + 1]) {
          const temp = this.array[i];
          this.array[i] = this.array[i + 1];
          this.array[i + 1] = temp;
        }
     }
    }
    
  }

  // 选择排序

  // 插入排序

  // 希尔排序

  // 快速排序
}

// 测试类

let list = new ArrayList();

list.inster(1);
list.inster(12);
list.inster(10);
list.inster(8);
list.inster(4);
list.toStrings();
list.bubblingSort();
console.log(list.array)
