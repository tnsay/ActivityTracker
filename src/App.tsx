import { useState } from 'react';

function Counter() {
 
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Student Club Dashboard</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;