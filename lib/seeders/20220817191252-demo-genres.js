'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Genres', [
      {
        name: 'action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'science fiction',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
