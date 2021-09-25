const bcrypt = require('bcryptjs');
const RegisterModel = require("../models/RegisterModel");

exports.createUser = ({ name, phone, email, password, passwordConfirm }) => {
    if (password != passwordConfirm) {
        throw new Error("Senhas não conferem!")
    };

    const hashed = bcrypt.hashSync(password);
    return RegisterModel.createUser({ name, phone, email, hashed });
};