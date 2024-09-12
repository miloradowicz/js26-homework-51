import { useState } from 'react';
import { randomInt } from './utils/utils';
import Chip from './Chip/Chip';
import './App.css';

function App() {
  const chipCount = 5;
  const minChip = 5;
  const maxChip = 36;

  const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

  const drawChips = () => {
    let _numbers: number[] = [];

    while (_numbers.length < chipCount) {
      const n = randomInt(maxChip, minChip);

      if (!_numbers.includes(n)) {
        _numbers.push(n);
      }
    }

    _numbers = _numbers.sort((a, b) => a - b);

    setNumbers(() => _numbers);
  };

  return (
    <>
      <h1>Super duper lottery!</h1>
      <button className='draw-chips-btn' onClick={drawChips}>
        New numbers
      </button>
      <div className='chips-tray'>
        {numbers.map((x) => (
          <Chip>{x}</Chip>
        ))}
      </div>
    </>
  );
}

export default App;
