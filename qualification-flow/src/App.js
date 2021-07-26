
import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import QuestionsCard from './components/MainContainer/QuestionsCard';
import questionsData from './data/questions.json'
import USStates from './components/MainContainer/USStates';
import InputEmail from './components/MainContainer/inputEmail';
import FinalScreen from './components/MainContainer/FinalScreen';
import GetStarted from './components/MainContainer/GetStarted';

function App() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  return (
    <>
      <NavBar />
      {step === 1 && <GetStarted
        onSetStep={setStep}
      />}
      {step === 2 && <QuestionsCard
        data={questionsData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={questionsData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <USStates
        onSetStep={setStep}
      />}
      {step === 4 && <InputEmail
        onSetStep={setStep}
      />}
      {step === 5 && <FinalScreen/>
      }
    </>
  );
}

export default App;



