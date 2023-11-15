import React, { createRef, useEffect, useRef, useState } from 'react';
import './App.css';

type Question = {
  prompt: string,
  correctAnswer: string,
  answers: Array<string>
}

const DATA = [{
  prompt: "what is color of your shirt?",
  correctAnswer: "pink",
  answers: [
    "blue", "red", "purple", "pink"
  ]
},
{
  prompt: "what is your favourite shit?",
  correctAnswer: "black",
  answers: [
    "stnky", "red", "black", "blood"
  ]
}, {
  prompt: "who own the world?",
  correctAnswer: "me",
  answers: [
    "donald", "joe", "me", "putin"
  ]
}, {
  prompt: "best socio-political ideaology?",
  correctAnswer: "capitalism",
  answers: [
    "socilist", "nationalist", "communism", "capitalism"
  ]
}]


function App() {

  let questions = new Array<Question>()

  for (let i = 0; i < DATA.length; i++) {
    questions.push(DATA[i])
  }

  const [qIndex, setQIndex] = useState(0) // tracking the idnex of quesion 
  const [selectedAnswer, setSelectedAnswer] = useState<string>("") // selected answer for each question in quiz
  const [notAnswered, setNotAnswered] = useState<number>(0) // selected answer for each question in quiz
  const [score, setScore] = useState<number>(0) // tracking score 
  const [isFinished, setIsFinished] = useState<boolean>(false); // state for end the quiz and show result of test
  const currentQuestion = questions[qIndex] // curent question 



  const handleSubmit = (e: any) => {

    e.preventDefault();

    if (selectedAnswer === "") {
      setNotAnswered(notAnswered + 1)
    } else if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
    qIndex != (questions.length - 1) ? setQIndex(prevIndex => prevIndex + 1) : setIsFinished(true);
    setSelectedAnswer("")
    //! increment to next question and show the resualt when finished all questions
  }

  useEffect(() => {
    // setCurrentQuestion(questions[qIndex])
    setSelectedAnswer("")
  }, [qIndex])

  const Quiz = () => {
    return (<div className="qContainer">
      <h1> {currentQuestion.prompt}</h1>
      <form className='quiz-form' onSubmit={handleSubmit}>
        <div className='answers-container'>
          {currentQuestion.answers.map((answer, inx) =>
        (<label key={inx}>
          <input type='radio' name='answer' checked={answer === selectedAnswer} onChange={() => {
            setSelectedAnswer(answer);
          }}></input>{answer}
        </label>))}
        </div>

        <button>Submit</button>
      </form>
    </div>)
  }

  const ResaultPage = () => {
    return (<div className='showResault '>
      <h1> Correct:{score}</h1>
      <h1> Wrong:{questions.length - (score + notAnswered)}</h1>
      <h1> Blank:{notAnswered}</h1>
      <h1> Total: {questions.length}</h1>
    </div >)
  }

  const Controls = () => {
    return (<div className='control'>
      <div className="prev" onClick={() => qIndex !== 0 ? setQIndex(qIndex - 1) : qIndex}>Previous</div>
      <div className="next" onClick={() => qIndex !== questions.length - 1 ? setQIndex(qIndex + 1) : true}>Next</div>
    </div>)
  }

  const resetApp = () => {
    setQIndex(0);
    setIsFinished(false);
    setSelectedAnswer("");
    setScore(0);
    setNotAnswered(0);
  }

  return (
    <div className="App">
      <div className="main">
        {!isFinished ? <><Quiz /><Controls /></> : <ResaultPage />}
        <button onClick={resetApp}>
          {isFinished ? "Try Again" : "Reset"}
        </button>
      </div>
    </div>
  );
}

export default App;
