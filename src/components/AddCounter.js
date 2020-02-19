import React, { useState } from 'react';

function State(props) {
  const [counterName, setName] = useState();
  const [initialValue, setInitialValue] = useState();

  const addCounter = () => {
    if (counterName !== '' && initialValue !== '') {
      props.setCounters(prev => prev.concat([{ key: prev.length + 1, name: counterName, value: +initialValue }]));
      props.setTotal(prev => prev + (+initialValue));
      document.getElementById('nameCounter').value = '';
      document.getElementById('initialValue').value = '';
      setName('');
      setInitialValue('');
    }
  }

  return (
    <>
      <input id="nameCounter" onChange={e => setName(e.target.value)} /> Name of counter
      <input id="initialValue" onChange={e => setInitialValue(e.target.value)} /> Initial value
      <button id="add" onClick={() => addCounter()}>Add Counter</button>
    </>
  )
}
export default State;
