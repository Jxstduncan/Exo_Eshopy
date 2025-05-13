import { useState } from 'react'
import articles from '../Articles.json'
import './App.css'
import Articles from './Components/Articles/Articles'
import Budget from './Components/Budget/Budget'


function App() {
  const [budget, setBudget] = useState(1000)
  const acheter = (article)=>{
    setBudget(budget- article.prix)
    article.stock=article.stock-1
    console.log(article.stock);
    
  }
  return (
    <>
      <Budget budget={budget} />
     <div className='df'>
      {
        articles.map(article=>(
          <Articles article={article} acheter={acheter} budget={budget} />
        ))
      }
     </div>
    </>
  )
}

export default App
