import React from 'react';
import { connect } from 'react-redux'
import { updateCounters } from '../actions'


function State(props) {

  const res = () => {
    let newCounters = props.counters;
    newCounters = newCounters.map(el => { return { ...el, value: 0 } })
    props.updateCounters(newCounters);
  }

  return (
    <div className="row pt-3">
      <div className="mr-3 mt-1 pl-1 h5">Total: </div>
      <div className="bg-light pl-2 pr-2 mt-1 mb-1">{props.totalValue} </div>
      <button className="btn btn-primary ml-3" onClick={res}>Reset</button>
    </div>
  )
}

const mapStateToProps = state => ({
  totalValue: state.counters.reduce((a, b) => a + b.value, 0),
  counters: state.counters
})

const mapDispatchToProps = dispatch => ({
  updateCounters: args => dispatch(updateCounters(args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(State);
