'use strict'

module.exports = class Solution {
  getAvailableDividers () {
    return [15, 3, 5]
  }
  isMultipleOnAvailableDivider (value) {
    const dividers = this.getAvailableDividers()
    for (let idx = 0; idx < dividers.length; idx++) {
      if (value % dividers[idx] === 0 && value > 0) {
        return dividers[idx]
      }
    }
    return value
  }
  getPrintableValue (value) {
    let divider = this.isMultipleOnAvailableDivider(value)
    switch (divider) {
      case 3:
        return 'Linio'
      case 5:
        return 'IT'
      case 15:
        return 'Linianos'
      default:
        return value
    }
  }
  getValues () {
    let values = []
    for (let i = 1; i <= 100; i++) {
      values.push(this.getPrintableValue(i))
    }
    return values
  }
  printValues () {
    return this.getValues().toString()
  }
}
