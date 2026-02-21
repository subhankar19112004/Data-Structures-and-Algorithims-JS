var addToTail = function(val) {

    let curr = this.head;
    while( curr.next !== null){
        curr = curr.next;
    }

    const newNode = new Node(val);
    curr.next = newNode;    
    this.size++;
}