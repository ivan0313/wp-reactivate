import React, { useState } from 'react';

const Shortcode = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  }

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default Shortcode;
