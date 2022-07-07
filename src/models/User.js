const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
const { hashPassword } = require("../hooks");

class User extends Model {
  getUser() {
    return {
      id: this.id,
      title: this.title,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      profileImageUrl: this.profileImageUrl,
    };
  }
  async checkPassword(password) {
    const isValid = await bcrypt.compare(password, this.password);
    return isValid;
  }
}
const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  profileImageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:
      "https://files.slack.com/files-pri/T0384D4BTK2-F03PEMEFZT2/image.png",
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "user",
  hooks: {
    beforeCreate: hashPassword,
  },
};

User.init(schema, options);

module.exports = User;
