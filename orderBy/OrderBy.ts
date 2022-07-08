type OrderType = "crescent" | "decrescent";

// ---------------------------------------------------
// Class to sort array numbers
// ---------------------------------------------------
export class OrderBy {
  // Ordes types vars
  private static readonly CRESCENT = "crescent";
  private static readonly DECRESCENT = "decrescent";

  constructor() {}

  /*
   * Private Methods
   */

  // Sort array according to typo
  private static orderList(desorderedList: number[], type: OrderType) {
    // Array for sorted numbers
    const orderedList = [] as number[];

    // Iteration in list desorded
    desorderedList.forEach((desorderedListNumber) => {
      // Add the first number
      if (orderedList.length === 0) {
        orderedList.push(desorderedListNumber);
        return;
      }

      // Iterate in sorted list for add the current number
      orderedList.some((orderedListNumber, orderedListIndex) => {
        // Check if the current number is smaller or bigger, if true, add in index
        if (
          this.checkTypeforOrder(desorderedListNumber, orderedListNumber, type)
        ) {
          orderedList.splice(orderedListIndex, 0, desorderedListNumber);
          return true;
        }

        // Checks if it is in the last index of the array, if true, add in the end
        if (orderedList.length - 1 === orderedListIndex)
          orderedList.push(desorderedListNumber);
      });
    });

    return orderedList;
  }

  // Check the type and perform the respective logic
  private static checkTypeforOrder(
    desorderedListNumber: number,
    orderedListNumber: number,
    typeOrder: OrderType
  ): boolean {
    return typeOrder === this.CRESCENT
      ? desorderedListNumber <= orderedListNumber
      : desorderedListNumber >= orderedListNumber;
  }

  /*
   * Public Methods
   */

  // Returns an array arranged in descending order
  static decrescent(desorderedList: number[]): number[] {
    return this.orderList(desorderedList, this.DECRESCENT);
  }

  // returns an ascending array
  static crescent(desorderedList: number[]): number[] {
    return this.orderList(desorderedList, this.CRESCENT);
  }
}
