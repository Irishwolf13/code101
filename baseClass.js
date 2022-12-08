class Node {
    constructor(value) {        
        this.value = value;     
        this.next = null;       
    }
}
class Queue {   //F.I.F.O.  First In First Out
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enter(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    exit() {
        if (!this.first) {
            return null;
        }
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}
class stackLinkedList {  //F.I.L.O.  First In Last Out
    constructor(){              //Runs when stackLinkedList is called
        this.top = null;        //Top Node on stack
        this.bottom = null;     //Bottom Node in staack
        this.legnth = 0;        //Total Number of Nodes in Stack
    }
    peek(){
        return this.top;        //O(n) returns top Node on Stack
    }
    push(value){
        const newNode = new Node(value);    //Calls new Node to create the node to be placed on top.
        if (this.legnth == 0) {             //Checks to see if this is the first Node being put on this stack
            this.top = newNode;             //If it is the first node, it will be both this.top and this.bottom
            this.bottom = newNode;          //If it is the first node, it will be both this.top and this.bottom
        }else {
            const holdingPointer = this.top;    //Place holder of the current top node of the stack
            this.top = newNode;                 //The new node is placed 'on top' of the stack, but will need a .next, given on the next line
            this.top.next = holdingPointer;     //The new node .next will now point to the old top, which is now second node in the stack
        }
        this.legnth++;                          //We add one to the length of our stack, because we added a new node
        return this;                            //This returns the entire stack
    }
    pop(){
        if (!this.top) {                        //If this is true, this is an empty stack and will return null
            return null;
        }
        if (this.top == this.bottom) {          //If this is true, then there is only one node left
            this.bottom = null;                 //this.bottom and this.top are now the same node
        }
        const holdingPointer = this.top;        //This holds this.top node in memory because we are changing it in the next line
        this.top = this.top.next;               //Sets the new top as the second node in the stack
        this.legnth--;                          //This removes the the top node(the previous this.top), now the new this.top is the top node of the stack
        return holdingPointer;                  //This will return the node that was removed.  
    }
}
class stackArrays {     //F.I.L.O.  First In Last Out  (No node needed)
    constructor(){
        this.array = [];
    }
    peek(){
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        return this.array.pop();        
    }
}