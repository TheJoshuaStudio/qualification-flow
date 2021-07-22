import React, { useState }from 'react';
import 'bulma/css/bulma.min.css';
import "../MainContainer/styleSheet.css"


function USStates({props, onSetStep }) {
  const [newValue, setNewValue] = useState('')
  
  const handleSubmit = (e) => {
    onSetStep(3)
  }


    return (
      <div className="hero is-fullheight">
      <div className="card">
       <div className="card-content">
            <div className="content">
              <h2 className="mb-5">In what State are you located?</h2>
             <div className='select is-normal'>
              <select>
                    <option className="dropdown-item">   ---Select State---</option >
                   
	<option className="dropdown-item" value="AL">Alabama</option >
	<option className="dropdown-item" value="AK">Alaska</option >
	<option className="dropdown-item" value="AZ">Arizona</option >
	<option className="dropdown-item" value="AR">Arkansas</option >
	<option className="dropdown-item" value="CA">California</option>
	<option className="dropdown-item" value="CO">Colorado</option >
	<option className="dropdown-item" value="CT">Connecticut</option>
	<option className="dropdown-item" value="DE">Delaware</option >
	<option className="dropdown-item" value="DC">District Of Columbia</option >
	<option className="dropdown-item" value="FL">Florida</option >
	<option className="dropdown-item" value="GA">Georgia</option>
	<option className="dropdown-item" value="HI">Hawaii</option >
	<option className="dropdown-item" value="ID">Idaho</option>
	<option className="dropdown-item" value="IL">Illinois</option >
	<option className="dropdown-item" value="IN">Indiana</option >
	<option className="dropdown-item" value="IA">Iowa</option>
	<option className="dropdown-item" value="KS">Kansas</option >
	<option className="dropdown-item" value="KY">Kentucky</option >
	<option className="dropdown-item" value="LA">Louisiana</option >
	<option className="dropdown-item" value="ME">Maine</option>
	<option className="dropdown-item" value="MD">Maryland</option>
	<option className="dropdown-item" value="MA">Massachusetts</option>
	<option className="dropdown-item" value="MI">Michigan</option>
	<option className="dropdown-item" value="MN">Minnesota</option>
	<option className="dropdown-item" value="MS">Mississippi</option>
	<option className="dropdown-item" value="MO">Missouri</option>
	<option className="dropdown-item" value="MT">Montana</option>
	<option className="dropdown-item" value="NE">Nebraska</option>
	<option className="dropdown-item" value="NV">Nevada</option>
	<option className="dropdown-item" value="NH">New Hampshire</option>
	<option className="dropdown-item" value="NJ">New Jersey</option>
	<option className="dropdown-item" value="NM">New Mexico</option>
	<option className="dropdown-item" value="NY">New York</option>
	<option className="dropdown-item" value="NC">North Carolina</option>
	<option className="dropdown-item" value="ND">North Dakota</option>
	<option className="dropdown-item" value="OH">Ohio</option>
	<option className="dropdown-item" value="OK">Oklahoma</option>
	<option className="dropdown-item" value="OR">Oregon</option >
	<option className="dropdown-item" value="PA">Pennsylvania</option>
	<option className="dropdown-item" value="RI">Rhode Island</option >
	<option className="dropdown-item" value="SC">South Carolina</option >
	<option className="dropdown-item" value="SD">South Dakota</option>
	<option className="dropdown-item" value="TN">Tennessee</option >
	<option className="dropdown-item" value="TX">Texas</option>
	<option className="dropdown-item" value="UT">Utah</option>
	<option className="dropdown-item" value="VT">Vermont</option>
	<option className="dropdown-item" value="VA">Virginia</option>
	<option className="dropdown-item" value="WA">Washington</option>
	<option className="dropdown-item" value="WV">West Virginia</option>
	<option className="dropdown-item" value="WI">Wisconsin</option>
	<option className="dropdown-item" value="WY">Wyoming</option>
                 
  </select></div>
              <button className="button is-link is-medium is-fullwidth mt-4" onClick={handleSubmit}>Next</button>
              <progress className="progress is-primary is-medium" value="90" max="100"></progress>

            </div>
            </div>
         
         </div>
      </div>
   
    );
  
}

export default USStates;