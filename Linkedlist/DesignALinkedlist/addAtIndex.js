let addAtIndex = function (index, val) {
    if( index < 0 || index > this.size) return;
    if( index == 0){
        this.addAtHead(val);
        return;
    } else if ( index == this.size ){
        this.addAtTail(val);
        return;
    } else {
        let newNode = new Node(val);
        let curr = this.head;
        for( let i = 0; i < index - 1; i++ ){
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;

        this.size++;
    }
};