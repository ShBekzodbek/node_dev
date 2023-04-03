const db = require('../models/index');
const uuid = require('uuid');
const signUpInputValidator = require('../utils/inputValidators/user/signup');
const generateAccessToken = require('../middlewares/auth/generateAccessToken');
const signInInputValidator = require('../utils/inputValidators/user/signin');

const User = db.user;

module.exports = class UserController {
    static async signup(req, res, next) {
        try {
            let body;
            const exists = await User.findOne({
                where:
                {
                    email: req.body.email
                }
            })
            if (exists) {
                return res.status(400).send({ message: 'User already exists' });
            }
            const { error, value } = signUpInputValidator(req.body);
            if (error) {
                return res.status(400).send(`Inputs not valid: ${error.details[0].message}`)
            } else {
                body = value;
            }
            const user = await User.create({
                id: uuid.v1(),
                name: body.name,
                email: body.email,
                password: body.password,
                about: body.about,
            });
            req.session.user = user;
            let token = generateAccessToken(body.email);
            const result = await user.save();
            console.log(`Result of req : ${result}\n Session.user : ${req.session.user}\n Token :${token}`);
            res.header('Authorization', 'Bearer' + token)
            return res.status(201).send({ message: 'User created', token: token });
        } catch (err) {
            console.log(` Error here in Signing up endpoint` + err);
        }
    };
    static async signin(req, res, next) {
        try {

            const { error, value } = signInInputValidator(req.body);
            if (error) {
                return res.status(400).send(`Inputs not valid: ${error.details[0].message}`)
            }
            const user = await User.findOne({
                where:
                {
                    email: value.email
                }
            });
            if (!user) {
                return res.status(401).send({ message: 'User not found' });
            }
            if (user.password != value.password || user.email != value.email) {
                return res.status(401).send({ message: 'Email or password  invalid' });
            } else {
                req.session.user = user;
                const token = generateAccessToken(user.email);
                return res.status(200).send({
                    message: `Signed in`,
                    token: token
                })
            }

        } catch (err) {
            console.log(`Error in signing up endpoint` + err)
        }

    };
    // static async logout(req, res, next) {

    // }; static async signup(req, res, next) {

    // }; static async signup(req, res, next) {

    // }; static async signup(req, res, next) {

    // }; static async signup(req, res, next) {

    // }; static async signup(req, res, next) {

    // };
}