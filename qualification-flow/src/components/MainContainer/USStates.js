import React, { useState }from 'react';
import 'bulma/css/bulma.min.css';
import "../MainContainer/UsStates.css"
import SelectUSState from '../../../node_modules/react-select-us-states';

function USStates({ props, onSetStep }) {
  const [newValue, setNewValue] = useState('')
  
  const handleSubmit = (e) => {
    onSetStep(3)
  }

    return (
      <div className="mainContainer">
      <div className="card">
       <div className="card-content">
            <div className="content">
            <h2 className="mb-5">In what State are you located?</h2>
   <span>
     <SelectUSState id="myId" className="myClassName dropdown is-active dropdown-content" onChange={setNewValue}/>
                  </span>
            
              <button className="button is-link is-medium is-fullwidth mt-4" onClick={handleSubmit}>Next</button>

            </div>
            </div>
         
         </div>
      </div>
   
    );
  
}

export default USStates;