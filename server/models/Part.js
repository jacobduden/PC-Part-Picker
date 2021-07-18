const { Schema } = require('mongoose');

const partSchema = new Schema(
    {
        partId: {
            type: String,
            required: true
        },
        seller: {
            type: String,
            required: true
        },
        partName: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String
        },
        link: {
            type: String
        }
    }
);

module.exports = partSchema;