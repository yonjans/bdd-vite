import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getTodos } from './todos'
import { failure, success } from '../handler'
import { Client } from 'pg'


const jsonTestData = {
  key1: 'value1',
  key2: 'value2',
  key3: [1, 2, 3],
};

vi.mock('pg', () => {
  const Client = vi.fn()
  Client.prototype.connect = vi.fn()
  Client.prototype.query = vi.fn()
  Client.prototype.end = vi.fn()

  return { Client }
})

vi.mock('./handlers.js', () => {
  return {
    success: vi.fn(),
    failure: vi.fn(),
  }
})

describe('get a list of todo items', () => {
  let client:any

  beforeEach(() => {
    client = new Client()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return items successfully', async () => {
    client.query.mockResolvedValueOnce({ rows: [], rowCount: 0 })

    await getTodos({ event: { body: JSON.stringify(jsonTestData) }, context: { getRemainingTimeInMillis: () => 1000 } });

    expect(client.connect).toBeCalledTimes(1)
    expect(client.query).toBeCalledWith('SELECT * FROM todos;')
    expect(client.end).toBeCalledTimes(1)

    expect(success).toBeCalledWith({
      message: '0 item(s) returned',
      data: [],
      status: true,
    })
  })

  it('should throw an error', async () => {
    const mError = new Error('Unable to retrieve rows')
    client.query.mockRejectedValueOnce(mError)

    await getTodos({ event: { body: JSON.stringify(jsonTestData) }, context: { getRemainingTimeInMillis: () => 1000 } });

    expect(client.connect).toBeCalledTimes(1)
    expect(client.query).toBeCalledWith('SELECT * FROM todos;')
    expect(client.end).toBeCalledTimes(1)
    expect(failure).toBeCalledWith({ message: mError, status: false })
  })
})