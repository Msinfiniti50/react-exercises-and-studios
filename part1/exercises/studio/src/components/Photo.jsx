import styles from './Description.module.css';
import React from 'react';

export default function RecipePhoto() {
    const photoLink = "https://s23209.pcdn.co/wp-content/uploads/2014/05/IMG_0501edit.jpg";
    return (
        <img src={photoLink} alt="recipe photo" className={styles.imageUpdates} />
    )
}



