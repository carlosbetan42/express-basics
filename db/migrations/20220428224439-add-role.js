'use strict';

const { DataTypes } = require("sequelize/types");
const { USER_TABLE } = require("../models/user.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'role', {
      role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'customer'
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'role');
  }
};
