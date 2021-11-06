const db = require("../database/models");

exports.findUserByEmail = ({ email }) => {
  const user = db.User.findAll({ where: { email: email } }).then((rows) =>
    rows.map((row) => row.dataValues)
  );
  return user;
};
