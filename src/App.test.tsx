import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock('./env', () => ({
  API_URL: 'https://mocked-api.com',
}));

test('renders Hello Tailwind text', () => {
  render(<App />)
  expect(screen.getByText("Hello Vite + Tailwind + TypeScript!")).toBeInTheDocument()
})