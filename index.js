import React, { useState } from 'react';
import ReactDOM from 'react-dom'

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click Me</button>
    </div>
  )
}

const wrapper = document.getElementById('root')


ReactDOM.render(
    <Counter />,
    wrapper
  );

export default Counter;

