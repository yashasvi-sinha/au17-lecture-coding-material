const { isEven } = require('./app')

// const {  } = require('jest')


test('Check if 3 is even', () => {

    const result = isEven(3)
    expect(result).toBe(false)

})

test('Check if -45 is even', () => {
    expect(isEven(-45)).toBe(false)
})


// test('Return "Invalid Param" for "abc"', () => {
//     expect(isEven("abc")).toBe("Invalid Param")
// })

test('For "abc" throw an error', () => {
    expect( () => {

        isEven("abc")

    }  ).toThrow(Error)
})


test('For "abc" throw an error with message as "Invalid Params"', () => {
    expect( () => {
        
        isEven("abc")

    }  ).toThrow("Invalid Params")
})



const { makeListUpperCase } = require('./app')

const testArray = ['Mango', 'Apple', 'Watermelon']

describe('Tests for makeListUpperCase', () => {

    test('Test Array Contains', () => {
    
        expect(makeListUpperCase(testArray)).toEqual(expect.arrayContaining(['MANGO', "WATERMELON"]))
    })
    
    test('should NOT contain', () => {
        expect(makeListUpperCase(testArray)).not.toEqual(['MANGO', "WATERMELON"])
    })
    
})



