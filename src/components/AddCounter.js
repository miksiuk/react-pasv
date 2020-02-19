import React, { useState } from 'react';

function State(props) {
  const [counterName, setName] = useState();
  const [initialValue, setInitialValue] = useState();

  const addCounter = () => {
    props.setCounters(prev => prev.concat([{ key: prev.length + 1, name: counterName, value: +initialValue }]));
    props.setTotal(prev => prev + (+initialValue));
  }
  return (
    <>
      <input onChange={e => setName(e.target.value)} /> Name of counter
      <input onChange={e => setInitialValue(e.target.value)} /> Initial value
      <button onClick={() => addCounter()}>Add Counter</button>
    </>
  )
}
export default State;
