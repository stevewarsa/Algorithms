// this was my initial implementation, which successfully passed the tests
export class Queue {
  private items: any[] = [];

  public add(item: any): any {
    return this.items.unshift(item);
  }

  public remove(): any {
    return this.items.pop();
  }

  public peek(): any {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
}
