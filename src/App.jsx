import { useState } from 'react'
import articles from '../Articles.json'
import './App.css'
import Articles from './Components/Articles/Articles'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='df'>
      {
        articles.map(article=>(
          <Articles article={article} />
        ))
      }
     </div>
    </>
  )
}

export default App
