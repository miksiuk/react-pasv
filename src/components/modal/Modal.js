import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { closeModal, updateCounters } from '../../actions'


function State(props) {

    const [name, setName] = useState();

    const del = () => {
        if (props.counterForDelete.name === name) {
            setName('');
            props.closeModal();
            let newCounters = props.counters.filter(el => el.key !== props.counterForDelete.key);
            props.updateCounters(newCounters);
            props.closeModal();
        } else {
            setName('');
        }
    };


    return (
        <Modal {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>Enter <strong>"{props.counterForDelete.name}"</strong> to remove counter</div>
                <input type="text" class="form-control" id="nameCounter" value={name} onChange={(e) => setName(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" disabled={props.counterForDelete.name !== name} onClick={() => del()}>
                    Delete
          </button>
                <button className="btn btn-secondary" onClick={() => props.closeModal()}>
                    Close
          </button>
            </Modal.Footer>


        </Modal>
    )
}

const mapStateToProps = state => ({
    counters: state.counters,
    counterForDelete: state.counterForDelete,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    updateCounters: args => dispatch(updateCounters(args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(State);