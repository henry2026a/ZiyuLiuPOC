const request = require('supertest');
const app = require('../server/server');

test('GET /foods returns five foods with prices as JSON', async () => {
  // Check the response status, format, and fields the table needs.
  const response = await request(app)
    .get('/foods')
    .expect(200)
    .expect('Content-Type', /json/);

  expect(response.body).toHaveLength(5);
  for (const food of response.body) {
    expect(typeof food.name).toBe('string');
    expect(food.name.trim()).not.toBe('');
    expect(typeof food.price).toBe('number');
    expect(food.price).toBeGreaterThan(0);
  }
});

test('an unknown path returns a JSON 404 response', async () => {
  // This path is not an API route or a public file.
  const response = await request(app)
    .get('/not-a-page')
    .expect(404)
    .expect('Content-Type', /json/);
  expect(response.body).toEqual({ error: 'Not found' });
});

test('GET / serves the HTML page', async () => {
  // The app serves the page and API from the same address.
  const response = await request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/);
  expect(response.text).toContain('Food Price List');
  expect(response.text).toContain('demonstrating web development skills only');
});
