import React ,{useState} from 'react';
import Board from './Board';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winnerRow: lines[i] };
    }
  }

  return { winner: null, winnerRow: null };
};

const getLocation = (move) => {
  const locationMap = {
    0: 'dòng: 1, cột: 1',
    1: 'dòng: 1, cột: 2',
    2: 'dòng: 1, cột: 3',
    3: 'dòng: 2, cột: 1',
    4: 'dòng: 2, cột: 2',
    5: 'dòng: 2, cột: 3',
    6: 'dòng: 3, cột: 1',
    7: 'dòng: 3, cột: 2',
    8: 'dòng: 3, cột: 3',
  };

  return locationMap[move];
};

const initialState = {
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],
  currentStepNumber: 0,
  xIsNext: true,
};

const Game =()=> {
    const [history, setHistory] = useState(initialState.history);
    const [currentStepNumber, setCurrentStepNumber] = useState(initialState.currentStepNumber);
    const [xIsNext, setXisNext] = useState(initialState.xIsNext);
    const  { winner, winnerRow } = calculateWinner(history[currentStepNumber].squares);
  const handleClick=(i)=> {
    const timeInHistory = history.slice(0, currentStepNumber + 1);
    const current = timeInHistory[timeInHistory.length-1];
    const squares = [...current.squares];
    console.log(winner);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    
    setHistory(timeInHistory.concat([
      {
        squares,
        currentLocation: getLocation(i),
        stepNumber: timeInHistory.length,
      }
    ]));
    setCurrentStepNumber(timeInHistory.length);        
    setXisNext(!xIsNext);
  }

  const jumpTo=(step)=> {
    setCurrentStepNumber(step);
    setXisNext(step % 2 === 0)
  }

  const sortMoves=() =>{
    const timeInHistory = [...history];
    setHistory(timeInHistory.reverse());
  }

  const reset=()=> {
    setHistory(initialState.history);
    setCurrentStepNumber(initialState.currentStepNumber);
    setXisNext(initialState.xIsNext);
  }

  
  const renderMoves = () => (
    history.map((_step, move) => {
        const currentLocation=_step.currentLocation?`(${_step.currentLocation})` : '';
        const destination = _step.stepNumber ? `Move #${_step.stepNumber}` : 'Start';
        const classButton = move === currentStepNumber ? 'button--green' : '';
        return (
          <li key={move}>
          <button className={`${classButton} button`} onClick={() =>jumpTo(move)}>
            {`${destination} ${currentLocation}`}
          </button>
        </li>
        )
    })        
)
    let status;
    let statusClass="status";
    if (winner) {
      status = `Winner ${winner}`;
      statusClass="statusWinner";
    } else if (history.length === 10) {
      status = 'Draw. No one won.';
      statusClass="statusDraw"
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={history[currentStepNumber].squares}
          winnerSquares={winnerRow}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div className={`${statusClass}`}>{status}</div>
        <button className="button" onClick={() => sortMoves()}>
          Sort moves
        </button>
        <button className="button button--new-game" onClick={() => reset()}>
          New game
        </button>
        <ol>{renderMoves()}</ol>
      </div>
    </div>
  );
}

export default Game;
