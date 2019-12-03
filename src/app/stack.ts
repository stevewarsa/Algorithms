export class Stack {
  private items: any[] = [];
  public push(item: any) {
    this.items.push(item);
  }

  public pop(): any {
    return this.items.pop();
  }

  public peek(): any {
    return this.items[this.items.length - 1];
  }
}
