import React from 'react';
import '../App.css';

const Card = ({ 
  showForgot, setShowForgot,
  setShowLoginModal, setShowSignupModal,
  prod,
  handleViewItem
  }) => {
 
 
  return (
    <>
      <div className='container d-flex-wrap'>
        {prod.slice(0, 9).map((item, index) => (
          <div key={index} className="card mb-3 carditem" style={{ backgroundColor: "#f8f9fa99" }}>
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={item.main_img}
                  className="btn img-fluid rounded-start"
                  type='button'
                  alt="cardpic"
                  onClick={() => handleViewItem(item)}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5
                    className="btn card-title"
                    type='button'
                    style={{ textAlign: 'left', fontWeight: "600" }}
                    onClick={() => handleViewItem(item)}
                  >
                    {item.Name}
                  </h5>
                  <br />
                  <h6>&#8369;{parseFloat(item.price.replace(/,/g, '')).toLocaleString('en-US')}</h6>
                </div>
                <div style={{ justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                <span className="fa fa-star checked" style={{color: "#ff8c00"}}></span>
                    <span class="fa fa-star checked" style={{color: "#ff8c00"}} ></span>
                    <span class="fa fa-star checked" style={{color: "#ff8c00"}} ></span>
                    <span class="fa fa-star checked" style={{color: "#ff8c00"}} ></span>
                    <span class="fa fa-star checked"></span>
                  <button
                    className='btn btn-primary form-control'
                    type='button'
                    onClick={() => { setShowForgot(true); }}
                  >BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Forgot to Login Modal */}
      <div className='modal' id='forgotologin' style={{ display: showForgot ? 'block' : 'none' }}>
        <div className='modal-dialog modal-dialog-centered' style={{ width: "400px" }}>
          <div className='modal-content'>
            <div className="modal-header">
              <button type="button" className="btn-close" onClick={() => { setShowForgot(false); }}></button>
            </div>
            <br />
            <h5 style={{ paddingLeft: "20px", color: "red" }}>Oops! You forgot to login!!</h5>
            <p style={{ padding: "0 20px 0 20px" }}>Not a member? click the button below to sign up.</p>
            <div className="modal-footer" style={{ margin: "auto" }}>
              <button type="button" className="btn btn-primary"
                onClick={() => {
                  setShowLoginModal(true);
                  setShowForgot(false);
                }}
              >Login here</button>
              <button style={{ marginLeft: "50px" }} type="button" className="btn btn-success"
                onClick={() => {
                  setShowSignupModal(true);
                  setShowForgot(false);
                }}
              >Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
