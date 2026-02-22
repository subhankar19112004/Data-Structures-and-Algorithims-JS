function Node(val) {
    this.val = val;
    this.size = 0;
    this.next = null;
    console.log("Created node with value: " + this.val);

}
Node(5);

const newNode = new Node(10);
console.log("The value of newNode is: " + newNode.val);
console.log("The next property of newNode is: " + newNode.next);
