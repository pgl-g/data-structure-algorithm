  
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

  // inster 方法 (根据下标，插入的元素)
  DoublyLineList.prototype.inster = function(index, data) {
    // 越界判断
    if (index < 0 || index > this.length) return false;
    
    // 获取新的元素
    let newNode = new Node(data);

    // 判断是否是插入的第一个
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 有数据的情况下，插入是否是第一个
      if (index == 0) {
        this.head.prevs = newNode;
        newNode.next = this.head;
        this.head = newNode;
      } else if (index == this.length) {
        // 有数据的情况下，插入是否是最后一个
        newNode.prevs = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        // 最新的节点插入中间的位置
        let current = this.head;
        let idx = 0;
        while(idx++ < index) {
          current = current.next;
        }
        // 修改指针
        newNode.next = current;
        newNode.prevs = current.prevs;
        current.prevs.next = newNode; 
        current.prevs = newNode;
      }
    }

    this.length += 1;
    return true;

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