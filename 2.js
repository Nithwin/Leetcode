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
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }
    else{
      let tmp = this.head;
      while(tmp.next){
        tmp = tmp.next;
      }
      tmp.next = node;
    }
  }

  print(){
    let tmp = this.head;
    let s = '';
    while(tmp){
      s += tmp.val+' ';
      tmp = tmp.next;
    }
    return s;
  }


  addTwo(list2){
    list2 = list2.head;
    let dummy = new Node(0);
    let current = dummy;
    let tmp = this.head;
    let r = 0;
    while(tmp !== null  || list2 !== null){
      let x = (tmp !== null) ? tmp.val:0;
      let y = (list2 !== null) ? list2.val:0;
      let sum =x+y+r;
      r = Math.floor(sum/10);
      current.next = new Node(sum % 10);
      console.log(current.val);
      current = current.next;
      if(tmp !== null) tmp = tmp.next;
      if(list2 !== null) list2 = list2.next;
    }

    return dummy.next;
  }

}




const list1 = new ListNode();
list1.push(1)
list1.push(2)
list1.push(3)
list1.push(4)
list1.push(3)
list1.push(2)
list1.push(1)

const list2 = new ListNode();
list2.push(4)
list2.push(3)
list2.push(2)
list2.push(1)

console.log(list1.print());
console.log(list2.print());


console.log(list1.addTwo(list2));

