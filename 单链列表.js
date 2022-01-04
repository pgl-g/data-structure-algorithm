

// 单链列表 ，单向性
function LinedList() {
  // 定义内部类
  function Node(data) {
    this.data = data;
    this.next = 0
  }

  // 定义属性
  this.head = null;
  this.length = 0;


  // append方法进行插入
  LinedList.prototype.append = function(ele) {
    let newNode = new Node(ele);
    // 判断是否是第一次进行插入
    if (this.length == 0) {
      this.head = newNode;
    } else {
      let current = null;
      current = this.head;

      // 判断next的最后一次是否为空
      while (current.next) {
        current = current.next;
      }
      current.next = newNode
    }

    this.length += 1;
  }


  // toString
  LinedList.prototype.toString = function() {
    let current = this.head;
    let resultSting = '';
    // 当为空的时候停止循环
    while(current) {
      resultSting += current.data + '';
      // 还得指向下一次
      current = current.next;
    }

    return resultSting;
  }


  // inster (根据下标进行插入)
  LinedList.prototype.inster = function(index, data) {
    // 越界判断
    if (index < 0 || index > this.length) return false;
    // 获取数据对象
    let newNode = new Node(data);
    // 插入的位置是否是第一个
    if (index == 0) {
      // 头就是第一个
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // 插入其他位置
      let currentIndex = 0; // 定义下标
      let current = this.head; 
      let previous = null;
      while(currentIndex++ < index) {
        previous = current;
        current = current.next;
      } 
      newNode.next = current;
      previous.next = newNode;
    }
    this.length += 1;

    return true;
  }


  // get 获取data数据 根据下标
  LinedList.prototype.get = function(index) {
    // 越界判断
    if (index < 0 || index >= this.length) return null;
    let idx = 0;
    let current = this.head;
    while(idx++ < index) {
      current = current.next;
    }
    return current.data;
  }

  // Size方法
  LinedList.prototype.Size = function() {
    return this.length;
  }

  // isEmpty 判断数据中是否含有
  LinedList.prototype.isEmpty = function() {
    return this.length == 0;
  }
}
