import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import Content from './Content';
import Counter from './components/Counter';
import AddCounter from './components/AddCounter'
import Total from './components/TotalCount';
import ModalDeleteConfirm from './components/modal/Modal';

function App() {
  const initial = [{
    key: 1,
    name: 'Counter1',
    value: 3
  },
  {
    key: 2,
    name: 'Counter2',
    value: 3
  }];

  const [counters, setCounters] = useState(initial);
  const [totalValue, setTotal] = useState(counters.reduce(((a, b) => a + b.value), 0));
  const [isOpenModalDeleteConfirm, setIsOpenModalDeleteConfirm] = useState(false);
  const [modalCounter, setModalCounter] = useState('');

  const openModal = (el) => {
    setIsOpenModalDeleteConfirm(true);
    setModalCounter(el);
  }

  const closeModal = () => {
    setIsOpenModalDeleteConfirm(false);
    setModalCounter('');
  }


  const HeaderItems = [{
    text: "Home",
    link: "home-page"
  },
  {
    text: "Products",
    link: "goods",
  },
  {
    text: "Service",
    link: "serv",
  },
  {
    text: "Contact",
    link: "contact",
  }];

  const footersItems = [{
    text: "bla1",
    link: "bla1"
  },
  {
    text: "bla2",
    link: "bla2",
  },
  {
    text: "bla3",
    link: "bla3",
  },
  {
    text: "bla4",
    link: "bla4",
  }];

  const footerText = "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.";

  // const [totalCount1, setTotalCount1] = useState(3);
  // const [totalCount2, setTotalCount2] = useState(3);

  // const countChange = (v) => {
  //   setCounters({ value: v });
  // }
  const update = (key, name, value) => {
    let newCounters = [...counters];
    if (value === undefined) {
      if (newCounters.length === 1) {
        newCounters = [];
      } else {
        newCounters = newCounters.filter(el => el.key !== key && el.name !== name);
      }
    } else {
      newCounters = newCounters.map(el => el.key === key && el.name === name ? { ...el, value: value } : el);
    }
    setCounters(newCounters);
    setTotal(newCounters.reduce(((a, b) => a + b.value), 0));
  }

  const addCounter = (counterName, initialValue) => {
    if (counterName !== '' && initialValue !== '') {
      let newCounters = [...counters, { key: counters.length + 1, name: counterName, value: +initialValue }]
      setCounters(newCounters);
      setTotal(newCounters.reduce((a, b) => a + b.value, 0));
    }
  }

  return (
    <div className="App container-xl text-center">
      <Header items={HeaderItems} />
      <Total totalValue={totalValue} update={update} counters={counters} />
      {counters.map((el) => {
        return (<>
          <Counter key={el.key} counter={el} update={update} openModal={openModal} />
        </>)
      })}
      <AddCounter addCounter={addCounter} />
      <Footer menu1={HeaderItems} menu2={footersItems} text={footerText} />
      <ModalDeleteConfirm show={isOpenModalDeleteConfirm} closeModal={closeModal} update={update} counter={modalCounter} />
    </div >
  );
}

export default App;
