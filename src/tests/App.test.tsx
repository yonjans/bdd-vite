import { act, render, screen } from '@testing-library/react';
import { createMemoryRouter, createRoutesFromElements } from 'react-router';
import App from '../App';
import routes from '../routes';

vi.mock('@repositories/todoRepository', () => {
  const TodoRepository = vi.fn(() => ({
    get: vi.fn().mockReturnValue(Promise.resolve({
      id: '123',
      title: 'Todo 123',
      description: 'This is description'
    })),
  }))
  return { TodoRepository }
})

describe('App', () => {

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('when in root route', () => {
    it('should show root page message', () => {
      const memoryRouter = createMemoryRouter(
        createRoutesFromElements(routes),
        {
          initialEntries: ['/']
        }
      )
      render(
        <App router={memoryRouter}/>
      )
      expect(screen.getByText(/This is root page/)).toBeInTheDocument();
    })
  })

  describe('when in todos detail page', () => {

    describe('when get todo returns value', () => {

      it('should show todo page message from todo route', async () => {
        const memoryRouter = createMemoryRouter(
          createRoutesFromElements(routes),
          {
            initialEntries: ['/todos/123']
          }
        )
        await act(() => render(
          <App router={memoryRouter}/>
        ))
        expect(screen.getByText(/Todo 123/)).toBeInTheDocument();
        expect(screen.getByText(/This is description/)).toBeInTheDocument();
      })
    })
  })
})