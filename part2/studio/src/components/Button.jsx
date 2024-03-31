import SaveButton from './SaveButton';
import ClickedButton from './ClickedButton';
import './Button.css';

function Button({isClicked}) {
  if (isClicked === true) {
    return <ClickedButton  />;
  } else {
  return <SaveButton />;
  }
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 