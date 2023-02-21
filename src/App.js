import React, { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState(1);
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: ''
  });

  const [questions] = useState({
    quest1: 'Describe in your own words, what are internet protocols?',
    quest2: 'Define HTML in your own words and provide an example.',
    quest3: 'Describe in your own words the applicable standards for web development.',
    quest4: 'What are event and event handlers? Provide example.'
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(answers);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const renderQuestionPage = (questionNumber) => {
    return (
      <div className='maincontent'>
        <h2>Question {questionNumber}</h2>
        <h2>{questions[`quest${questionNumber}`]}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor={`question${questionNumber}`}>Enter your answer:</label>
            <br/>
            <input type="textarea" id={`question${questionNumber}`} name={`question${questionNumber}`} onChange={handleInputChange} />
          </div>
          {/* <button type="submit">Submit</button> */}
        </form>
        <h3>Your answer:</h3>
        <p>{answers[`question${questionNumber}`]}</p>
      </div>
    );
  };

  const renderNavigationMenu = () => {
    return (
      <div className='navigation'>        
        
          <button onClick={() => handlePageChange(1)}>Question 1</button>
          <button onClick={() => handlePageChange(2)}>Question 2</button>
          <button onClick={() => handlePageChange(3)}>Question 3</button>
          <button onClick={() => handlePageChange(4)}>Question 4</button>
        
      </div>
    );
  };

  const renderHeader= () => {
    return (
      <div className="header">
      <h3>Renan Zanesco Comoli</h3>
      </div>
    );
  };

  return (
    <div>
      {renderHeader()}
      {renderNavigationMenu()}
      {activePage === 1 && renderQuestionPage(1)}
      {activePage === 2 && renderQuestionPage(2)}
      {activePage === 3 && renderQuestionPage(3)}
      {activePage === 4 && renderQuestionPage(4)}
      
    </div>
  );
}

export default App;