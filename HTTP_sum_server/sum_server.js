const express = require("express") // create express module object
const app = express() //init Express

/** Server should have 2 endpoints
 * 1. POST requests to /add should:
 * add a number from route param to total sum stored in code
 * if HTTP client forgets/gives erronenous number, respond
 * with "Bad Request" status code
 *
 * 2. GET requests to /sum should:
 * send total sum stored in code
 */

let sum = 0

function addHandler(request, response) {
    /** Will use query params, because I don't know how to respond
    * to errors with route params. */
    const name = request.query.name

    if (typeof name == 'undefined' || name.length == 0) {
        response.status(400)
        response.send('Give me a number please!')
        return //exit endpoint handler so nothing below runs.
    }

    /** Successful response status and send response. */
    response.status(200)
    response.send('Added your number to the running total!')

}