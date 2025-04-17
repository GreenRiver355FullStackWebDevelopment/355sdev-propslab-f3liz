import {Typography} from '@mui/material'; // import to use Typography
import DinnerDiningIcon from '@mui/icons-material/DinnerDining'; // icon
import EggIcon from '@mui/icons-material/Egg'; // icon

const Recipe = ({ recipe:{name, ingredients, instructions, optionalGlaze}}) => {
    return(
        <div>
            <Typography variant='h2' sx={{ fontWeight: 'bold', color: 'orange'}}>{name} <DinnerDiningIcon fontSize='large'/></Typography>
            <Typography variant='body1' sx={{ fontWeight: 'bold', color: 'yellow'}}><EggIcon/> Ingredients: {ingredients}</Typography>
            <Typography variant='body1' sx={{ fontWeight: 'bold'}}>Instructions: {instructions}</Typography>
            {optionalGlaze && ( // to include glaze
                <div>
                    <Typography variant='h5' sx={{ fontWeight:'bold', color: 'orange'}}>Optional Glaze: {optionalGlaze.name}</Typography>

                    <Typography variant='body1' sx={{ fontWeight: 'bold', color: 'yellow'}}><EggIcon/> Glaze Ingredients: {optionalGlaze.ingredients}</Typography>

                    <Typography variant='body1' sx={{ fontWeight: 'bold'}}>Glaze Instructions: {optionalGlaze.instructions}</Typography>
                </div>
            )}
        </div>
    )
}

export default Recipe;