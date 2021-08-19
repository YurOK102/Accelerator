import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(1);
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

  const toggleBtn = () => {
    setShow(!show);
  };
  const actionBtn = (i) => {
    setState(i);
    const removedArr = [...arr].filter((a) => a.id !== i);
    setArr(removedArr);
  };

  return (
    <div className="App">
      <button onClick={toggleBtn}>{state}</button>

      {show && (
        <div>
          {arr.map((i) => (
            <button key={i.id} onClick={() => actionBtn(i.id)}>
              {i.id}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
