// ---------------------------------------------------
// Class for order array numbers
// ---------------------------------------------------
export class OrderBy {
  static readonly exempleList = [1, 26, 57, -34, 0, -3] as number[];

  constructor() {}

  /*
   * Static Methods
   */

  static crescent(desordedList: number[] = this.exempleList): number[] {
    // Array for orded numbers
    const ordedList = [] as number[];

    // Iteration in list desorded
    desordedList.forEach((desordedListNumber) => {
      // Add the first number
      if (ordedList.length === 0) {
        ordedList.push(desordedListNumber);
        return;
      }

      // Iterate in orded list for add the current number
      ordedList.some((ordedListNumber, ordedListIndex) => {
        // Check if the current number is smaller, if true, add in index
        if (desordedListNumber <= ordedListNumber) {
          ordedList.splice(ordedListIndex, 0, desordedListNumber);
          return true;
        }

        // Checks if it is in the last index of the array, if true, add in the end
        if (ordedList.length - 1 === ordedListIndex)
          ordedList.push(desordedListNumber);
      });
    });

    return ordedList;
  }
}
