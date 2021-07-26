import React from 'react';

function GetStarted({props, onSetStep}) {
  
  const handleSubmit = (e) => {
    onSetStep(2)
  }

  return (
    <div className="hero is-fullheight">
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h2 className="title is-2">Hi, We're excited to see if Medical Cost Sharing is right for you.</h2>
            <div>
              <button className="button is-link is-medium is-fullwidth mt-4" onClick={handleSubmit}>Let's get started!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;