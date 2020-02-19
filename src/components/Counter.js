import React from 'react';

function State(props) {

  const countChangePlusHandler = () => {
    props.update(props.counter.key, props.counter.name, props.counter.value + 1);
  }

  const countChangeMinusHandler = () => {
    props.update(props.counter.key, props.counter.name, props.counter.value - 1);
  }

  const res = () => {
    props.update(props.counter.key, props.counter.name, 0);
  };

  const del = () => {
    props.update(props.counter.key, props.counter.name);
  };

  return (
    <div className="text-center">
      <hr />
      <p>{props.counter.name}</p>
      <button onClick={countChangeMinusHandler}>-</button>
      {props.counter.value}
      <button onClick={countChangePlusHandler}>+</button>
      <button onClick={res}>Reset</button>
      <button onClick={del}>Delete</button>

    </div>
  )
}
export default State;
