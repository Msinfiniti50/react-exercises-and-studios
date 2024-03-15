
import './App.css'
import RecipeDescription from './components/Description.jsx'
import RecipeIngredients from './components/Ingredients.jsx'
import RecipePhoto from './components/Photo.jsx'


function App() {
  

  return (
      <div className="App">
       <div className="recipePhotoBlock"> 
        <RecipePhoto />
        </div>
        <div>
          <div>
        <RecipeDescription />
        <RecipeIngredients />
        
        </div>
      </div>
      </div>
  )
}

export default App
