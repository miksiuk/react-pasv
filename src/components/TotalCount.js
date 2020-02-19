import React from 'react';

function State(props) {

  const res = () => {
    props.counters.forEach(el => {
      props.update(el.key, el.name, 0);
    })
  }

  return (
    <div>
      Total: {props.totalValue} <button onClick={res}>Reset</button>

    </div>
  )
}
export default State;
