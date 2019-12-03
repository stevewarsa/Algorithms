import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { Queue } from "./queue";
import { Stack } from "./stack";

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
});
