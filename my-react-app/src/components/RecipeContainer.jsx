import Recipe from "./Recipe.jsx";

const RecipeContainer = ({recipes}) => {
    return(
        <div className="recipe-container">
            {
                recipes.map( (recipe, index) => (
                    <Recipe key={`${index}${recipe.name}`} recipe={recipe} />
                ))
            }
        </div>
    )
}

export default RecipeContainer;