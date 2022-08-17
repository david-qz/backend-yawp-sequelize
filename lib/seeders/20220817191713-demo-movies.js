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
    await queryInterface.bulkInsert('Movies', [
      {
        title: 'Batman Doesn\'t Return',
        description: 'He leaves and doesn\'t come back',
        image: '',
        releaseYear: 2007,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'War of the Worlds',
        description: 'It\'s a big war',
        image: '',
        releaseYear: 1775,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Lord of the Rings: Return of the King',
        description: 'He comes back',
        image: '',
        releaseYear: 2001,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Lords of Dog Town',
        description: 'Skateboarder run around a town',
        image: '',
        releaseYear: 2009,
        genre_id: 3,
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
