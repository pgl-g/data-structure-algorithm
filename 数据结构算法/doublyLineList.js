  
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

  // get 根据下标进行返回数据
  DoublyLineList.prototype.get = function(index) {
    // 越界判断
    if (index < 0 || index >= this.length) return null;
    
    // 获取元素
    let current = this.head;
    let idx = 0;

    while (idx++ < index) {
      current = current.next;
    }
    return current.data;
  }


  // indexOf 根据索引 返回-1
  DoublyLineList.prototype.indexOf = function(data) {
    let current = this.head;
    let idx = 0;
    while(current) {
      if (current.data == data) {
        return idx;
      }
      idx += 1;
      current = current.next;
    }

    return -1;
  }


  // removeAt 根据列表特定位置删除一项
  DoublyLineList.prototype.removeAt = function(index) {
    // 越界判断
    if (index < 0 || index > this.length) return false;
  
    // 是否删除第一个节点
    if (index == 0) {
      this.head = this.head.next;
    } else {
      let idx = 0;
      let current = this.head;
      let previous = null;
      while(idx++ < index) {
        previous = current;
        current = current.next;
      }
      // 前一个节点指向current.next;
      previous.next = current.next;
    }

    this.length -= 1;

    return true;
  }



  // 修改某一个位置的元素
  DoublyLineList.prototype.update = function(newData, index) {
    // 越界判断
    if (index < 0 || index > this.length) return false;

    // 查找正确的节点
    let current = this.head;
    let idx = 0;
    while(idx++ < index) {
      current = current.next;
    }

    current.data = newData;

    return true;
  }

  // 从列表中删除某一项
  DoublyLineList.prototype.remove = function(ele) {

    // 从列表中找到数据源位置
    let index = this.indexOf(ele);
    
    return this.removeAt(index);
  }

  DoublyLineList.prototype.size = function() {
    return this.length;
  }

  
  DoublyLineList.prototype.isEmpty = function() {
    return this.length == 0;
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