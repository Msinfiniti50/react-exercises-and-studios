function ClickedButton() {
  function handleClick() {
    alert('You have saved the pin!  ');
  }
  return(
<button onClick={handleClick}>
  Save Pin
</button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
