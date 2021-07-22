const { Schema } = require('mongoose');

const partSchema = new Schema(
    {
        gameId: {
            type: String,
            required: true
        },
        seller: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        link: {
            type: String
        },
        platform: {
            type: String
        },
        genre: {
            type: String
        }
    }
);

module.exports = partSchema;