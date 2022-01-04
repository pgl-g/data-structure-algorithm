


// 双向链表
function DoublyLineList() {
  // 定义一个内部类
  function Node(data) {
    this.data = data;
    this.next = null; // 向后指向
    this.prevs = null; // 向前指向
  }

  // 属性
  this.head = null; // 头
  this.tail = null; // 尾
  this.length = 0;


  // append 依次插入某一些数据
  DoublyLineList.prototype.append = function(data) {
    let newNode = new Node(data);
    // 判断是否是第一次插入
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 在有节点的情况下进行判断
      newNode.prevs = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  // toString
  DoublyLineList.prototype.toString = function() {
    return this.backwardString();
  }

  // backwardString方法
  DoublyLineList.prototype.backwardString = function() {
    // 定义变量
    let current = this.head;
    let resultString = '';

    while(current) {
      resultString += current.data + ' ';
      current = current.next;
    }
    
    return resultString;
  }

  // forwardString方法
  DoublyLineList.prototype.forwardString = function() {
    let current = this.tail;
    let resultString = '';

    while (current) {
      resultString += current.data + ' ';
      current = current.prev;
    }
    return resultString;
  }
}