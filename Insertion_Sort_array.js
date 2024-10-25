class Node{
  constructor(value){
    this.val = value;
    this.next = null;
  }
}

class ListNode{
  constructor(){
    this.head = null;
  }
  push(value){
    const node = new Node(value);
    if(this.head === null){
      this.head = node;
      return;
    }
    let tmp = this.head;
    while(tmp.next !== null){
      tmp =tmp.next;
    }
    tmp.next = node;
  }

  print(){
    let tmp = this.head;
    let str = '';
    while(tmp){
      str += tmp.val + ' ';
      tmp = tmp.next;
    }
   return str;
  }

  sort(){
    let tmp = this.head;
    for(tmp;tmp !== null;tmp = tmp.next){

    }


  }
}

const list = new ListNode();

list.push(5)
list.push(4)
list.push(3)
list.push(2)
list.push(1)
list.sort();
console.log(list.print());
