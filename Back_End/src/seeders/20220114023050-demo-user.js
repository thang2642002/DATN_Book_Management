"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "User",
      [
        {
          email: "tranthang0369@gmail.com",
          password: "12345",
          username: "fake11",
          phone: "0342925377",
          address: "HN",
          role: "admin",
        },
        {
          email: "John Doe2",
          password: "123",
          username: "fake12",
          phone: 123456789,
          address: "SG",
          role: "user",
        },
        {
          email: "John Doe3",
          password: "123",
          username: "fake13",
          phone: 123456789,
          address: "TP.HCM",
          role: "user",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
