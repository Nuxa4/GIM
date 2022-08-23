require('./db/mongoose');
const express = require('express');
const { $ } = require('./models/incidentes');
const incidentes = require('./models/incidentes');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

swaggerDocument = require('./swagger.json');

const port = process.env.PORT || 3000;

// Extended: 
const swaggerOptions = {
    swaggerDefinition: {
        info:  
        {
            "version": "1.0.0", 
            "title": "Incidentes",
            "description": "My User Project Application API",
            "license": {
              "name": "MIT",
              "url": "https://opensource.org/licenses/MIT"
            }
          },
          "host": "localhost:3000",
    "basePath": "/",
    "tags": [
      {
        "name": "Base de Dados",
        "description": "API for users in the system"
      }
    ],
    "schemes": ["http"],
    "consumes": ["application/json"],
    "produces": ["application/json"]

   },
   // ['routes/*.js']  
   apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));


/*
app.get('/incidente', (req, res) => {
        res.send('Nha Zona')
    })

app.get('/about', (req, res) => {
        res.send('<h1>This is about page!</h1>');
    })

 app.post('/send', (req, res) => {

        Incidentes.create(req.body).then((incidentes) => {
            res.status(201).send(incidentes);
        }).catch((error) => {
            res.status(400)
        })

    })

 // 1 - GetAllPoints - Method Get - Retorn Geojson com todos os pontos


// 2 - GetAllZones - Method Get - Retorn Geojson com todos as zonas - Divisao Administrativa

// 3 - CreatePoint - Method Post - Guarda um novo ponto (incidente) criado


// 4 - UpdatePoint - Method Put - Actualiza um ponto (incidente) criado

 app.get('/incidentes/:id', (req, res) => {
        Incidentes.findById(req.params.id).then((incidentes) => {
            if (!incidentes) {
                return res.status(404).send();
            }

        }).catch((error) => {
            res.status(500).send(error);
        })
    })
*/
/*
 const swaggerOptions = {
        swaggerDefinition: {
            info: {
                title: 'Employee API',
                version: '1.0.0'
            }
        },
        apis: ['api.js'],
    }  

 const swaggerDocs = swaggerJSDoc(incidentes.js);
    //app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));  

    // app.listen(3000, (req, resp) => {
    //     console.log('app is running in port 3000!');
    // })  

    // // Routes
    // app.get("/ custumers", (req, rest) => {
    //     res.send("Custumer results");
    // });

    // app.listen(port, () => {
    //     console.log(`Server listening on port ${port}`);
    // });*/
    app.listen(port, () => {
        console.log(`Server listening on port  ${port}`);

    });


