import {useState} from 'react';

import QUESTIONS from '../question';
import quizCompleteImg from '../assets/quiz-complete.png'

export default function Quiz(){
    const [ answers, setAnswers] = useState([]);

    // deriva l'index relativo alla domanda dalla lunghezza dell'array delle risposte
    const activeQuestionIndex = answers.length;
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    
    function handleSelectAnswer(selectedAnswer){
        setAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        });
    }
    
    if(quizIsComplete){
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt='Trophy icon'/>
                <h2>Quiz Completed!</h2>
            </div>

        );
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <h2>
                    {QUESTIONS[activeQuestionIndex].text}
                </h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}