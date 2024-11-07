function ListNode(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.insert = function(value) {
  const node = new ListNode(value);
  if (this.head === null) {
    this.head = node;
    return this;
  }
  let tmp = this.head;
  while (tmp.next) {
    tmp = tmp.next;
  }
  tmp.next = node;
};

LinkedList.prototype.print = function() {
  for (let tmp = this.head; tmp; tmp = tmp.next) {
    console.log(tmp.val);
  }
};

LinkedList.prototype.getValues = function(str = '') {
  for (let tmp = this.head; tmp; tmp = tmp.next) {
    str += tmp.val.toString();
  }
};



var addTwoNumbers = function(l1, l2) {
  l1 = l1.head.val;
  l2 = l2.head.val;
  let carry = 0;
  const resultList = new ListNode(0);
  while(l1 != null || l2 != null){
    if()
  }
};

const list = new LinkedList();
list.insert(5);
list.insert(4);
list.insert(3);
list.insert(2);
list.insert(1);
list.print();
const list2 = new LinkedList();
list2.insert(5);
list2.insert(4);
list2.insert(3);
list2.insert(2);
list2.insert(1);
list2.print();
console.log(list);

console.log(addTwoNumbers(list,list2));
