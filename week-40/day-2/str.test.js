const { makeListUpperCase } = require('./app')

const testArray = ['Mango', 'Apple', 'Watermelon']

test('Test Array Contains', () => {
    
    expect(makeListUpperCase(testArray)).toEqual(expect.arrayContaining(['MANGO', "WATERMELON"]))
})

test('should NOT contain', () => {
    expect(makeListUpperCase(testArray)).not.toEqual(['MANGO', "WATERMELON"])
})
