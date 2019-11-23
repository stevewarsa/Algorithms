import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let spy = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
    spy = spyOn(console, "log");
  }));

  afterEach(() => {
    if (spy) {
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
});
