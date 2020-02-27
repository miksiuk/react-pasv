import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';



function State(props) {

    const [name, setName] = useState();
    const [isDisabledDel, setIsDisabledDel] = useState(true);

    const del = () => {
        if (props.counter.name === name) {
            setName('');
            props.closeModal();
            props.update(props.counter.key, props.counter.name);
            setIsDisabledDel(true)
        } else {
            setName('');
        }
    };

    const checkRemove = (e) => {
        setName(e);
        if (props.counter.name === e) {
            setIsDisabledDel(false)
        } else {
            setIsDisabledDel(true)
        }
    }


    return (
        <Modal {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>Enter <strong>"{props.counter.name}"</strong> to remove counter</div>
                <input type="text" class="form-control" id="nameCounter" value={name} onChange={(e) => checkRemove(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" disabled={isDisabledDel} onClick={() => del()}>
                    Delete
          </button>
                <button className="btn btn-secondary" onClick={() => props.closeModal()}>
                    Close
          </button>
            </Modal.Footer>


        </Modal>
    )
}
export default State;