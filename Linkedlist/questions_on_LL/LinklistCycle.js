function linkListCycle(head) {
    let set = new Set();
    let curr = head;
    
    while(curr){
        if(set.has(curr)){
            return true;
        }
        set.add(curr);
        curr = curr.next;
    }
    return false;
}