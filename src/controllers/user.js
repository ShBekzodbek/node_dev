const db = require('../models/index');
const uuid = require('uuid');
const signUpValidator = require('../utils/inputValidators/signup');

const User = db.user;

module.exports = class UserController {
    static async signup(req, res, next) {
        try {
            const exists = await User.find({
                where:
                {
                    email: req.body.email
                }
            })
            if (exists) {
                return res.status(400).send({ message: 'User already exists' });
            }
            const { error, value } = signUpValidator(req.body);
            if (error) {
                return res.status(400).send(`Inputs not valid: ${error.details[0].message}`)
            } else {
                req.body = value;
            }
            const user = await User.create({
                id: uuid.v1(),
                name: body.name,
                email: body.email,
                password: body.password,
                about: body.about,
            })
            const result = await user.save();
            console.log(result);
            return res.status(201).send({ message: 'User created' });
        } catch (err) {
            console.log(` Error here in Signing up endpoint` + err.details);
        }
    };
    static async signin(req, res, next) {

    };
    // static async logout(req, res, next) {

    // }; static async signup(req, res, next) {

    // }; static async signup(req, res, next) {

    // }; static async signup(req, res, next) {

    // }; static async signup(req, res, next) {

    // }; static async signup(req, res, next) {

    // };
}