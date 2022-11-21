import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

// test main end point
describe('Testing main endpoint', () => {
  it('The main endpoint always does not return errors', async () => {
    await request.get('/').expect(200);
  });
});

// test resizing endpoint
describe('Testing resizing endpoint', () => {
  it('No params provided', async () => {
    await request.get('/resize').expect(400);
  });
  it('Not existing image', async () => {
    await request.get('/resize?name=dr4').expect(400);
  });
  it('Width or height or both not provided', async () => {
    await request.get('/resize?name=fjord').expect(400);
  });
  it('Resized image successfully', async () => {
    await request.get('/resize?name=fjord&width=100&height=100').expect(200);
  });
})