const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      return cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(col, vals, cb) {
    orm.create("burgers", col, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVal, condition, cb) {
    orm.updateOne("burgers", objColVal, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
