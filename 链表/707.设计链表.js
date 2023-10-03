/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

class LinkNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

var MyLinkedList = function () {
  this.size = 0;
  this.tail = null;
  this.head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  // 创建虚拟节点
  let cur = new LinkNode(0, this.head);
  // 0 -> head
  while (index-- >= 0) {
    cur = cur.next;
  }
  return cur;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new LinkNode(val, this.head);
  this.head = node;
  this.size++;
  if (!this.tail) {
    this.tail = node;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new LinkNode(val, null);
  this.size++;
  if (this.tail) {
    this.tail.next = node;
    this.tail = node;
    return;
  }
  this.tail = node;
  this.head = node;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) {
    return;
  }
  if (index <= 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  // 获取目标节点的上一个的节点
  const node = this.get(index - 1);
  node.next = new LinkNode(val, node.next);
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  if (index === 0) {
    this.head = this.head.next;
    if (index === this.size - 1) {
      this.tail = this.head;
    }
    this.size--;
    return;
  }
  // 获取目标节点的上一个的节点
  const node = this.get(index - 1);
  node.next = node.next.next;
  if (index === this.size - 1) {
    this.tail = node;
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
