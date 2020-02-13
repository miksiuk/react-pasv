import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {

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

  const footerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ";

  return (
    <div className="App container-xl">
      <Header items={HeaderItems} />
      <Content />
      <Footer menu1={HeaderItems} menu2={footersItems} text={footerText} />
    </div>
  );
}

export default App;
