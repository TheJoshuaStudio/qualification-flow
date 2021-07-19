import React, { useState, useEffect, useRef} from 'react';
import '../MainContainer/questionCard.css';
import 'bulma/css/bulma.css';
// import NavBar from '../NavBar/NavBar';
// import inputFields from './inputFields';

export default function QuestionsCard({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion,onSetStep }) {
  // const [step, setStep] = useState(1);
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
    <div className="mainContainer">
      <div className="card is-brown">
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
            <button className="button is-link is-medium is-fullwidth mt-4"  onClick={nextClickHandler}>Next</button>
          </div>
         
         </div>
      </div>
   </div>
  );
}
