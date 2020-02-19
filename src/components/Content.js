import React from 'react';

function Content(props) {

  let name = 'Initial';

  const clickButtonHandler = (value) => {
    props.bc(name + ' ' + value);
  }

  const inputHandler = (e) => {
    name = e.target.value;
  }

  return (
    <main className="text-center">
      <h1>
        Content
      </h1>
      <button onClick={() => clickButtonHandler('Add')}>ADD</button>
      <button onClick={() => clickButtonHandler('Delete')}>DELETE</button>
      <input onChange={inputHandler}></input>

    </main >
  );
}

export default Content;
