const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor(){
    this.rootOfTree=null;
  }

  root() {
    return this.rootOfTree;
  }

  add(data) {

    let newNode=new Node(data);
    const node=this.rootOfTree;
    if(node ===null)
    {
      this.rootOfTree=newNode;
      
    }
    else{
      this.insertNode(node,newNode);
    }
  


  }
  insertNode(node,newNode)
  {
    if(newNode.data<node.data)
    {
      if(node.left ===null)
      {
        node.left=newNode;
      }
      else{
        this.insertNode(node.left,newNode);
      }
    }
    else{
      if(node.right===null)
      {
        node.right=newNode;
      }
      else{
        this.insertNode(node.right,newNode);
      }
    }
  } 

  has(data) {
    if(this.rootOfTree===null)return null;
    let currentNode=this.rootOfTree;
    while (true) {
      if(currentNode===null) return false;
        if(data === currentNode.data) return true;
      if(data<currentNode.data) currentNode=currentNode.left;
      else currentNode=currentNode.right;
      
    }
  }

  find(data) {
    let currentNode=this.rootOfTree;
    if(currentNode=== null)return null;
    while(currentNode.data !==data)
    {
      if(data<currentNode.data)
      {
        currentNode=currentNode.left;
      }
      else currentNode=currentNode.right;
      if(currentNode === null) return null;
    }
    return currentNode;
  }

  remove(data) {
    this.rootOfTree=this.removeNode(this.rootOfTree,data);
  }
  removeNode(node,data)
  {
    if(node===null)return null;

    if(data===node.data)
    {
      
        if(node.left===null && node.right ===null)
        {
          
          return null;
        }
        else if(node.left===null)
        {
          return node.right;
        }
        else if(node.right ===null)
        {
          return node.left;
        }
        else{
          let min_node=this.findSmallestNodeInRight(node.right);
        
          node.data=min_node.data;
          node.right=this.removeNode(node.right,min_node.data);
          return node;
        }
        
      
    }else if(data<node.data)
    {
      node.left=this.removeNode(node.left,data);
      return node;
    }
    else{
      node.right=this.removeNode(node.right,data);
      return node;
    }
  }
  findSmallestNodeInRight(node)
  {
    while(node.left!==null)
    {
      node=node.left;
    }
    return node;
  }

  min() {
    let currentNode=this.rootOfTree;
    if(currentNode===null)return null;
    while(currentNode.left!==null)
    {
      currentNode=currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode=this.rootOfTree;
    if(currentNode===null)return null;
    while(currentNode.right!==null)
    {
      currentNode=currentNode.right;
    }
    return currentNode.data;
  }
}
const tree = new BinarySearchTree();
      tree.add(9);
      tree.add(14);
      tree.add(2);
      tree.add(6);
      tree.add(128);
      tree.add(8);
      tree.add(31);
      tree.add(54);
      tree.add(1);

      tree.remove(14);
      tree.remove(8);
      console.log(tree.find(128).left.data);
      
      tree.remove(9);
   
      console.log(tree.has(14));
      console.log(tree.has(8));
      console.log(tree.has(9));
      console.log(tree.has(2));
      console.log(tree.has(6));
      console.log(tree.has(128));
      console.log(tree.has(31));
      console.log(tree.has(54));
      console.log(tree.has(1));



module.exports = {
  BinarySearchTree
};