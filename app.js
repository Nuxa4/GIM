const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end();
    })
})

server.listen(port, function (error) {
    if (error) {
        console.log("Something went wrong", error)
    }
    else {
        console.log("Server is listening on port" + port);
    }
}

)

// Routes 
/**
 * @swagger
 * /getAllPoint:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

 app.get('/incidentes', (req, res) => {
    incidentes.find({}).then((incidentes) => {
        res.send(incidentes);
    }).catch((error) => {
        res.status(500).send(error);
    })
})


/**
 * @swagger
 * /getAllZone:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

 app.get('/incidentes', (req, res) => {
    incidentes.find({}).then((incidentes) => {
        res.send(incidentes);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

/**
 * @swagger
 * /createPoint:
 *  post:
 *    description: Use to request all customers
 *    responses:
 *      '201':
 *        description: A successful response
 */
app.post('/send', (req, res) => {

    Incidentes.create(req.body).then((incidentes) => {
        res.status(201).send(incidentes);
    }).catch((error) => {
        res.status(400)
    })

})



/**
 * @swagger
 * /updatePoint:
 *  put:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
 app.put('/updated', (req, res) => {

    Incidentes.create(req.body).then((incidentes) => {
        res.status(201).send(incidentes);
    }).catch((error) => {
        res.status(400)
    })

})

