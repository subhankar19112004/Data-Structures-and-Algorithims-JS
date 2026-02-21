var addToTail = function (val) {
    const newNode = new Node(val);

    if (this.head === null) {
        this.head = newNode;
        this.size++;
        return;
    } else {
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.size++;
        return;
    }


}