export class Node {
  public data: any;
  public next: any;

  constructor(data: any, next: any = null) {
    this.data = data;
    this.next = next;
  }
}
