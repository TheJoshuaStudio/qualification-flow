import React, { useState, useEffect, useRef} from 'react';
import '../MainContainer/styleSheet.css';
import 'bulma/css/bulma.min.css';

export default function QuestionsCard({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion,onSetStep }) {
  
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();
  

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }

  const nextClickHandler = (e) => {

    ////////////// IF REQUIREMENT IS NEEDED!

    // if(selected === '') {
    //   return setError('Please select one option!');
    // }

    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(2);
    }
  }

  return (
    <div className="hero is-fullheight">
      <div className="card ">
       <div className="card-content">
           <div className="content">
            <h2 className="mb-5">{data.question}</h2>
            <div className="control" ref={radiosWrapper}>
              {data.choices.map((choice, i) => (
                <label className="radio has-background-light" key={i}>
                  <input type="checkbox" name="answer" value={choice} onChange={changeHandler} />
                  {choice}
                </label>
              ))}
            </div>
            {error && <div className="has-text-danger">{error}</div>}
            <button className="button  is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
            <progress id="step-progress" className="progress is-primary is-medium" value={(activeQuestion)*10} max="80">{activeQuestion}%</progress>
          </div>
         
         </div>
      </div>
   </div>
  );
}
