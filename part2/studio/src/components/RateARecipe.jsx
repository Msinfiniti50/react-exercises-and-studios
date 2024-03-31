let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe({rating}) {
  console.log('RateARecipe is rendering', rating)

  function GiveRating() {
    if (rating >= 1 && rating <= 5) {
    return  <h3>{stars[rating - 1]}</h3>;
    } else {
      return null;
     }
    }
    return GiveRating();
  }

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
