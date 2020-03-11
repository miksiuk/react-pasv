import React from 'react';
import { connect } from 'react-redux'
import { updateCounters, openModal } from '../actions'

function State(props) {

  const countChangePlusHandler = () => {
    let newCounters = props.counters.map(el => el.key === props.currentCounter.key ? { ...el, value: el.value + 1 } : el);
    props.updateCounters(newCounters);
  }

  const countChangeMinusHandler = () => {
    let newCounters = props.counters.map(el => el.key === props.currentCounter.key ? { ...el, value: el.value - 1 } : el);
    props.updateCounters(newCounters);
  }

  const res = () => {
    let newCounters = props.counters.map(el => el.key === props.currentCounter.key ? { ...el, value: 0 } : el);
    props.updateCounters(newCounters);
  };

  return (
    <div className="card mt-2 mb-2">
      <div className="card-body row pt-1 pb-1 ml-3 mr-3">
        <div className="col-lg-2">{props.currentCounter.name}</div>
        <div className="col-2 row">
          <button className="btn btn-outline-success ml-2 mr-2 pl-2 pr-2" onClick={countChangeMinusHandler}>-</button>
          <div className="bg-light pl-2 pr-2 mt-1 mb-1"> {props.currentCounter.value}</div>
          <button className="btn btn-outline-success ml-2 mr-2 pl-2 pr-2" onClick={countChangePlusHandler}>+</button>
        </div>
        <div className="col-2">
          <button onClick={res}>Reset</button>
          <button onClick={() => props.openModal(props.currentCounter)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  counters: state.counters,
})

const mapDispatchToProps = dispatch => ({
  updateCounters: args => dispatch(updateCounters(args)),
  openModal: args => dispatch(openModal(args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(State);
