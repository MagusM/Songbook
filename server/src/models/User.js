module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    }, {});
    User.associate = function(models) {
      // associations can be defined here
    };
    return User;
  };