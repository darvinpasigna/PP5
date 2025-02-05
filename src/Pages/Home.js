import React, { useState, useEffect } from 'react';
import '../App.css';
import Carou from '../Components/Carou';
import Card from '../Components/Card';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';
import LoginComp from '../Components/LoginComp';
import useCode from '../Code/Code';
import ViewItem from '../Components/ViewItem';
import SignupForm from '../Components/SignupForm';

function Home() {
  const [showForgot, setShowForgot] = useState(false);
  const { 
    setShowLoginModal, showLoginModal, 
    showSignupModal, setShowSignupModal, 
    view, setView, 
    pcUrl, viewItem, 
    changeImage, currentImg,
    expandedDesc, showMoreDesc,
    handleViewItem
  } = useCode();
  
  const [prod, setProd] = useState([]);
 
  useEffect(() => {
    fetch(pcUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProd(data);
      });
  }, []);

  return (
    
    <>
    <div className="background"></div>
      <NavBar setShowLoginModal={setShowLoginModal} />

      <LoginComp 
        showLoginModal={showLoginModal} 
        showSignupModal={showSignupModal} 
        setShowSignupModal={setShowSignupModal} 
        setShowLoginModal={setShowLoginModal} 
      />
      
        <div className='row mt-1'>
          <div className='col-9'><Carou /></div>
          <div className='col-3'><SignupForm /> </div>
      </div>
      
      <br />
      <br />
      <div className="row">
        <div className="col-xl-8 mb-5 px-5">
          <p className="text-uppercase text-muted fw-bold mb-1">Top choices</p>
          <h3>Popular this week</h3>
        </div>
      </div>

      <Card
        prod={prod}
        handleViewItem={handleViewItem}
        showForgot={showForgot}
        setShowForgot={setShowForgot}
        setShowSignupModal={setShowSignupModal} 
        setShowLoginModal={setShowLoginModal}
        view={view}
        setView={setView}
      />
      <br />
      <br />
      <ViewItem 
        viewItem={viewItem} 
        changeImage={changeImage}
        currentImg={currentImg}
        expandedDesc={expandedDesc}
        showMoreDesc={showMoreDesc}
        view={view}
        setView={setView}
      />
      <Footer />
    </>
  );
}

export default Home;
