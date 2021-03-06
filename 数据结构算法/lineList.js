

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

  // 封装indexOF 根据数据查找索引 查找不到-1
  LinedList.prototype.indexOf = function(data) {
    let current = this.head;
    let idx = 0;

    while(current) {
      if (current.data === data) {
        return idx;
      }

      current = current.next;
      idx += 1;
    }
    // 找不到返回-1
    return -1;
  }

  // update 根据下标以及新元素 修改某个元素
  LinedList.prototype.update = function(index, newData) {

    // 如有下标 都要进行越界判断
    if (index < 0 || index > this.length) return false;
    // 查找正确的节点
    let current = this.head;
    let idx = 0;
    
    while(idx++ < index) {
      current = current.next;
      idx += 1;
    }
    current.data = newData;
    return true;
  }


  // removeAt(index) 从列表特定位置删除
  LinedList.prototype.removeAt = function(index) {
    // 越界判断
    if (index < 0 || index >= this.length) return null;

    // 判断是否删除的是第一个节点
    if (index == 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let idx = 0;
      let previous = null; // 暂存一个节点
      while(idx++ < index) {
        previous = current;
        current = current.next;
      }
      // 前一个节点指向current.next;
      previous.next = current.next;
    }

    this.length -= 1;
    return current.data;
  }


  // remove(ele) 删除某一项 根据某一项值，获取下标进行删除
  LinedList.prototype.remove = function(ele) {


    // 获取值的下标位置
    let index = this.indexOf(ele);
    
    // 直接调用removeAt直接
    return this.removeAt(index);
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
