import { render, screen } from '@testing-library/react';
import { createMemoryRouter, createRoutesFromElements } from 'react-router';
import App from '../App';
import routes from '../routes';

describe('App', () => {
  it('should show root page message from root route', () => {
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