'use strict'

const Solution = require('../solution')

describe('Resolve technical test', () => {
  let instanceSolution

  beforeEach(function () {
    instanceSolution = new Solution()
  })

  it('should return available dividers for this test', () => {
    let dividers = instanceSolution.getAvailableDividers()
    expect(dividers).toEqual([15, 3, 5])
  })

  it('should return the divisor for multiples of three', () => {
    let result = instanceSolution.isMultipleOnAvailableDivider(6)
    expect(result).toBe(3)
  })

  it('should return 5 for multiples of five', () => {
    let result = instanceSolution.isMultipleOnAvailableDivider(10)
    expect(result).toBe(5)
  })

  it('should return 15 for multiples of three and five', () => {
    let result = instanceSolution.isMultipleOnAvailableDivider(30)
    expect(result).toBe(15)
  })

  it('should return the evaluated value if it is not available multiple', () => {
    const evaluatedValue = 8
    let result = instanceSolution.isMultipleOnAvailableDivider(evaluatedValue)
    expect(result).toBe(8)
  })

  it('should return Linio for multiples of three', () => {
    let textResponse = instanceSolution.getPrintableValue(6)
    expect(textResponse).toEqual('Linio')
  })

  it('should return IT for multiples of five', () => {
    let textResponse = instanceSolution.getPrintableValue(10)
    expect(textResponse).toEqual('IT')
  })

  it('should return Linianos for multiples of three and five', () => {
    let textResponse = instanceSolution.getPrintableValue(30)
    expect(textResponse).toEqual('Linianos')
  })

  it('should return the evaluated value if it is not available multiple', () => {
    const evaluatedValue = 8
    let result = instanceSolution.getPrintableValue(evaluatedValue)
    expect(result).toBe(evaluatedValue)
  })

  it('should return total ocurrencies for every value', () => {
    let result = instanceSolution.getValues()
      .reduce((total, currentValue) => {
        total[currentValue] = (typeof total[currentValue] === 'undefined') ? 1 : total[currentValue] + 1
        return total
      }, {})
    expect(result['Linio']).toEqual(27)
    expect(result['IT']).toEqual(14)
    expect(result['Linianos']).toEqual(6)
  })
})
