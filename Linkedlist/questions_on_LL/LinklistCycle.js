//Using Hashing = space complexity : O(n) and Time complexity : O(n)
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

//Using Floyd’s Cycle Detection Algorithm = space complexity : O(1) and Time complexity : O(n)
function linkListCycleUsinfFloyd(head){
    if(!head) return false;
    let slow = head;
    let fast = head.next;

    while ( fast !== slow ){
        if(! fast || !fast.next ) return false;

        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
} 