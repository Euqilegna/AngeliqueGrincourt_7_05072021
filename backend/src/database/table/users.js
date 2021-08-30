const Model = require("./model");
const crypto = require('crypto')

const tableName = "users";
const primaryKey = `${tableName}_id`;
const foreignKey = [];
const fields = [
  `${tableName}_lastName`,
  `${tableName}_firstName`,
  `${tableName}_mail`,
  `${tableName}_pwd`,
  `${tableName}_birthday`,
  `${tableName}_isAdmin`
];

class Users extends Model {
  constructor() {
    super(tableName, primaryKey, foreignKey, fields);
    this.superCreate = this.create
    this.create = async () => {
      this.data[`${tableName}_pwd`] = crypto.createHash('md5').update(this.data[`${tableName}_pwd`]).digest('hex')
      return await this.superCreate()
    }
  }
}

module.exports = Users;
