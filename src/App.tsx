import { useState } from 'react'
import './App.css'
import { TodoList } from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline text-blue-600">Hello Vite + Tailwind + TypeScript!</h1>
      </div>
      <div className="min-h-screen bg-gray-100 py-8">
        <TodoList />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
