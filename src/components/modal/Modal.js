import React, { useState } from 'react';
import './modal.css';


function State(props) {

    const [name, setName] = useState();

    const del = () => {
        if (props.counter.name === name) {
            setName('');
            props.closeModal();
            props.update(props.counter.key, props.counter.name);
        } else {
            setName('');
        }
    };


    return (
        !props.show ? null : (
            <div className="modal">
                <div>
                    <input id="nameCounter" value={name} onChange={(e) => setName(e.target.value)} /> Name of counter
                </div>
                <div><button onClick={() => props.closeModal()}>Close</button>
                    <button onClick={() => del()}>Delete</button>
                </div>
            </div>
        )
    )
}
export default State;