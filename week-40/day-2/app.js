

function isEven(num){
    if (!Number(num)) throw new Error("Invalid Params")
    return (num % 2) === 0
}


function makeListUpperCase(listOfWords){
    return listOfWords.map(word => word.toUpperCase())
}



module.exports = { isEven , makeListUpperCase}
