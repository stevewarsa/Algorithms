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
  private static createCharMap(str: string): any {
    let charMap = {};
    str
      .toLowerCase()
      .replace(/[^\w]/g, "") // replace every character that is not a letter or number
      .split("")
      .forEach(chr => (charMap[chr] ? charMap[chr]++ : (charMap[chr] = 1)));
    return charMap;
  }

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
  // must keep this in an array format and do the math that way
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
  // --- Directions
  // Write a function that accepts a positive number N.
  // The function should console log a pyramid shape
  // with N levels using the # character.  Make sure the
  // pyramid has spaces on both the left *and* right hand sides
  // --- Examples
  //   pyramid(1)
  //       '#'
  //   pyramid(2)
  //       ' # '
  //       '###'
  //   pyramid(3)
  //       '  #  '
  //       ' ### '
  //       '#####'
  //   pyramid(4)
  //       '   #   '
  //       '  ###  '
  //       ' ##### '
  //       '#######'
  //   pyramid(5)
  //       '    #    '
  //       '   ###   '
  //       '  #####  '
  //       ' ####### '
  //       '#########'
  public static pyramid(n: number) {
    let pyramidRows: string[] = [];
    let addonValue = 1;
    for (let i = 0; i < n; i++) {
      pyramidRows.push("#".repeat(i + addonValue));
      addonValue += 1;
    }
    pyramidRows.forEach(row =>
      console.log(
        this.padStringRightLeft(row, pyramidRows[pyramidRows.length - 1].length)
      )
    );
  }
  private static padStringRightLeft(str: string, toLength: number): string {
    let missingNumCharsEachSide = (toLength - str.length) / 2;
    return (
      " ".repeat(missingNumCharsEachSide) +
      str +
      " ".repeat(missingNumCharsEachSide)
    );
  }

  public static vowels(str: string): number {
    // BEST - regex solution
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;

    // iterative solution
    // let count = 0;
    // for (let chr of str.toUpperCase()) {
    //   if ("AEIOU".includes(chr)) {
    //     count++;
    //   }
    // }
    // return count;

    // my original solution
    // let vowelMap = this.createCharMap(str);
    // let vowelKeysOnly = Object.keys(vowelMap).filter(chr =>
    //   "AEIOU".includes(chr.toUpperCase())
    // );
    // let vowelCount = 0;
    // for (let vowel of vowelKeysOnly) {
    //   vowelCount += vowelMap[vowel];
    // }
    // return vowelCount;
  }

  // --- Directions
  // Write a function that accepts an integer N
  // and returns a NxN spiral matrix.
  // --- Examples
  //   matrix(2)
  //     [[1, 2],
  //     [4, 3]]
  //   matrix(3)
  //     [[1, 2, 3],
  //     [8, 9, 4],
  //     [7, 6, 5]]
  //  matrix(4)
  //     [[1,   2,  3, 4],
  //     [12, 13, 14, 5],
  //     [11, 16, 15, 6],
  //     [10,  9,  8, 7]]
  //
  // I didn't even try this one on my own...
  public static matrix(n: number): any[] {
    const results = [];
    for (let i = 0; i < n; i++) {
      results.push([]);
    }
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
      // top row
      for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;

      // right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;

      // bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;

      // start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
    return results;
  }
  // --- Directions
  // Print out the n-th entry in the fibonacci series.
  // The fibonacci series is an ordering of numbers where
  // each number is the sum of the preceeding two.
  // For example, the sequence
  //  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  // forms the first ten entries of the fibonacci series.
  // Example:
  //   fib(4) === 3

  // now, this is what the instructor showed
  // public static fib(n: number): number {
  //   if (n < 2) {
  //     return n;
  //   }
  //   return this.fib(n - 1) + this.fib(n - 2);
  // }

  // my try at a recursive solution (with no help)
  public static fib(n: number, result: number[] = [0, 1]): number {
    if (result.length - 1 < n) {
      result.push(result[result.length - 1] + result[result.length - 2]);
      return this.fib(n, result);
    }
    return result[result.length - 1];
  }
  // Here was my solution (without any help)
  // public static fib(n: number): number {
  //   // start with first 2 numbers populated
  //   let arr: number[] = [0, 1];
  //   for (let i = 2; i <= n; i++) {
  //     arr.push(arr[i - 1] + arr[i - 2]);
  //   }
  //   return arr[arr.length - 1];
  // }
}
