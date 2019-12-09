import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { Queue } from "./queue";
import { Stack } from "./stack";
import { QueueStack } from "./queue-stack";
import { List } from "./list";
import { Node } from "./node";

describe("AppComponent", () => {
  let spy = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
    // this allows me to test what is being written to the console
    spy = spyOn(console, "log");
  }));

  afterEach(() => {
    if (spy) {
      // after each test reset what was written to the console
      spy.calls.reset();
    }
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("test-project");
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to test-project!"
    );
  });

  it("Should return correct string for #15", () => {
    expect(AppComponent.fizzBizz(15)).toEqual("FizzBizz");
  });
  it("Should return correct string for #9", () => {
    expect(AppComponent.fizzBizz(9)).toEqual("fizz");
  });
  it("Should return correct string for #25", () => {
    expect(AppComponent.fizzBizz(25)).toEqual("bizz");
  });
  it("Should return correct string for #7", () => {
    expect(AppComponent.fizzBizz(7)).toEqual("7");
  });
  it("Should return 2 chunks [[1,2],[3,4]]", () => {
    expect(AppComponent.chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });
  it("Should return true for 'rail safety', 'fairy tales'", () => {
    expect(AppComponent.anagrams("rail safety", "fairy tales")).toBeTruthy();
  });
  it("Should return true for 'RAIL! SAFETY!', 'fairy tales'", () => {
    expect(AppComponent.anagrams("RAIL! SAFETY!", "fairy tales")).toBeTruthy();
  });
  it("Should return false for 'Hi there', 'Bye there'", () => {
    expect(AppComponent.anagrams("Hi there", "Bye there")).toBeFalsy();
  });
  it("anagrams function exists", () => {
    expect(typeof AppComponent.anagrams).toEqual("function");
  });

  it('"hello" is an anagram of "llohe"', () => {
    expect(AppComponent.anagrams("hello", "llohe")).toBeTruthy();
  });

  it('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(AppComponent.anagrams("Whoa! Hi!", "Hi! Whoa!")).toBeTruthy();
  });

  it('"One One" is not an anagram of "Two two two"', () => {
    expect(AppComponent.anagrams("One One", "Two two two")).toBeFalsy();
  });

  it('"One one" is not an anagram of "One one c"', () => {
    expect(AppComponent.anagrams("One one", "One one c")).toBeFalsy();
  });

  it('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(
      AppComponent.anagrams(
        "A tree, a life, a bench",
        "A tree, a fence, a yard"
      )
    ).toBeFalsy();
  });
  it("Capitalize is a function", () => {
    expect(typeof AppComponent.capitalize).toEqual("function");
  });

  it("capitalizes the first letter of every word in a sentence", () => {
    expect(AppComponent.capitalize("hi there, how is it going?")).toEqual(
      "Hi There, How Is It Going?"
    );
  });

  it("capitalizes the first letter", () => {
    expect(
      AppComponent.capitalize("i love breakfast at bill miller bbq")
    ).toEqual("I Love Breakfast At Bill Miller Bbq");
  });
  it("steps is a function", () => {
    expect(typeof AppComponent.steps).toEqual("function");
  });

  it("steps called with n = 1", () => {
    AppComponent.steps(1);
    expect(console.log).toHaveBeenCalledWith("#");
  });

  it("steps called with n = 2", () => {
    AppComponent.steps(2);
    expect(console.log).toHaveBeenCalledWith("# ");
    expect(console.log).toHaveBeenCalledWith("##");
  });

  it("steps called with n = 3", () => {
    AppComponent.steps(3);
    expect(console.log).toHaveBeenCalledWith("#  ");
    expect(console.log).toHaveBeenCalledWith("## ");
    expect(console.log).toHaveBeenCalledWith("###");
  });
  it("Should add one to and return [1, 2, 3, 5]", () => {
    expect(AppComponent.addOne([1, 2, 3, 4])).toEqual([1, 2, 3, 5]);
  });
  it("Should add one to and return [1, 3, 0, 0]", () => {
    expect(AppComponent.addOne([1, 2, 9, 9])).toEqual([1, 3, 0, 0]);
  });
  it("Should add one to and return [1, 0, 0, 0]", () => {
    expect(AppComponent.addOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
  it("pyramid is a function", () => {
    expect(typeof AppComponent.pyramid).toEqual("function");
  });

  it("prints a pryamid for n = 2", () => {
    AppComponent.pyramid(2);
    expect(console.log).toHaveBeenCalledWith(" # ");
    expect(console.log).toHaveBeenCalledWith("###");
  });

  it("prints a pryamid for n = 3", () => {
    AppComponent.pyramid(3);
    expect(console.log).toHaveBeenCalledWith("  #  ");
    expect(console.log).toHaveBeenCalledWith(" ### ");
    expect(console.log).toHaveBeenCalledWith("#####");
  });

  it("prints a pryamid for n = 4", () => {
    AppComponent.pyramid(4);
    expect(console.log).toHaveBeenCalledWith("   #   ");
    expect(console.log).toHaveBeenCalledWith("  ###  ");
    expect(console.log).toHaveBeenCalledWith(" ##### ");
    expect(console.log).toHaveBeenCalledWith("#######");
  });
  it("Vowels is a function", () => {
    expect(typeof AppComponent.vowels).toEqual("function");
  });

  it("returns the number of vowels used", () => {
    expect(AppComponent.vowels("aeiou")).toEqual(5);
  });

  it("returns the number of vowels used when they are capitalized", () => {
    expect(AppComponent.vowels("AEIOU")).toEqual(5);
  });

  it("returns the number of vowels used", () => {
    expect(AppComponent.vowels("abcdefghijklmnopqrstuvwxyz")).toEqual(5);
  });

  it("returns the number of vowels used", () => {
    expect(AppComponent.vowels("bcdfghjkl")).toEqual(0);
  });
  it("matrix is a function", () => {
    expect(typeof AppComponent.matrix).toEqual("function");
  });

  it("matrix produces a 2x2 array", () => {
    const m = AppComponent.matrix(2);
    expect(m.length).toEqual(2);
    expect(m[0]).toEqual([1, 2]);
    expect(m[1]).toEqual([4, 3]);
  });

  it("matrix produces a 3x3 array", () => {
    const m = AppComponent.matrix(3);
    expect(m.length).toEqual(3);
    expect(m[0]).toEqual([1, 2, 3]);
    expect(m[1]).toEqual([8, 9, 4]);
    expect(m[2]).toEqual([7, 6, 5]);
  });

  it("matrix produces a 4x4 array", () => {
    const m = AppComponent.matrix(4);
    expect(m.length).toEqual(4);
    expect(m[0]).toEqual([1, 2, 3, 4]);
    expect(m[1]).toEqual([12, 13, 14, 5]);
    expect(m[2]).toEqual([11, 16, 15, 6]);
    expect(m[3]).toEqual([10, 9, 8, 7]);
  });
  it("Fib function is defined", () => {
    expect(typeof AppComponent.fib).toEqual("function");
  });

  it("calculates correct fib value for 1", () => {
    expect(AppComponent.fib(1)).toEqual(1);
  });

  it("calculates correct fib value for 2", () => {
    expect(AppComponent.fib(2)).toEqual(1);
  });

  it("calculates correct fib value for 3", () => {
    expect(AppComponent.fib(3)).toEqual(2);
  });

  it("calculates correct fib value for 4", () => {
    expect(AppComponent.fib(4)).toEqual(3);
  });

  it("calculates correct fib value for 39", () => {
    expect(AppComponent.fib(39)).toEqual(63245986);
  });

  it("calculates correct fib value for 50", () => {
    expect(AppComponent.fib(50)).toEqual(12586269025);
  });

  it("calculates correct fib value for 100", () => {
    expect(AppComponent.fib(100)).toEqual(354224848179262000000);
  });

  it("can add elements to a queue", () => {
    const q = new Queue();
    expect(() => {
      q.add(1);
    }).not.toThrow();
  });

  it("can remove elements from a queue", () => {
    const q = new Queue();
    expect(() => {
      q.add(1);
      q.remove();
    }).not.toThrow();
  });

  it("Order of elements is maintained", () => {
    const q = new Queue();
    q.add(1);
    q.add(2);
    q.add(3);
    expect(q.remove()).toEqual(1);
    expect(q.remove()).toEqual(2);
    expect(q.remove()).toEqual(3);
    expect(q.remove()).toEqual(undefined);
  });
  it("peek returns, but does not remove, the first value", () => {
    const q = new Queue();
    q.add(1);
    q.add(2);
    expect(q.peek()).toEqual(1);
    expect(q.peek()).toEqual(1);
    expect(q.remove()).toEqual(1);
    expect(q.remove()).toEqual(2);
  });

  it("weave is a function", () => {
    expect(typeof AppComponent.weave).toEqual("function");
  });

  it("weave can combine two queues", () => {
    const one = new Queue();
    one.add(1);
    one.add(2);
    one.add(3);
    one.add(4);
    const two = new Queue();
    two.add("one");
    two.add("two");
    two.add("three");
    two.add("four");

    const result = AppComponent.weave(one, two);
    expect(result.remove()).toEqual(1);
    expect(result.remove()).toEqual("one");
    expect(result.remove()).toEqual(2);
    expect(result.remove()).toEqual("two");
    expect(result.remove()).toEqual(3);
    expect(result.remove()).toEqual("three");
    expect(result.remove()).toEqual(4);
    expect(result.remove()).toEqual("four");
    expect(result.remove()).toBeUndefined();
  });

  it("stack can add and remove items", () => {
    const s = new Stack();
    s.push(1);
    expect(s.pop()).toEqual(1);
    s.push(2);
    expect(s.pop()).toEqual(2);
  });

  it("stack can follows first in, last out", () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.pop()).toEqual(3);
    expect(s.pop()).toEqual(2);
    expect(s.pop()).toEqual(1);
  });

  it("peek returns the first element but doesnt pop it", () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.peek()).toEqual(3);
    expect(s.pop()).toEqual(3);
    expect(s.peek()).toEqual(2);
    expect(s.pop()).toEqual(2);
    expect(s.peek()).toEqual(1);
    expect(s.pop()).toEqual(1);
  });
  it("can add elements to a queue", () => {
    const q = new QueueStack();
    expect(() => {
      q.add(1);
    }).not.toThrow();
  });

  it("can remove elements from a queue", () => {
    const q = new QueueStack();
    expect(() => {
      q.add(1);
      q.remove();
    }).not.toThrow();
  });

  it("Order of elements is maintained", () => {
    const q = new QueueStack();
    q.add(1);
    q.add(2);
    q.add(3);
    expect(q.remove()).toEqual(1);
    expect(q.remove()).toEqual(2);
    expect(q.remove()).toEqual(3);
    expect(q.remove()).toEqual(undefined);
  });

  it("peek returns, but does not remove, the first value", () => {
    const q = new QueueStack();
    q.add(1);
    q.add(2);
    let peek1 = q.peek();
    expect(peek1).toEqual(1);
    let peek2 = q.peek();
    expect(peek2).toEqual(1);
    let remove1 = q.remove();
    expect(remove1).toEqual(1);
    let remove2 = q.remove();
    expect(remove2).toEqual(2);
  });
});

describe("These are the linked list tests", () => {
  it("List is a class", () => {
    expect(typeof List.prototype.constructor).toEqual("function");
  });

  it("Node is a class", () => {
    expect(typeof Node.prototype.constructor).toEqual("function");
  });
});
describe("A Node", () => {
  it('has properties "data" and "next"', () => {
    const node = new Node("a", "b");
    expect(node.data).toEqual("a");
    expect(node.next).toEqual("b");
  });
});

describe("Insert First", () => {
  it("appends a node to the start of the list", () => {
    const l = new List();
    l.insertFirst(1);
    expect(l.head.data).toEqual(1);
    l.insertFirst(2);
    expect(l.head.data).toEqual(2);
  });
});

describe("Size", () => {
  it("returns the number of items in the linked list", () => {
    const l = new List();
    expect(l.size()).toEqual(0);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    expect(l.size()).toEqual(4);
  });
});

describe("GetFirst", () => {
  it("returns the first element", () => {
    const l = new List();
    l.insertFirst(1);
    expect(l.getFirst().data).toEqual(1);
    l.insertFirst(2);
    expect(l.getFirst().data).toEqual(2);
  });
});

describe("GetLast", () => {
  it("returns the last element", () => {
    const l = new List();
    l.insertFirst(2);
    expect(l.getLast()).toEqual(new Node(2));
    l.insertFirst(1);
    expect(l.getLast()).toEqual(new Node(2));
  });
});

describe("Clear", () => {
  it("empties out the list", () => {
    const l = new List();
    expect(l.size()).toEqual(0);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    expect(l.size()).toEqual(4);
    l.clear();
    expect(l.size()).toEqual(0);
  });
});

xdescribe("RemoveFirst", () => {
  it("removes the first node when the list has a size of one", () => {
    const l = new List();
    l.insertFirst("a");
    l.removeFirst();
    expect(l.size()).toEqual(0);
    expect(l.getFirst()).toEqual(null);
  });

  it("removes the first node when the list has a size of three", () => {
    const l = new List();
    l.insertFirst("c");
    l.insertFirst("b");
    l.insertFirst("a");
    l.removeFirst();
    expect(l.size()).toEqual(2);
    expect(l.getFirst().data).toEqual("b");
    l.removeFirst();
    expect(l.size()).toEqual(1);
    expect(l.getFirst().data).toEqual("c");
  });
});

xdescribe("RemoveLast", () => {
  it("RemoveLast removes the last node when list is empty", () => {
    const l = new List();
    expect(() => {
      l.removeLast();
    }).not.toThrow();
  });

  it("RemoveLast removes the last node when list is length 1", () => {
    const l = new List();
    l.insertFirst("a");
    l.removeLast();
    expect(l.head).toEqual(null);
  });

  it("RemoveLast removes the last node when list is length 2", () => {
    const l = new List();
    l.insertFirst("b");
    l.insertFirst("a");

    l.removeLast();

    expect(l.size()).toEqual(1);
    expect(l.head.data).toEqual("a");
  });

  it("RemoveLast removes the last node when list is length 3", () => {
    const l = new List();
    l.insertFirst("c");
    l.insertFirst("b");
    l.insertFirst("a");
    l.removeLast();

    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual("b");
  });
});

xdescribe("InsertLast", () => {
  it("adds to the end of the list", () => {
    const l = new List();
    l.insertFirst("a");

    l.insertLast("b");

    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual("b");
  });
});

xdescribe("GetAt", () => {
  it("returns the node at given index", () => {
    const l = new List();
    expect(l.getAt(10)).toEqual(null);

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    expect(l.getAt(0).data).toEqual(1);
    expect(l.getAt(1).data).toEqual(2);
    expect(l.getAt(2).data).toEqual(3);
    expect(l.getAt(3).data).toEqual(4);
  });
});

xdescribe("RemoveAt", () => {
  it("removeAt doesnt crash on an empty list", () => {
    const l = new List();
    expect(() => {
      l.removeAt(0);
      l.removeAt(1);
      l.removeAt(2);
    }).not.toThrow();
  });

  it("removeAt doesnt crash on an index out of bounds", () => {
    const l = new List();
    expect(() => {
      const l = new List();
      l.insertFirst("a");
      l.removeAt(1);
    }).not.toThrow();
  });

  it("removeAt deletes the first node", () => {
    const l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(0).data).toEqual(1);
    l.removeAt(0);
    expect(l.getAt(0).data).toEqual(2);
  });

  it("removeAt deletes the node at the given index", () => {
    const l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(1).data).toEqual(2);
    l.removeAt(1);
    expect(l.getAt(1).data).toEqual(3);
  });

  it("removeAt works on the last node", () => {
    const l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(3).data).toEqual(4);
    l.removeAt(3);
    expect(l.getAt(3)).toEqual(null);
  });
});

xdescribe("InsertAt", () => {
  it("inserts a new node with data at the 0 index when the list is empty", () => {
    const l = new List();
    l.insertAt("hi", 0);
    expect(l.getFirst().data).toEqual("hi");
  });

  it("inserts a new node with data at the 0 index when the list has elements", () => {
    const l = new List();
    l.insertLast("a");
    l.insertLast("b");
    l.insertLast("c");
    l.insertAt("hi", 0);
    expect(l.getAt(0).data).toEqual("hi");
    expect(l.getAt(1).data).toEqual("a");
    expect(l.getAt(2).data).toEqual("b");
    expect(l.getAt(3).data).toEqual("c");
  });

  it("inserts a new node with data at a middle index", () => {
    const l = new List();
    l.insertLast("a");
    l.insertLast("b");
    l.insertLast("c");
    l.insertLast("d");
    l.insertAt("hi", 2);
    expect(l.getAt(0).data).toEqual("a");
    expect(l.getAt(1).data).toEqual("b");
    expect(l.getAt(2).data).toEqual("hi");
    expect(l.getAt(3).data).toEqual("c");
    expect(l.getAt(4).data).toEqual("d");
  });

  it("inserts a new node with data at a last index", () => {
    const l = new List();
    l.insertLast("a");
    l.insertLast("b");
    l.insertAt("hi", 2);
    expect(l.getAt(0).data).toEqual("a");
    expect(l.getAt(1).data).toEqual("b");
    expect(l.getAt(2).data).toEqual("hi");
  });

  it("insert a new node when index is out of bounds", () => {
    const l = new List();
    l.insertLast("a");
    l.insertLast("b");
    l.insertAt("hi", 30);

    expect(l.getAt(0).data).toEqual("a");
    expect(l.getAt(1).data).toEqual("b");
    expect(l.getAt(2).data).toEqual("hi");
  });
});

xdescribe("ForEach", () => {
  it("applies a transform to each node", () => {
    const l = new List();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    l.forEach(node => {
      node.data += 10;
    });

    expect(l.getAt(0).data).toEqual(11);
    expect(l.getAt(1).data).toEqual(12);
    expect(l.getAt(2).data).toEqual(13);
    expect(l.getAt(3).data).toEqual(14);
  });
});

xdescribe("for...of loops", () => {
  it("works with the linked list", () => {
    const l = new List();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    // TODO
    // for (let node of l) {
    //   node.data += 10;
    // }

    expect(l.getAt(0).data).toEqual(11);
    expect(l.getAt(1).data).toEqual(12);
    expect(l.getAt(2).data).toEqual(13);
    expect(l.getAt(3).data).toEqual(14);
  });

  it("for...of works on an empty list", () => {
    const l = new List();
    expect(() => {
      // TODO
      // for (let node of l) {
      // }
    }).not.toThrow();
  });
});
