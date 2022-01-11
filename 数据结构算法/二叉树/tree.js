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
}