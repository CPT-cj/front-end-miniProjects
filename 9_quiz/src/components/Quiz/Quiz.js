import React from "react";
import "./Quiz.css";

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          questionText: "What is the capital of France?",
          answerOptions: [
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Dublin", isCorrect: false },
          ],
        },
        {
          questionText: "Who is CEO of Tesla?",
          answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false },
          ],
        },
        {
          questionText: "The iPhone was created by which company?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
        {
          questionText: "How many Harry Potter books are there?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "7", isCorrect: true },
          ],
        },
      ],
      currentQuestion: 0,
      showScore: false,
      score: 0,
    };
  }

  clickhandler(isCorrect) {
    if (isCorrect) {
      this.setState((prevState) => {
        return { score: prevState.score + 1 };
      });
    }

    if (this.state.currentQuestion < 3) {
      this.setState((prevState) => {
        return { currentQuestion: prevState.currentQuestion + 1 };
      });
    } else {
      this.setState({
        showScore: true,
      });
    }
  }

  render() {
    if (this.state.showScore === false) {
      return (
        <div className="app">
          <div className="question-section">
            <div className="question-count">
              <span>Question {this.state.currentQuestion + 1}</span>/ 4
            </div>
            <div className="question-text">
              {this.state.questions[this.state.currentQuestion].questionText}
            </div>
          </div>
          {/* <div className="answer-section">
            <button
              onClick={this.clickhandler.bind(
                this,
                this.state.questions[this.state.currentQuestion]
                  .answerOptions[0].isCorrect
              )}
            >
              {
                this.state.questions[this.state.currentQuestion]
                  .answerOptions[0].answerText
              }
            </button>
            <button
              onClick={this.clickhandler.bind(
                this,
                this.state.questions[this.state.currentQuestion]
                  .answerOptions[1].isCorrect
              )}
            >
              {
                this.state.questions[this.state.currentQuestion]
                  .answerOptions[1].answerText
              }
            </button>
            <button
              onClick={this.clickhandler.bind(
                this,
                this.state.questions[this.state.currentQuestion]
                  .answerOptions[2].isCorrect
              )}
            >
              {
                this.state.questions[this.state.currentQuestion]
                  .answerOptions[2].answerText
              }
            </button>
            <button
              onClick={this.clickhandler.bind(
                this,
                this.state.questions[this.state.currentQuestion]
                  .answerOptions[3].isCorrect
              )}
            >
              {
                this.state.questions[this.state.currentQuestion]
                  .answerOptions[3].answerText
              }
            </button>
          </div> */}
          <div className="answer-section">
            {this.state.questions[this.state.currentQuestion].answerOptions.map(
              (answer) => (
                <button
                  onClick={this.clickhandler.bind(this, answer.isCorrect)}
                >
                  {answer.answerText}
                </button>
              )
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="score-section">
          You scored {this.state.score} out of 4
        </div>
      );
    }
  }
}
