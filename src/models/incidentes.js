const mongoose = require ('mongoose');

const incidenteSchema = new mongoose. Schema({
    id : Number,
    type: String,
    name: String,
    crs: {
        type: String,
        properties: {
            name: String,
        }
    },
    features: [
        {
            type: String,
            properties: {
                Id_Ocorrencia: Number,
                Tipo_de_Ocorrencia: String, 
                Zona: String,
                Ponto_de_Referencia: String,
                Hora: Date,
                Data: Date,
                Detalhar_Ocorrencia: String,
                Fotografia: String,
            },
            geometry: {
                type: String,
                coordinates: [
                    Number,
                    Number
                ]
            }
        },
    ]

})   

const Incidentes = mongoose.model('Incidentes',incidenteSchema);

module.exports = Incidentes;