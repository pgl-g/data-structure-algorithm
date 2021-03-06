
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

  /**
   * 选择排序
   * 
   */ 
  ArrayList.prototype.selectiongSort = () => {
    let length = this.array.length;
    // [1, 12, 10, 8, 4]
    // 外层循环：从0开始取数据
    for (let j = 0; j < length - 1; j++) {
      // 内层循环：从i + 1位置开始取数据
      let min = j;
      for (let i = min + 1; i < length; i++) {
        
        // 进行加1操作
        if (this.array[min] > this.array[i]) {
          min = i;
        }
      }
      // 跳出循环
      const temps = this.array[min];

      this.array[min] = this.array[j];

      this.array[j] = temps;
    }

    
  }
  

  /**
   * 插入排序
   * 
   *  插入排序的思想核心是局部有序
   * 
   *  比如在一个队列中的人，我们选择其中一个作为标记的队员
   *  这个被标记的队员左边的所有队员已经是局部有序
   *  意味着，一部分人是按顺序排好的，还有一部分是没有顺序的
   * 
   * 思路：
   *  1. 从第一个元素开始，该元素可以认为已经被排序
   *  2. 取出下一个元素，在已经排序的元素序列中从后向前扫描
   *  3. 如果该元素（已排序）大于新元素，将该元素移到下一个位置
   *  重复上一个步骤，直到找到已排序的元素小于或等于新元素的位置
   *  将新元素插入到该位置，重复上面的步骤
   */
  ArrayList.prototype.insterSort = () => {
    let length = this.array.length;

    // 外层循环：从第一个位置开始获取数据(假设第一个位置是局部有序，在进行向前插入数据)，向前面局部有序进行插入
    for (let i = 1; i < length; i++) {
      // 内层循环：获取i位置的元素，和前面的数据依次进行比较
      // 因为判定第一个数据是局部有序，所以取后面所有的数据向前面的局部有序进行比较 
      let temp = this.array[i]; // 存储每一项
      let j = i;
      while (this.array[j - 1] > temp && j > 0 ) {
        this.array[j] = this.array[j - 1];
        j--;
      }

      // 将j位置的数据，放置temp就可以了(前面小于后面直接放到后面)
      this.array[j] = temp;
    }
  }



  /**
   * 交换位置
   */
  ArrayList.prototype.swap = function(n, m) {
    const temp = this.array[n];
    this.array[n] = this.array[m];
    this.array[m] = temp;
  }


  /**
   * 快速排序
   * 1.先选择枢纽
   */ 
  ArrayList.prototype.median = function(left, right) {
    // 1.先选择枢纽
    const center = Math.floor((left + right) / 2);
    // 2. 判断枢纽位置
    if (this.array[left] > this.array[right]) {
      this.swap(left, right);
    }

    if (this.array[center] > this.array[right]) {
      this.swap(center, right);
    }

    if (this.array[left] > this.array[center]) {
      this.swap(left, center);
    }

    // 3. 将center位置换到right - 1的位置
    this.swap(center, right - 1);
    // 4. 特殊枢纽位置进行排序
    return this.array[right - 1];
  }

  /**
   * 快速排序实现
   * 效率：O(N* logN)
   * 
   */ 
  ArrayList.prototype.quickSort = function() {
    this.quick(0, this.array[length -  1]);
  }

  ArrayList.prototype.quick = function(left, right) {
    // 1. 结束条件
    if (left >= right) return;

    // 2. 获取枢纽
    const pivot = this.median(left, right);

    // 3. 定义变量，用于记录当前找到的位置
    let i = left;
    let j = right - 1; // 指向枢纽的位置

    // 4. 开始进行交换
    while(true) {
      while(this.array[++i] < pivot) {};
      while(this.array[--j > pivot]) {};

      // 左边小于右边
      if (i < j) {
        this.swap(i, j);
      } else {
        // 大于等于时直接跳出循环，这时i的位置再枢纽的位置
        break;
      }
    }

    // 5. 将枢纽的位置 放置正确的位置，i的位置
    this.swap(i, right - 1);

    // 6. 现在枢纽正确的位置已经确定，在进行枢纽两边进行递归 同等操作进行排序
    this.quick(left, i - 1);
    this.quick(i + 1, right);
  }


}

// 测试类

let list = new ArrayList();

list.inster(1);
list.inster(12);
list.inster(10);
list.inster(8);
list.inster(4);
list.toStrings();
// list.bubblingSort();
// list.selectiongSort();
list.insterSort();
console.log(list.array)
