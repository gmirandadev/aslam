const { v4: uuidv4 } = require('uuid'); 
const mongo = require('../libs/client/mongo');

class User {

    async getById(id) {    
        try {
            const mongoDB = await mongo.connect();
            return await mongoDB.collection('users').findOne({id: id});
        } catch (err) {
            console.error(err);
            throw err;
        } finally {
            mongo.close();
        }
    }

    async getByAge(age) {    
        try {
            const mongoDB = await mongo.connect();
            return await mongoDB.collection('users').find({age: age}).toArray();
        } catch (err) {
            console.error(err);
            throw err;
        } finally {
            mongo.close();
        }
    }

    async create(user) {
        this.setUserId(user);

        try {
            const mongoDB = await mongo.connect();
            await mongoDB.collection('users').insertOne(user);
            return user;
        } catch (err) {
            console.error(err);
            throw err;
        } finally {
            mongo.close();
        }
    }

    //THIS IS NOT A CLIENT FUTURE / JUST AN DEV FEATURE
    async deleteAll() { 
        const mongoDB = await mongo.connect();
        try {
            return await mongoDB.collection('users').deleteMany({});
        } catch (err) {
            throw err;
        } finally {
            mongo.close();
        }
    }

    setUserId(user) {
        user.id = uuidv4(); //use _id or a new property id????
    }

}

module.exports = new User();