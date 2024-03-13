import styles from './Ingredients.module.css';
export default function RecipeIngredients() {
    const ingredients = ["1 tablespoon olive oil ", "1 pound of ground chicken ", "2 cloves garlic, minced ", "1 onion, diced ", "1/4 cup hoisin sauce ", "2 tablespoons soy sauce ", "1 tablespoon rice wine vinegar ", "1 tablespoon freshly grated ginger ", "1 tablespoon Sriracha, optional ", "1 (8-ounce) can whole water chestnuts, drained and diced ", "2 green onions, thinly sliced ", "Kosher salt and freshly ground black pepper, to taste ", "1 head butter lettuce "
    ]
    return (
  <div>
        <h3> Recipe Ingredients </h3>
        <ul className={styles.ingredientsList}>
            {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
    </div>
  );
}
