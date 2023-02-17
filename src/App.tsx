import { useState } from 'react'
import TextHeader from './components/TextHeader'
import HeaderBody from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <TextHeader/>
      <HeaderBody/>
    </main>
  )
}

export default App
