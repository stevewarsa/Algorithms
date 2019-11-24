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

  // Google code interview example - take an array and add one to it
  // for example [1,2,3,4] -> [1,2,3,5]
  // Also: [1,2,9,9] -> [1,3,0,0]
  // And: [9,9,9] -> [1,0,0,0]
  // do this without converting the array to a string, then a number,
  // must keep this in an array format
  public static addOne(arr: number[]): number[] {
    let result: Array<number> = new Array<number>(arr.length);
    let carry = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      let total = arr[i] + carry;
      if (total === 10) carry = 1;
      else carry = 0;
      // if the sum is 10, we should have zero in this position of the result
      // otherwise, we want the actual sum
      result[i] = total % 10;
    }
    // in the case where carry is still 1, this is the case where all the numbers where 9
    // so, we need a new array, with the first position = 1, and the rest zero
    if (carry === 1) {
      result = new Array<number>(arr.length + 1);
      result.fill(0);
      result[0] = 1;
    }
    return result;
  }
}
