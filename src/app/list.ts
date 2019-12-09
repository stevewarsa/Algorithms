import { Node } from "./node";

export class List {
  head: any;

  constructor() {
    this.head = null;
  }

  public insertFirst(data: any) {
    this.head = new Node(data, this.head);
  }

  // SW[Sun 08/12/19 05:57:49] this is my initial implementation
  public size(): number {
    let nodeCounter = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
      nodeCounter++;
    }
    return nodeCounter;
  }

  public getFirst(): any {
    return this.head;
  }

  // SW[Sun 08/12/19 06:25:42] This is my implemention
  public getLast(): any {
    let lastNode = this.head;
    while (lastNode) {
      if (lastNode.next) lastNode = lastNode.next;
      else break;
    }
    return lastNode;
  }

  public clear() {
    this.head = null;
  }

  public removeFirst() {}

  public removeLast() {}

  public insertLast(val: any) {}

  public getAt(num: number): any {
    return null;
  }

  public removeAt(index: number) {}

  public insertAt(val: any, index: number) {}

  public forEach(func: any) {}
}
