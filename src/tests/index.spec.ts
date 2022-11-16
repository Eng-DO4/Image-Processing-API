import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

// bla bla bla
describe('Testing main endpoint', () => {
  it('The main endpoint always does not return errors', async () => {
    await request.get('/').expect(200);
  });
});
