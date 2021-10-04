/**
 * @author Sajeeb Ahamed <https://github.com/ahamed>
 *
 * The largest contiguous subarray sum is the summation of a set of contiguous numbers
 * from an array which is the maximum. For an array with positive numbers the solution is
 * easy, just sum all the numbers, but the problem is getting interesting when the input
 * array contains negative numbers.
 * A dynamic approach solve this problem in O(n) time. The algorithm solve this is
 * named "Kadane's Algorithm".
 *
 *
 * @param {array} array
 * @returns {number} The maximum summation of the contiguous array.
 */
export const largestContiguousSubarraySum = (array) => {
  /** Initialize the local and the final max values. */
  let finalMax = 0
  let localMax = 0

  /**
   * 1. Iterate through the every elements of the array.
   * 2. If the current element is greater than the summation of previous local max and the current element
   *    Then take the current element as the local max, otherwise the summation.
   * 3. If the new local max is larger than the final max value then take the local max as final max,
   *    Otherwise keep the previous one.
   */
  for (const element of array) {
    localMax = Math.max(element, localMax + element)
    finalMax = Math.max(finalMax, localMax)
  }

  return finalMax
}
