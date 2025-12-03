import React, { userState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div>
              <input type="text" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
