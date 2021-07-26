import React from 'react';
import 'bulma/css/bulma.min.css';
import '../MainContainer/styleSheet.css'

function inputEmail({ props, onSetStep }) {


  const handleSubmit = (e) => {
    
    onSetStep(5)
  }

  return (
    <div className="hero is-fullheight">
      <div className="card">
        <div className="card-content">
          <div className="content">
                  <h2 className="mb-5">What is your email address to which we can send you your results:</h2>
                  <div className="field-body">
    <div className="field">
      <p className="control">
        <input className="input" type="email" placeholder="Email"/>
      </p>
              
              </div>
            </div>
              
              <label className="checkbox">
                <input type="checkbox" />
                   I would like to schedule a call with a Medical Cost Sharing Expert
                </label>
             
            <button className="button is-link is-medium is-fullwidth mt-4" onClick={handleSubmit}>Submit</button>
            <progress className="progress is-primary is-medium" value="100" max="100"></progress>

            </div>
        </div>
      </div>
    </div>
  );
}

export default inputEmail;