import pactum from 'pactum';
import { StatusCodes } from 'http-status-codes';
import { SimpleReporter } from '../simple-reporter';
import { faker } from '@faker-js/faker';

describe('FakeREST Api', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1';

  let requestCount = 0;
  let userId: number;

  p.request.setDefaultTimeout(30000);

  beforeAll(() => p.reporter.add(rep));
  afterAll(() => {
    p.reporter.end();
    console.log(`Total de requisições realizadas: ${requestCount}`);
  });

  describe('Users', () => {
    it('POST new user 1', async () => {
      const user = {
        id: faker.number.int({ min: 1000, max: 9999 }),
        userName: faker.internet.userName(),
        password: faker.internet.password()
      };
      userId = user.id;

      await p
        .spec()
        .post(`${baseUrl}/Users`)
        .withJson(user)
        .expectStatus(StatusCodes.CREATED)
        .expectJsonLike({ userName: user.userName });

      requestCount++;
    });

    it('POST new user 2', async () => {
      const user = {
        id: faker.number.int({ min: 10000, max: 99999 }),
        userName: faker.internet.userName(),
        password: faker.internet.password()
      };

      await p
        .spec()
        .post(`${baseUrl}/Users`)
        .withJson(user)
        .expectStatus(StatusCodes.CREATED);

      requestCount++;
    });

    it('GET all users 1', async () => {
      await p
        .spec()
        .get(`${baseUrl}/Users`)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike([{ id: expect.any(Number) }]);

      requestCount++;
    });

    it('GET all users 2', async () => {
      await p
        .spec()
        .get(`${baseUrl}/Users`)
        .expectStatus(StatusCodes.OK)
        .expectJsonLength('*', val => val > 0);

      requestCount++;
    });

    it('GET user by ID 1', async () => {
      await p
        .spec()
        .get(`${baseUrl}/Users/${userId}`)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({ id: userId });

      requestCount++;
    });

    it('GET user by ID 2', async () => {
      await p
        .spec()
        .get(`${baseUrl}/Users/${userId}`)
        .expectStatus(StatusCodes.OK);

      requestCount++;
    });

    it('PUT update user 1', async () => {
      const updatedUser = {
        id: userId,
        userName: faker.internet.userName(),
        password: faker.internet.password()
      };

      await p
        .spec()
        .put(`${baseUrl}/Users/${userId}`)
        .withJson(updatedUser)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({ userName: updatedUser.userName });

      requestCount++;
    });

    it('PUT update user 2', async () => {
      const updatedUser = {
        id: userId,
        userName: faker.internet.userName(),
        password: faker.internet.password()
      };

      await p
        .spec()
        .put(`${baseUrl}/Users/${userId}`)
        .withJson(updatedUser)
        .expectStatus(StatusCodes.OK);

      requestCount++;
    });

    it('DELETE user 1', async () => {
      await p
        .spec()
        .delete(`${baseUrl}/Users/${userId}`)
        .expectStatus(StatusCodes.OK);

      requestCount++;
    });

    it('DELETE user 2', async () => {
      const anotherUserId = faker.number.int({ min: 1000, max: 9999 });

      await p
        .spec()
        .delete(`${baseUrl}/Users/${anotherUserId}`)
        .expectStatus(StatusCodes.OK);

      requestCount++;
    });
  });
});
