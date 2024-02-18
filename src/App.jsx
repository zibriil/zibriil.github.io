import { useState, useRef } from 'react';

import { ARTICLES } from './data/articles';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolios from './components/Portfolios';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Detail from './components/Detail';

export default function App() {
  const selectPortfolio = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  function handleShowDetail(id) {
    setModalIsOpen(true);
    selectPortfolio.current = id;

    const selected = ARTICLES.find(article => article.id === id);
    setSelectedPortfolio(selected);
  }

  return (
    <>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <Detail
          portfolio={selectedPortfolio}
          onClose={() => setModalIsOpen(false)}
        />
      </Modal>

      <Header>
        <Navbar
          isOpen={isOpenMobileMenu}
          openMobileMenu={() => setIsOpenMobileMenu(true)}
          closeMobileMenu={() => setIsOpenMobileMenu(false)}
        />
        <Hero />
      </Header>
      <About />
      <Portfolios showDetail={handleShowDetail} />
      <Contact />
      <Footer />
    </>
  );
}
