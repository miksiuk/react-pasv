import React, { useState } from 'react';
import { connect } from 'react-redux'
import { updateCounters } from '../actions'

function State(props) {

  const [counterName, setName] = useState();
  const [value, setValue] = useState();

  const onSubmit = (counterName, initialValue) => {
    if (counterName !== '' && initialValue !== '') {
      let newCounters = [...props.counters, { key: props.counters.length + 1, name: counterName, value: +initialValue }]
      props.updateCounters(newCounters);
      setName('');
      setValue('');
    }
  }

  return (
    <>
      <input id="nameCounter" value={counterName} onChange={e => setName(e.target.value)} /> Name of counter
      <input id="initialValue" value={value} onChange={e => setValue(e.target.value)} /> Initial value
      <button id="add" onClick={() => onSubmit(counterName, value)}>Add Counter</button>
    </>
  )
}

const mapStateToProps = state => ({
  counters: state.counters
})

const mapDispatchToProps = dispatch => ({
  updateCounters: args => dispatch(updateCounters(args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(State);
