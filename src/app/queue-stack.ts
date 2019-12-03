import { Stack } from "./stack";
export class QueueStack {
  // this will be the "lifo" stack order
  private stack1: Stack = new Stack();
  // this will be the "fifo" queue order
  private stack2: Stack = new Stack();

  public add(item: any) {
    this.stack1.push(item);
    // anytime an item is pushed to stack1, we need to make sure that stack2 is populated
    // with all the items from stack1, but in reverse order
    this.populateStack2();
  }

  public remove(): any {
    return this.stack2.pop();
  }

  public peek(): any {
    return this.stack2.peek();
  }

  private populateStack2() {
    // clear out stack2
    while (this.stack2.pop()) {}
    // now transfer the elements from stack1 to stack2, reversing them in the process
    let popped = this.stack1.pop();
    let repopulateArray: any[] = [];
    while (popped) {
      this.stack2.push(popped);
      repopulateArray.push(popped);
      popped = this.stack1.pop();
    }
    // reverse the positioning so that the items will be added back to stack1 in the correct order
    repopulateArray.reverse();
    // now repopulate the stack1
    for (let i = 0; i < repopulateArray.length; i++) {
      this.stack1.push(repopulateArray[i]);
    }
  }
}

// This is the instructor's implementation
// class Queue {
//   constructor() {
//     this.first = new Stack();
//     this.second = new Stack();
//   }

//   add(record) {
//     this.first.push(record);
//   }

//   remove() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }

//     const record = this.second.pop();

//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }

//     return record;
//   }

//   peek() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }

//     const record = this.second.peek();

//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }

//     return record;
//   }
// }
