
import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import { Switch, Route  } from "react-router-dom";
import QuestionsCard from './components/MainContainer/QuestionsCard';
import questionsData from './data/questions.json'
import InputFields from './components/MainContainer/inputFields';

function App() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  return (
    <>
      <NavBar />
      {step === 1 && <QuestionsCard
        data={questionsData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={questionsData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 2 && <InputFields/>}
    </>
  );
}

export default App;
