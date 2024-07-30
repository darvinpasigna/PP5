import React, { useState, useEffect } from 'react';
import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import useCode from '../../Code/Code';
import axios from 'axios';
import ViewItem from '../../Components/ViewItem';

const CardShop = () => {
  const [items, setItems] = useState([]);
  const { 
    cartCount, setCartCount, 
    addToCart, 
    cartUrl, pcUrl, 
    videoGameUrl, gamingPhoneUrl,
    handleViewItem,
    viewItem,
    changeImage,
    currentImg,
    expandedDesc,
    showMoreDesc,
    view,
    setView,
  } = useCode();

  useEffect(() => {
    axios.get(cartUrl)
    .then((response) => {
      setCartCount(response.data.length);
    });
    const fetchData = async () => {
      try {
        const pcResponse = await fetch(pcUrl);
        const pcData = await pcResponse.json();
        const videoGameResponse = await fetch(videoGameUrl);
        const videoGameData = await videoGameResponse.json();
        const gamingPhoneResponse = await fetch(gamingPhoneUrl);
        const gamingPhoneData = await gamingPhoneResponse.json();
        const combinedData = [...pcData, ...videoGameData, ...gamingPhoneData];
        const shuffledData = combinedData.sort(() => 0.5 - Math.random());
        setItems(shuffledData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pcUrl, videoGameUrl, gamingPhoneUrl, setCartCount, cartUrl]);

  return (
    <>
      <NavLogin cartCount={cartCount} />
      <div className="background"></div>
      <div className='container d-flex-wrap'>
        {items.map((item, index) => (
          <div key={index} className="card mb-3 carditem" style={{ backgroundColor: "#f8f9fa5a" }}>
            <div className="row g-0">
              <div className="col-md-6">
                <div className="img-container">
                  <img src={item.main_img} className="btn card-img" alt="cardpic" onClick={() => handleViewItem(item)} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title btn" style={{ textAlign: 'left', fontWeight: "600" }} onClick={() => handleViewItem(item)}>{item.Name}</h5> <br />
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

export default CardShop;
