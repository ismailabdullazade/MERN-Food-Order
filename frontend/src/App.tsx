import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/ui/button'
import "./App.css"
import { Badge } from './components/ui/badge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Button>Click</Button>
  )
}

export default App
