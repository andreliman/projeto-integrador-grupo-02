const bd = require("../database/models");

exports.createUser = ({ name, phone, email, hashed: password }) => {
    const creation_date = new Date();
    return bd.User.create({ name, phone, email, creation_date, password });
};