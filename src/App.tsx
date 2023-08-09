import { useState } from 'react'
import { Button, SideBar } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>count is {count}</h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count Button
        </Button>
        <SideBar
        title="test"
        open={true}>

        </SideBar>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
    </>
  )
}

export default App