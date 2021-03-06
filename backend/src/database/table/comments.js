const Model = require("./model");
const mysql = require("../mysql");

const tableName = "comments";
const primaryKey = `${tableName}_id`;
const foreignKey = [];
const fields = [
  `${tableName}_author`,
  `${tableName}_content`,
  `${tableName}_post`
];

class Comments extends Model {
  constructor() {
    super(tableName, primaryKey, foreignKey, fields);
    this.getAll = async () => {
      const sql = `SELECT * FROM ${this.tableName} INNER JOIN users ON comments_author = users_id`;
      const [...rows] = await mysql.execute(sql);
      return rows
    };
  }
}

module.exports = Comments;
