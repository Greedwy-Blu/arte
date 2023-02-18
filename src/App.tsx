import { useState } from 'react'
import TextHeader from './components/TextHeader'
import HeaderBody from './components/Header'
import ArtNoiteEstralada from './components/ArtNoiteEstralada'
import ArtGirl from './components/ArtGirl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
    <TextHeader/>
    <HeaderBody/>
    <ArtNoiteEstralada/>
    <ArtGirl/>

    </main>
  )
}

export default App
