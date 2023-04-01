const db = require('../models/index');
const uuid = require('uuid');

const User = db.user;

module.exports = class UserController {
    static async signup(req, res, next) {
        try {
            const body = req.body;
            if (!body.name || !body.password || !body.email) {
                return res.status(400).send({ message: 'Please complete all fields,name,password,email' });
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
            console.log(` Error errda` + err);
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