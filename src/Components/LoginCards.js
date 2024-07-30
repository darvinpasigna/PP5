import React, { useEffect, useState } from 'react';
import '../App.css';
import useCode from '../Code/Code';

const LoginCards = ({handleViewItem, addToCart}) => {

const {pcUrl} = useCode();
const [prod, setProd] = useState([]);
  useEffect(() => {
    fetch(pcUrl)
      .then((response) => response.json())
      .then((data) => {
        setProd(data);
      });
  }, []);

  return (
    <div className='container d-flex-wrap'>
      {prod.slice(0, 9).map((item, index) => (
        <div key={index} className="card mb-3 carditem" style={{ backgroundColor: "#f8f9fa5a" }}>
          <div className="row g-0">
            <div className="col-md-6">
              <img 
              src={item.main_img} 
              name="main_img" 
              id="main_img" 
              className="img-fluid rounded-start btn" 
              alt="cardpic"
              onClick={() => handleViewItem(item)}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title btn" name="Name" id="Name" style={{ textAlign: 'left', fontWeight: "600" }} onClick={() => handleViewItem(item)}>{item.Name}</h5> <br />
                <h6>&#8369;{parseFloat(item.price.replace(/,/g, '')).toLocaleString('en-US')}</h6>
              </div>
              <span className="fa fa-star checked" style={{color: "#ff8c00"}}></span>
                    <span class="fa fa-star checked" style={{color: "#ff8c00"}} ></span>
                    <span class="fa fa-star checked" style={{color: "#ff8c00"}} ></span>
                    <span class="fa fa-star checked" style={{color: "#ff8c00"}} ></span>
                    <span class="fa fa-star checked"></span>
              <div className='card-footer d-flex' >
                <button className='btn btn-primary form-control' type='submit' onClick={() => addToCart(item)}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>

    
  );
};

export default LoginCards;
