/**
 * 
 * 二叉树的定义
 *  1. 可以为空，也就是没有节点
 *  2. 若不为空，则它是由跟节点和称为左子树和右子树的两个不相交的二叉树组成
 * 
 * 完全二叉树：
 *  1. 从上至下，从左到右顺序
 * 
 * 左边节点小于跟节点， 右边节点大于跟节点
 */

function Tree() {
  

  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null; 
  }
  // 根节点
  this.root = null;


  // 插入方法
  Tree.prototype.inster = function(key) {
    // 创建一个新的节点
    let newNode = new Node(key);

    // 判断根节点是否有节点
    if (this.root == null) {
      this.root = newNode;
    } else {
      // 进行插入操作/ 循环递归
      this.insterFn(this.root, newNode);
    }
  }

  // 递归插入左右子节点(根节点需要跟左右节点进行比较)
  Tree.prototype.insterFn = function(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insterFn(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insterFn(node.right, newNode);
      }
    }
  }

  // 树遍历
  /**
   * 先序遍历
   *  1. 访问其根节点
   *  2. 先遍历左节点(左子树)
   *  3. 遍历右节点 （右子树）
   */
  Tree.prototype.preOrderTranversal = function(handle) { 
    this.preOrderTranversalNode(this.root, handle);
  }

  Tree.prototype.preOrderTranversalNode = function(node, handle) {
    if (node !== null) {
      // 打印当前经过的节点
      handle(node.key);
      // 遍历所有的左节点 (左节点遍历到底)
      this.preOrderTranversalNode(node.left, handle);
      // 遍历所有的右节点 （右节点遍历到底）
      this.preOrderTranversalNode(node.right, handle);
    }
  }
  // 中序遍历
  Tree.prototype.midOrderTranversal = function(handle) {
    this.midOrderTranversalNode(this.root, handle);
  }
  Tree.prototype.midOrderTranversalNode = function(node, handle) {
    if (node !== null) {
      // 先遍历左节点
      this.midOrderTranversalNode(node.left, handle);
      // 访问跟节点
      handle(node.key);
      // 遍历右节点
      this.midOrderTranversalNode(node.right, handle);
    }
  }

  // 后序遍历
  Tree.prototype.outOrderTranveral = function(handle) {
    this.outOrderTranveralNode(this.root, handle);
  }
  Tree.prototype.outOrderTranveralNode = function(node, handle) {
    if (node !== null) {
      // 先访问左节点
      this.outOrderTranveralNode(node.left, handle);
      // 访问右节点
      this.outOrderTranveralNode(node.right, handle);
      // 最后访问根节点
      handle(node.key);
    }
  }

  // 最小值
  Tree.prototype.min = function() {
    let node = this.root;

    while(node.left != null) {
      node = node.left;
    }

    return node.key;
  }

  // 最大值
  Tree.prototype.max = function() {
    let node = this.root;
    while(node.right != null) {
      node = node.right;
    }

    return node.key;
  }

  // 搜索特定的key
  Tree.prototype.handleSearch = function(key) {
    // 通过递归方式进行搜索
    this.searchKey(this.root, key);

    // 用while循环进行查询
    // while(node != null) {
    //   if (key < node.key) {
    //     this.root = node.left;
    //   } else if (key > node.key) {
    //     this.root = node.right;
    //   } else {
    //     return true;
    //   }
    // }
  }
  Tree.prototype.searchKey = function(node, key) {
    // 判断是否含有节点
    if (node == null) return false;

    // 存在节点，往左查找
    if (key < node.key) {
      this.searchKey(node.left, key);
    } else if (key > node.key) {
      this.searchKey(node.right, key);
    } else {
      return true;
    }
  }

  /**
   * 删除（删除节点要从查找要删的节点）
   *  1. 该节点是叶节点（没有子节点，只有一个根节点 ） 
   *  2. 该节点有一个子节点
   *  3. 该节点有两个子节点
   * 
   * 删除操作
   *  1. 先找到要删除的节点，如果没有找到，不需要删除
   *  2. 找到要删除的节点
   *    a. 删除叶子节点
   *    b. 删除只有一个子节点的节点
   *    c. 删除有两个子节点的节点
   */

  Tree.prototype.remove = function(key) {
    let current = this.root;
    let parent = null;
    let leftChildNode = true;

    // 1. 父节点的key不等于传进来的key，直接循环
    while(current.key != key) {
      parent = current;
      if (key < current.key) {
        leftChildNode = true;
        current = current.left;
      } else {
        leftChildNode = false;
        current = current.right; 
      }
      // 某种情况：已经找到了最后的节点，依然没有找到key
      if (current == null) return false;
    }

    // 根据对应的情况删除节点
    // a. 删除的是叶节点
    if (current.left == null && current.right == null) {
      if (current == this.root) {
        this.root = null;
      } else if (leftChildNode) {
        parent.left = null;
      } else {
        parent.right = null;
      }
      // b. 删除的节点有一个子节点
    } else if (current.right == null) {
      if (current == this.root) {
        this.root = current.left;
      } else if (leftChildNode) {
        parent.left = current.left;
      } else {
        parent.right = current.right;
      }
    } else if (current.left == null) {
      if (current == this.root) {
        this.root = current.right;
      } else if (leftChildNode) {
        parent.left = current.right;
      } else {
        parent.right = current.left;
      }
    }
    // c. 删除有两个子节点的节点

  }

}

// 测试遍历
const result = new Tree();
let resultString = ''
result.preOrderTranversal((key) => {
  resultString += key + ' ';
})
console.log(resultString);