import { useState } from "react"
import Question from "../Question";
import quizCompleteImage from "../assets/quiz-complete.png"


export default function Quiz(){
const [userAnswers, setUserAnswers]= useState([]);
const activeQuestionIndex = userAnswers.length;
const quizIscomplete = activeQuestionIndex === Question.length

function handleSelectAnswer(selectedAnswer){
setUserAnswers((prevUserAnswer) => {
return [...prevUserAnswer, selectedAnswer];
})
}

if(quizIscomplete) {
  return (<div id="summary">
    <img src={quizCompleteImage} alt="Trophy icon" />
    <h2>Quiz Completed!</h2>
  </div>
  );
}

const shuffledAnswer = [...Question[activeQuestionIndex].answers];
shuffledAnswer.sort(() => Math.random() - 0.5);
return(
    <div id="quiz">
    <div id="question">
        <h2>
          {Question [activeQuestionIndex].text}
        </h2>
        <ul id="answers">
          {shuffledAnswer.map(answer => <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>)
           }
        </ul>
  </div></div>
 
)
}