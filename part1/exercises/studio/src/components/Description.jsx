import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
let authorLink = "https://damndelicious.net/about-me/";
let authorPhoto = "https://s23209.pcdn.co/wp-content/uploads/2018/06/about.jpg";
let authorName = "Chungah Rhee";
        return (

            <div className = {styles.RecipeDescription}>
               <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
               <div>
                  <h3>{authorName}</h3>
                  <a href={authorLink}>About Damn Delicious</a> 
               </div>
            </div>
         );
    }

         class RecipeDescription extends React.Component {
            render() {
               return(
                  <div>
                    <div>
                     <h1>"Pf Chang's Chicken Lettuce Wrap"</h1>
                     <p>A copycat recipe that you can easily make in just 20 minutes. And it tastes a million times better too!</p>
                     <p>Delicious DIY</p>
                  </div>
                  <RecipeAuthor />
                  </div>
               );
            }
        }
        export default RecipeDescription;
    