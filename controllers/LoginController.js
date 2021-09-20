const bcrypt = require('bcryptjs');
const LoginModel = require('../models/LoginModel');

exports.logUser = async ({ email, password }) => {
    const userBd = await LoginModel.findUserByEmail({ email });
    const user = userBd[0];

    console.log(user);
    
    if (user === undefined) {
        throw new Error ("User not found");
    };

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
        throw new Error ("Incorrect password");
    };

    return user;
};