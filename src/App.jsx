import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(1);
  const pointsToWin = 100;

  function levelUp() {
    if (score >= 10) {
      setPoints(points + 1);
      setScore(score - 10);
    } else {
      alert("You can't afford that!");
    }
  }

  function reset() {
    setScore(0);
    setPoints(1);
  }

  function clickCounter() {
    setScore(score + points);
  }

  return (
    <main>
      {score < pointsToWin ? (
        <div className="buttons">
          <h1>Current Score: </h1>
          <h2>{score}</h2>
          <button className="points" onClick={clickCounter}>
            +{points}
          </button>
          <br />
          <br />
          <button className="levelup" onClick={levelUp}>
            Pay 10 points to change from +{points} to +{points + 1}
          </button>
        </div>
      ) : (
        <div>
          <img
            src="./images/youwin.gif"
            alt="winner"
            width="500"
            height="500"
          />
          <h2>You Win!</h2>
          <button onClick={reset}>Play again?</button>
        </div>
      )}
    </main>
  );
}

export default App;
