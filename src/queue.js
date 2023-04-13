const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Queue {

  constructor(){
    this.list=new ListNode();
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    if(this.list.value===undefined)
    {
      this.list.value=value;
    }
    else{
      let currentNode=this.list;
      let new_node=new ListNode();
      new_node.value=value;
     
      while(currentNode.next!==null) currentNode=currentNode.next;
      currentNode.next=new_node;
    }
  }

  dequeue() {
    if(this.list.value!==undefined)
    { let currentNode=this.list;
      this.list=this.list.next;
      return currentNode.value;
    }
  }
}
const queue = new Queue();
 queue.enqueue(1); // adds the element to the queue
queue.enqueue(3); // adds the element to the queue
 queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 console.log(queue.getUnderlyingList());




module.exports = {
  Queue
};
