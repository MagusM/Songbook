const bcrypt = require('bcrypt');


function hashPassword (user, options) {
  const SALT_ROUNDS = 10;

  return bcrypt.hash(user.password, SALT_ROUNDS).then((hash) => {
    user.setDataValue('password', hash);
  });
  
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    }, {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        beforeSave: hashPassword
      }
    });
    User.associate = function(models) {
      // associations can be defined here
    };

    User.prototype.comparePassword = (password) => {
      return bcrypt.compareSync(password, this.password);
    };

    return User;
  };