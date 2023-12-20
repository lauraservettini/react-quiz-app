import {useState, useCallback} from 'react';

import QUESTIONS from '../question';
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';

export default function Quiz(){
    const [ answerState, setAnswerState ] = useState('');
    const [ answers, setAnswers] = useState([]);

    // deriva l'index relativo alla domanda dalla lunghezza dell'array delle risposte
    const activeQuestionIndex = 
        answerState === '' ? answers.length : answers.length - 1;
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setAnswerState('answered');
        setAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        });

        // evidenzia per 1 sec se la risposta è giusta o sbagliata
        setTimeout(() => {
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            }
            else {
                setAnswerState('wrong');
            }
        setTimeout(() =>{
            setAnswerState('');
        }, 2000);
        }, 1000);

    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);
    
    if(quizIsComplete){
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt='Trophy icon'/>
                <h2>Quiz Completed!</h2>
            </div>

        );
    } 
    
    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer 
                    key={activeQuestionIndex}
                    timeout={10000} 
                    onTimeout={() => handleSkipAnswer(null)} />
                <h2>
                    {QUESTIONS[activeQuestionIndex].text}
                </h2>
                <Answers 
                    key={activeQuestionIndex+1}
                    answers={QUESTIONS[activeQuestionIndex].answers} 
                    selectedAnswer={answers[answers.length - 1]} 
                    answerState={answerState}
                    onSelect={handleSelectAnswer}
                    />
            </div>
        </div>
    );
}