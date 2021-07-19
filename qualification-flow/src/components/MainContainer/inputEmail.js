import React from 'react';
import 'bulma/css/bulma.min.css';
import '../MainContainer/inputEmail.css'

function inputEmail({ props, onSetStep }) {

  const handleSubmit = (e) => {
    onSetStep(4)
  }

  return (
    <div className="mainContainer">
      <div className="card">
        <div className="card-content">
          <div className="content">
                  <h2 className="mb-5">What is your email address to which we can send you your results:</h2>
                  <div class="field-body">
    <div class="field">
      <p class="control">
        <input class="input" type="email" placeholder="Email"/>
      </p>
    </div>
            </div>
            <button className="button is-link is-medium is-fullwidth mt-4" onClick={handleSubmit}>Submit</button>

            </div>
        </div>
      </div>
    </div>
  );
}

export default inputEmail;