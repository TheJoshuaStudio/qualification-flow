import React from 'react';
import 'bulma/css/bulma.min.css';
import "../MainContainer/inputFields.css"

function inputFields(props) {
  return (
    <div className="mainContainer">
    <div className="card">
      <div className="card-content">
          <div className="content">
            <h2 className="mb-5">What State are you located?</h2>
            <input className="input"
          name="Done List"
          type="text"/>
          </div>
      </div>
      </div>
      </div>
  );
}

export default inputFields;