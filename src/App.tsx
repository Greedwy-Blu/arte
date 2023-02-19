import { useState } from 'react'
import TextHeader from './components/TextHeader'
import HeaderBody from './components/Header'
import ArtNoiteEstralada from './components/ArtNoiteEstralada'
import ArtGirl from './components/ArtGirl'
import ArtToque from './components/ArtToque'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
    <TextHeader/>
    <HeaderBody/>
    <ArtNoiteEstralada/>
    <ArtGirl/>
    <ArtToque/>

    </main>
  )
}

export default App
