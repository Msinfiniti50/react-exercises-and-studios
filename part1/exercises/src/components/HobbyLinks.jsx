import React from 'react';
import styles from './HobbyLinks.jsx';

function HobbyLinks() { 
    const hobbyLinks = [
    "https://www.steinbergrink.com/", 
    "https://gwrymca.org/", 
    "https://www.slps.org/", 
    "https://www.launchcode.org/", 
    "https://www.youtube.com/watch?v=Wo1rNZ5JcII"
];

return(
    <div className="HobbyLinks">
       <p><a href={hobbyLinks[0]} target="_blank" rel="noopener noreferrer">Steinberg Rink</a></p>
       <p><a href={hobbyLinks[1]} target="_blank" rel="noopener noreferrer">YMCA</a></p>
       <p><a href={hobbyLinks[2]} target="_blank" rel="noopener noreferrer">SLPS</a></p>
       <p><a href={hobbyLinks[3]} target="_blank" rel="noopener noreferrer">LaunchCode</a></p>
       <p><a href={hobbyLinks[4]} target="_blank" rel="noopener noreferrer">Youtube</a></p>      
     </div>   

  )
}
export default HobbyLinks;