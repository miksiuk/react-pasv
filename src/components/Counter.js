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

  return (
    <div className="card mt-2 mb-2">
      <div className="card-body row pt-1 pb-1 ml-3 mr-3">
        <div className="col-lg-2">{props.counter.name}</div>
        <div className="col-2">
          <button onClick={countChangeMinusHandler}>-</button>
          {props.counter.value}
          <button onClick={countChangePlusHandler}>+</button>
        </div>
        <div className="col-2">
          <button onClick={res}>Reset</button>
          <button onClick={() => props.openModal(props.counter)}>Delete</button>
        </div>
      </div>
    </div>
  )
}
export default State;
