import {useState} from 'react';


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(''); 
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

   let formIsValid = false;
 
   if (enteredNameIsValid) {
    formIsValid = true ;
   }

  // This Approch is for useState
  const nameInputChangeHandler = event => {
   setEnteredName(event.target.value) ; 
  }

  const nameInputBlur = () => {
    setEnteredNameIsTouched(true); 
  }

  const formSubmissionHandler = event => {
    event.preventDefault()

    setEnteredNameIsTouched(true);
     
    // checking if the input is valid
    if(!enteredNameIsValid){
      return;
    }
    setEnteredName('');
    setEnteredNameIsTouched(false);
    }
    console.log(enteredName)
    // THis is the Apporch for useRef
    
     
  


  const nameInputClasses = nameInputIsInvalid ? 
  'form-contol invalid ' 
  : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        {/* This Approch is for useState */}
        <input 
        type='text' 
        id='name'
         onChange={nameInputChangeHandler} 
         onBlur={nameInputBlur}
          value={enteredName}
           />
           {nameInputIsInvalid && <p className='error-text'>Name can not be empty</p>}
      
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
