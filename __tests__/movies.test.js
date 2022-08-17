const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('movies routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.Genre.bulkCreate([
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

      await db.Movie.bulkCreate([
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
    } catch (e) {
      console.log(e);
    }
  });
  afterAll(async () => {
    await db.sequelize.close();
  });

  it('#GET /api/v1/movies should return a list of movies with genre', async () => {
    const resp = await request(app).get('/api/v1/movies');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toEqual(4);
    expect(resp.body[0]).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      description: expect.any(String),
      image: expect.any(String),
      releaseYear: expect.any(Number),
      genre_id: expect.any(Number),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      Genre: {
        id: expect.any(Number),
        name: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String)
      }
    });
  });
});
