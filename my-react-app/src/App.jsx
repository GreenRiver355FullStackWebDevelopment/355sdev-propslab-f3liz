import './App.css'
import RecipeContainer from './components/RecipeContainer.jsx'
import { recipes } from './data.js'

function App() {
  
  return (
    <>
      <RecipeContainer recipes={recipes}/>
    </>
  )
}

export default App
