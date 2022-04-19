const user = require('../models/user');
const mongo = require('../libs/client/mongo');

module.exports = (router) => {

    router.get('/user/:id', async (req, res) => {
        try {
            const result = await user.getById(req.params.id);
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).send(sanitizeHtml(`Not found user with ${req.params.id}`));
            }
        } catch (err) {
            res.send('Failed');
            console.error(err);
        }
    });

    router.get('/users', async (req, res) => {
        try {
            const result = await user.getByAge(Number(req.query.age));
            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).send('Not found users');
            }
        } catch (err) {
            res.send('Failed');
            console.error(err);
        }
    });

    router.post('/user', async (req, res) => {
        try {
            const result = await user.create(req.body);
            res.status(201).json(result);
        } catch (err) {
            res.send(`Not possible to create user, cause: ${err}`);
            console.error(err);
        }
    });

    router.delete('/users/', async (req, res) => {
        try {
            const result = await user.deleteAll();
            res.status(200).json(result);
        } catch (err) {
            res.send(`Not possible to create user, cause: ${err}`);
            console.error(err);
        }
    });

}