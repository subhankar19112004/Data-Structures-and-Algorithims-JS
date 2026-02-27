function insertion(headA, headB){
    // putting all the elements of headb into a set
    let store = new Set();
    while( headB){
        store.add(headB);
        headB = headB.next;
    }

    // checking idf inside headA there is an element of headB and if there is then we will return that element
    while(headA){
        if(store.has(headA)){
            return headA;
        }
        headA = headA.next;
    }
    return null;
}