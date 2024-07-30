import React, { useState, useEffect } from 'react';
import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import useCode from '../../Code/Code';
import axios from 'axios';
import ViewItem from '../../Components/ViewItem';

const GamingPhone = () => {
  const {gamingPhoneUrl, addToCart, 
          cartUrl, cartCount, 
          setView, view, viewItem,
          expandedDesc, currentImg, handleViewItem,
          changeImage, showMoreDesc, setCartCount } = useCode();
  const [gamingPhone, setGamingPhone] = useState([]);

  useEffect(() => {
    fetch(gamingPhoneUrl)
      .then((response) => response.json())
      .then((data) => {
        setGamingPhone(data);
      })
      axios.get(cartUrl)
      .then((response) => {
        setCartCount(response.data.length);
      })
  }, [cartUrl]);


  return (
<>
<NavLogin cartCount={cartCount} />
<div className="background"></div>
<h1 style={{backgroundColor: "rgba(0, 0, 255, 0.733)", padding: "10px"}}><i style={{color: "darkred"}}> GAMING PHONE</i> </h1>
<br />
<div className='container d-flex-wrap'>
  {gamingPhone.slice(0, 9).map((item, index) => (
    <div key={index} className="card mb-3 carditem" style={{ backgroundColor: "#f8f9fa5a" }}>
      <div className="row g-0">
        <div className="col-md-6">
          <div className="img-container">
            <img src={item.main_img} className="btn card-img" alt="cardpic" onClick={() => handleViewItem(item)} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="btn card-title" style={{ textAlign: 'left', fontWeight: "600" }} onClick={() => handleViewItem(item)}>{item.Name}</h5> <br />
            <h6>&#8369;{parseFloat(item.price.replace(/,/g, '')).toLocaleString('en-US')}</h6>
          </div>
          <span className="fa fa-star checked" style={{color: "#ff8c00"}}></span>
                    <span class="fa fa-star checked" style={{color: "#ff8c00"}} ></span>
                    <span class="fa fa-star checked" style={{color: "#ff8c00"}} ></span>
                    <span class="fa fa-star checked" style={{color: "#ff8c00"}} ></span>
                    <span class="fa fa-star checked"></span>
          <div className='card-footer d-flex'>
            
            <button 
              className='btn btn-primary form-control' 
              type='button'
              onClick={() => addToCart(item)}
              >ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
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
};

export default GamingPhone;
