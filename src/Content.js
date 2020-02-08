import React from 'react';
import './App.css';

function Content() {

  const clickButtonHandler = (value) => {
    console.log('CLicked! ' + value)
  }

  const inputHandler = (e) => {
    console.log(e.target.value)
  }

  return (
    <main className="p-3 border">
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
