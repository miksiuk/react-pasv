import React from 'react';

function State(props) {

  const res = () => {
    let newCounters = props.counters;
    newCounters = newCounters.map(el => { return { ...el, value: 0 } })
    props.setCounters(newCounters);
    props.setTotal(newCounters.reduce(((a, b) => a + b.value), 0));
  }

  return (
    <div className="row pt-3">
      <div className="mr-3 mt-1 pl-1 h5">Total: </div>
      <div className="bg-light pl-2 pr-2 mt-1 mb-1">{props.totalValue} </div>
      <button className="btn btn-primary ml-3" onClick={res}>Reset</button>
    </div>
  )
}
export default State;
