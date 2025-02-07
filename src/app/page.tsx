"use client";
import { useState, useEffect } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("/practiceExam.json")
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions));
  }, []);

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      const selectedOption = document.querySelector(
        `input[name="question-${index}"]:checked`
      ) as HTMLInputElement;
      if (selectedOption && selectedOption.value.charAt(0) === question.answer.charAt(0)) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  useEffect(() => {
    if (showAnswers) {
      calculateScore();
    }
  }, [showAnswers]);

  return (
    <div className="container mx-auto p-4 h-screen flex flex-col">
      <div id="headerdiv" className="fixed top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Practice Exam</h1>
        <div className="flex items-center">
          <button
            onClick={toggleAnswers}
            className="px-2 py-1 bg-blue-500 text-white rounded mx-1"
          >
            {showAnswers ? "Hide Answers" : "Show Answers"}
          </button>
          {showAnswers && (
            <div className="ml-4 text-lg font-medium">
              Score: {score}/{questions.length}
            </div>
          )}
        </div>
      </div>
      <div className="mt-24 overflow-y-auto">
        {questions.map((question, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {`Q${index + 1}. ${question.question}`}
            </h2>
            <ul className="list-disc list-inside mb-2">
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex} className="mb-1 flex items-center">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    id={`question-${index}-option-${optionIndex}`}
                    className="mr-2"
                  />
                  <label htmlFor={`question-${index}-option-${optionIndex}`}>
                    {option}
                  </label>
                </li>
              ))}
            </ul>
            {showAnswers && (
              <div className="font-medium">
                <p>Answer: {question.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
