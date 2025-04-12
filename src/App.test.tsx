import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Hello Tailwind text', () => {
  render(<App />)
  expect(screen.getByText("Hello Vite + Tailwind + TypeScript!")).toBeInTheDocument()
})