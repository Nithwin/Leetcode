class ListNode {
  constructor(value){
      this.val = value;
      this.next = null;
  }
}

var MyLinkedList = function() {
  this.head = null;
  this.size = 0;
};


MyLinkedList.prototype.get = function(index) {
  let i = 0;
  let tmp = this.head;
  while(i < this.size && tmp !== null){
    if(i === index){
      return tmp.val;
    }
    tmp = tmp.next;
    i++
  }
  return -1;
};


MyLinkedList.prototype.addAtHead = function(val) {
  const node =  new ListNode(val);;
  if(this.size === 0){
    this.head = node;

  }
  else{
    node.next = this.head;
    this.head = node;
  }
  this.size++;
};


MyLinkedList.prototype.addAtTail = function(val) {
  const node =  new ListNode(val);;
  if(this.size === 0){
    this.head = node;
  }
  else{
    let tmp = this.head;
    while(tmp.next !== null){
      tmp = tmp.next;
    }
    tmp.next = node;
  }
  this.size++;
};


MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (this.size < index) return;
  if(index === 0){
    this.addAtHead(val)
  }
  else if(index === this.size){
    this.addAtTail(val);
  }
  else{
  const node = new ListNode(val);

  for (let i = 0; i < index - 1; i++) {
    tmp = tmp.next;
  }
    node.next = tmp.next;
    tmp.next = node;
    this.size++;
}

};


MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index >= this.size|| index < 0 ) return ;
  if(index === 0){
    this.head = this.head.next;
  }
  else{
    let tmp = this.head;
    for (let i = 0; i < index - 1; i++) {
        tmp = tmp.next;
    }
    tmp.next = tmp.next.next;
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

var obj = new MyLinkedList()
obj.addAtHead(1)
obj.addAtHead(2)
obj.addAtHead(3)
obj.addAtHead(5)
obj.addAtTail(9)
obj.addAtTail(8)
obj.addAtTail(7)
obj.deleteAtIndex(1)
console.log(obj);

