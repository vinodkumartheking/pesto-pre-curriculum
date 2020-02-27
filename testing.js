const {
    describe,
    it,
    expect,
    matchers 
  } = require('./index')
  
  let executes = 0
  const noop = () => { executes += 1 }
  
  describe('describe', () => {
    it('executes a callback function', () => {
      const actual = describe('', noop)
  
      expect(executes).toBe(1)
    }) 
  })


  
function toAdd(a, b) {
    if (a, b) {
        return a + b;
    }
}

function toSubstract(a, b) {
    if (a, b) {
        return a - b;
    }
}

function toDivide(a, b) {
    if (a, b) {
        return a / b;
    }
}

function toMultiple(a, b) {
    if (a, b) {
        return a * b;
    }
}

// Testing all functions

describe('Testing add function -toAdd ', () => {
    it('adds two numbers', () => {
        const result = toAdd(1, 2)
        expect(result).toBe(3)
    })
})

describe('Testing subtract function -toSubstract ', () => {
    it('Substracts two numbers', () => {
        const result = toSubstract(5, 2)
        expect(result).toBe(3)
    })
})


describe('Testing divide function -toDivide ', () => {
    it('Divides two numbers', () => {
        const result = toSubstract(6, 2)
        expect(result).toBe(3)
    })
})

describe('Testing multiple function -toMultiple ', () => {
    it('Multiple two numbers', () => {
        const result = toSubstract(6, 2)
        expect(result).toBe(3)
    })
})