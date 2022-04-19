require('dotenv').config();
const { MongoClient } = require('mongodb');

const USERNAME = process.env.MONGO_USERNAME;
const PASSWORD = process.env.MONGO_PASSWORD;

console.log(USERNAME, PASSWORD);

const URL = `mongodb://${USERNAME}:${PASSWORD}@mongo:27017/?maxPoolSize=20&w=majority`;

const client = new MongoClient(URL);

module.exports = Object.freeze(Object.assign({}, {
    client,
    async connect() {
        await client.connect();
        return client.db('genius-fit');
    },
    async close() {
        client.close();
    }
}));