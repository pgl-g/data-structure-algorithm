  // 1. 考虑该队列的优先级进行比较
  // 2. 比较完成之后放到队列正确的位置


  // 例子：机场的登机顺序 急诊科（候诊室）根据线程
  /**
   * 实现逻辑 构造函数
   *  1. 封装元素和优先级放在一起
   *  2. 添加元素的实惠，将新插入的元素的优先级和队列中已经存在的元素进行优先级比较，放到正确的位置
   */

  function PriorityQueue() {
    // 创建内部类 
    function QueueElement(element, priority) {
      this.element = element;
      this.priority = priority;
    }

    // 封装属性
    this.items = [];

    // 实现插入方法 / 创建实例对象 / 将插入的数据在这里进行处理
    PriorityQueue.prototype.enqueue = function (element, priority) {
      
      // 1. 创建PriorityQueue实例对象
      var queueElement = new QueueElement(element, priority);
      

      // 2. 队列中是否含有
      if (this.items.length > 0) {
        let flag = false;
        for (let i = 0; i < this.items.length; i++) {
          if (queueElement.priority < this.items[i].priority) {
            this.items.splice(i, 0, queueElement);
            flag = true;
            break; // 如落插入直接跳出循环
          }
        }

        // 没有插入的情况下
        if (!flag) {
          this.items.push(queueElement);
        }

      } else {
        this.items.push(queueElement);
      }
    }

    // 查看前端元素
    PriorityQueue.prototype.front = function () {
      return this.items[0];
    }

    // 查看队列是否为空
    PriorityQueue.prototype.isEmpty = function () {
      return this.items.length == 0;
    }

    // 查看队列中元素的个数
    PriorityQueue.prototype.size = function () {
      return this.items.length;
    }

    // toString方法
    PriorityQueue.prototype.toString = function () {
      let resultString = '';
      for (let i = 0; i < this.items.length; i++) {
        resultString += this.items[i].element + '-' + this.items[i].priority;
      }
      return resultString;
    }
  }

  // 测试代码
  const result = new PriorityQueue();

  // enqueue

  result.enqueue('1', 1561);
  result.enqueue('2', 121);
  result.enqueue('3', 131);
  result.enqueue('4', 141);
  result.enqueue('5', 151);

  // console.log(result);