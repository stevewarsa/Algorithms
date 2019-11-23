import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "test-project";

  public static fizzBizz(num: number): string {
    if (num % 15 === 0) {
      return "FizzBizz";
    } else if (num % 3 === 0) {
      return "fizz";
    } else if (num % 5 === 0) {
      return "bizz";
    } else {
      return num.toString();
    }
  }

  public static chunk(array: any[], size: number): any[] {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      index += size;
    }
    return chunked;
  }
  public static anagrams(stringA: string, stringB: string): boolean {
    return this.cleanup(stringA) === this.cleanup(stringB);
  }
  private static cleanup(str: string): string {
    return str
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  }
  // public static anagrams(stringA: string, stringB: string): boolean {
  //   let stringAChrs = AppComponent.createCharMap(stringA);
  //   let stringBChrs = AppComponent.createCharMap(stringB);
  //   if (Object.keys(stringBChrs).length !== Object.keys(stringAChrs).length) {
  //     return false;
  //   }
  //   for (let chr in stringAChrs) {
  //     if (!stringBChrs[chr] || stringAChrs[chr] !== stringBChrs[chr]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  // private static createCharMap(str: string): any {
  //   let charMap = {};
  //   str
  //     .toLowerCase()
  //     .replace(/[^\w]/g, "") // replace every character that is not a letter or number
  //     .split("")
  //     .forEach(chr => (charMap[chr] ? charMap[chr]++ : (charMap[chr] = 1)));
  //   return charMap;
  // }

  public static capitalize(str: string): string {
    let newSentence = "";
    for (let word of str.split(" ")) {
      newSentence += word.charAt(0).toUpperCase() + word.substr(1) + " ";
    }
    return newSentence.trim();
  }

  // alternative 'recursive' solution (basically copied from instructor)
  public static steps(num: number, row: number = 0, stair: string = "") {
    if (num === row) {
      return;
    }

    if (num === stair.length) {
      // this is the final recursive invocation for this row, so print the row
      console.log(stair);
      // reset the stair for the next row and then make the recursive call
      this.steps(num, row + 1, "");
      return;
    }

    // decide what character to append
    stair += stair.length <= row ? "#" : " ";

    // make the recursive call again with the new values - note: we're still building the
    // same console log message (row), so don't increment the row
    this.steps(num, row, stair);
  }
  // first solution (my first shot - no help)
  // public static steps(num: number) {
  //     for (let i = 0; i < num; i++) {
  //     let arr: string[] = [];
  //     for (let j = 0; j < num; j++) {
  //       arr.push(j <= i ? "#" : " ");
  //     }
  //     console.log(arr.join(""));
  //   }
  // }
}
