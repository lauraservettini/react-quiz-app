import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../question';

export default function Summary({answers}){
    let skippedAnswers = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    answers.map((answer, index) => {
        if(answer === null) {
            skippedAnswers += 1;
        }
        else if (answer === QUESTIONS[index].answers[0]) {
            correctAnswers += 1;
        }
        else {
            incorrectAnswers += 1;
        }
    });
    console.log(answers.length);
    let percSkippedAnsers = Math.round(skippedAnswers / answers.length * 100);
    let percCorrectAnswers =  Math.round(correctAnswers / answers.length * 100);
    let percIncorrectAnswers =  Math.round(incorrectAnswers / answers.length * 100);

    return(
        <div id="summary">
            <img src={quizCompleteImg} alt='Trophy icon'/>
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{percSkippedAnsers}%</span> 
                    <span className="text">Skipped answers</span>
                </p>
                <p>
                    <span className="number">{percCorrectAnswers}%</span> 
                    <span className="text">Correct answers</span>
                </p>
                <p>
                    <span className="number">{percIncorrectAnswers}%</span> 
                    <span className="text">Incorrect answers</span>
                </p>
            </div>
            <ol>
                {answers.map((answer, index) => {
                    let cssClasses = "user-answer";

                    if(answer === null) {
                        cssClasses += ' skipped';
                    }
                    else if (answer === QUESTIONS[index].answers[0]) {
                        cssClasses += ' correct';
                    }
                    else {
                        cssClasses += ' wrong';
                    }

                    return (<li key={index}>
                        <h3>{index + 1}</h3>
                        <p className="question">{QUESTIONS[index].text}</p>
                        <p className={cssClasses}>{answer ?? 'Skipped'}</p>
                    </li>);
                })}
            </ol>
       </div>
    );
}