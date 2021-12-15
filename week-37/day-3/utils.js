const getFormattedString = (request) => {

    const dateStr = new Date().toUTCString()

    return  `\nRequest Received on ${dateStr}, Path: ${request.path} Query Params: ${ JSON.stringify(request.query) }`
}


module.exports = { getFormattedString }