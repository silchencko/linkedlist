var myLinkedList = new LinkedList(3);
myLinkedList.push(5);
myLinkedList.push(4);
myLinkedList.push(8);
myLinkedList.push(10);
myLinkedList.push(11);
console.log(myLinkedList);
myLinkedList.pop();
myLinkedList.pop();
console.log(myLinkedList);
myLinkedList.unshift(2);
myLinkedList.unshift(55);
myLinkedList.addByIndex(2, 66);
myLinkedList.addByIndex(7, 66);
myLinkedList.deleteByIndex(7);
myLinkedList.replace(1, 22);

console.log(myLinkedList);