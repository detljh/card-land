const mongoose = require('mongoose');
const User = mongoose.model('user');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SESSION_SECRET;
const validateRegisterInput = require('../../auth/register');
const validateLoginInput = require('../../auth/login');

module.exports = (app) => {
    app.route('/api/register')
    .post((req, res) => {
        const errors = validateRegisterInput(req.body);
        if (Object.keys(errors).length !== 0) {
            return res.status(400).json(errors);
        }

        const username = req.body.username;
        const password = req.body.password;

        User.checkUserExists(username, (err, user) => {
            if (err) return console.log(err);
            if (user) return res.status(400).json({ username: 'Username taken' });

            bcrypt.genSalt(10, (err, salt) => {
                if (err) return console.log(err);
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) return console.log(err);
                    
                    User.createUser(username, hash, (err, user) => {
                        if (err) return console.log(err);
                        res.json(user);
                    });
                });
            });
        });
    });

    app.route('/api/login')
    .post((req, res) => {
        const errors = validateLoginInput(req.body);
        if (Object.keys(errors).length !== 0) {
            return res.status(400).json(errors);
        }

        const username = req.body.username;
        const password = req.body.password;
        User.checkUserExists(username, (err, user) => {
            if (err) return console.log(err);
            if (!user) return res.status(400).json({ error: 'Username or password is incorrect' });

            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        name: user.username
                    };

                    jwt.sign(
                        payload,
                        secret,
                        { expiresIn: 31556926 },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer" + token
                            });
                        } 
                    );
                } else {
                    return res.status(400).json({ error: 'Username or password is incorrect' });
                }
            });
        });
    });

    app.route('/api/users')
    .get((req, res) => {
        User.find((err, users) => {
            res.json(users);
        });
    });
}