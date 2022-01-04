

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
}
