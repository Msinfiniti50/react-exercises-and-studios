import React from "react";
import styles from "./ChoresList.module.css";

export default function ChoresList () {
   const chores = ["dishes", "laundry", "sweeping", "mopping", "dusting"];
   return (
   <div>
      <h2 className={styles.choresHeading}>Chores List</h2>
      <ul>
         <li className={styles.choresText}>{chores[0]}</li>
         <li className={styles.choresText}>{chores[1]}</li>
         <li className={styles.choresText}>{chores[2]}</li>
         <li className={styles.choresText}>{chores[3]}</li>
         <li className={styles.choresText}>{chores[4]}</li>
      </ul>
   </div>
   );
}