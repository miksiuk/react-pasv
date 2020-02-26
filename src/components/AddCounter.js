import React, { useState } from 'react';

function State(props) {
  const [counterName, setName] = useState();
  const [value, setValue] = useState();

  const onSubmit = (counterName, initialValue) => {
    props.addCounter(counterName, initialValue);
    setName('');
    setValue('');
  }

  return (
    <>
      <input id="nameCounter" value={counterName} onChange={e => setName(e.target.value)} /> Name of counter
      <input id="initialValue" value={value} onChange={e => setValue(e.target.value)} /> Initial value
      <button id="add" onClick={() => onSubmit(counterName, value)}>Add Counter</button>
    </>
  )
}
export default State;
