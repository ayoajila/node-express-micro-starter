const request = require('supertest')
const app = require('../../../app')

describe('[Index] api test book:', () => {
  test('GET /api/v1/ response ok', async () => {
    const response = await request(app).get('/api/v1/')
    expect(response.statusCode).toBe(200)
  })
})