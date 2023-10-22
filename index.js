// program to implement a queue data structure
class Queue {
    constructor() {
        this.queue = [];
    }

    //  add an element to the queue
    enqueue(element) { // add element
        return this.queue.push(element);
    }

    // remove the first element from the queue
    dequeue() {
        if(this.queue.length > 0) {
            return this.queue.shift();   // remove first element
        }
    }

    // display the last element
    peek() {
        return this.queue[this.queue.length - 1];
    }

    // the total number of elements in the queue
    size(){
        return this.queue.length;
    }

    // check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // clear all the elements of the queue
    clear(){
        this.queue = [];
    }
}

let counter =  new Queue();

// add
counter.enqueue(1);
counter.enqueue(2);
counter.enqueue(3);

// get last element
console.log(counter.peek()); // 3

// remove
console.log(counter.dequeue()); // 1
console.log(counter.dequeue()); // 2

console.log(counter.isEmpty()); // false
console.log(counter.size()); // 1

counter.clear();
console.log(counter.size()); // 0