const uniq = (string) => {
  let first_ch = string[0];
  let array = string[1, string.length - 1].split('');
  if (array.includes(first_ch)) {
    return false
  } else {
    uniq(string[1, string.length - 1])
  }
  return true
};

console.log(uniq("asd"));

const reverse = (string) => {
  let result = '';
  for(let i = string.length - 1; i >= 0; i--) {
    result = result.concat(string[i])
  }
  return result
};

console.log(reverse("asd"));

const no_dups = (string) => {
  let chars = [];
  let result = '';
  for(let i = 0; i < string.length; i++) {
    if(!chars.includes(string[i])) {
      result = result.concat(string[i]);
    }
    chars.push(string[i]);
  }
  return result;
};

console.log(no_dups("aasdd"));

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

//using sentinel nodes
class LinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  push(key, value) {
    let new_node = new Node(key,value);
    this.tail.prev.next = new_node;
    this.tail.prev = new_node;
  }

  delete(key,value) {
    let node = this.head.next;
    while(node !== null) {
      if(node.key === key) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
      }
    }
  }

  to_s() {
    let node = this.head.next;
    while(node !== null) {
      console.log("key", node.key);
      console.log("value", node.value);
      node = node.next;
    }
  }
}

let list = new LinkedList;
list.push(1, 1);
list.push(2, 4);
list.to_s();
