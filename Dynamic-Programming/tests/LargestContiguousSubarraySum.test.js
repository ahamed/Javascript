import { largestContiguousSubarraySum } from '../LargestContiguousSubarraySum'

describe('Largest Contiguous Subarray Sum', () => {
  it('Should return the summation: 7', () => {
    expect(largestContiguousSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3])).toBe(7)
  })
  it('Should return the summation: 6', () => {
    expect(largestContiguousSubarraySum([-2, -3, 4, -1, -3, 1, 5, -3])).toBe(6)
  })
  it('Should return the summation: 15', () => {
    expect(largestContiguousSubarraySum([1, 2, 3, 4, 5])).toBe(15)
  })
  it('Should return the summation: 9', () => {
    expect(largestContiguousSubarraySum([1, 2, -3, 4, 5])).toBe(9)
  })
  it('Should return the summation: 4', () => {
    expect(largestContiguousSubarraySum([1, 2, -3, 4, -5])).toBe(4)
  })
  it('Should return the summation: 0', () => {
    expect(largestContiguousSubarraySum([-1, -2, -3, -4, -5])).toBe(0)
  })
  it('Should return the summation: 9', () => {
    expect(largestContiguousSubarraySum([5, -5, 9, -2, 1, -1, 0, -5])).toBe(9)
  })
})
