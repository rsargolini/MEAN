const User = require('../models').User;

module.exports = {
    create(req, res) {
        return User
            .create({
                user_name: req.body.user_name,
                password: req.body.password,
                is_admin: req.body.is_admin,
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
};