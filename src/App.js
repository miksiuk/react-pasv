import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import Content from './Content';
import Counter from './components/Counter';
import AddCounter from './components/AddCounter'
import Total from './components/TotalCount';
import ModalDeleteConfirm from './components/modal/Modal';
import { connect } from 'react-redux'


function App(props) {

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

  return (
    <div className="text-center">
      <Header items={HeaderItems} />
      <div className="container">
        <Total />
        <div className="row text-left h3 pt-3"> Counters</div>
        {props.counters.map((el) => {
          return (<>
            <Counter key={el.key} currentCounter={el} />
          </>)
        })}
        <AddCounter />
      </div>
      <Footer menu1={HeaderItems} menu2={footersItems} text={footerText} />
      <ModalDeleteConfirm show={props.isOpenModal} counter={props.counterForDelete} />
    </div >
  );
}


const mapStateToProps = state => ({
  counters: state.counters,
  isOpenModal: state.isOpenModal,
  counterForDelete: state.counterForDelete,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
