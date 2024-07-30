import React, { useState } from 'react';
import Logo from '../Images/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { Modal, Button } from 'react-bootstrap'; // Assuming you have imported Bootstrap's modal components

function NavLogin({ cartCount }) {
  const [searchItem, setSearchItem] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    switch (searchItem) {
      case 'Desktop':
        navigate('/pc');
        break;
      case 'Gamingphone':
        navigate('/gamingphone');
        break;
      case 'Videogame':
        navigate('/videogame');
        break;
    }
  };

  const handleSignOut = () => {
    setShowModal(false);
    navigate('/PPGgameshopP5'); // Navigate to desired route after sign-out
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <Link to="/memberhome"><img id='Logo1' src={Logo} alt="logo" width={250} height={50} /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/memberhome">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/memberabout">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/membercontact">Contact Us</Link>
              </li>
            </ul>
            <form className="RightNav d-flex" role="search" style={{ width: "60%" }} onSubmit={handleSearch}>
              <div className="input-group input-group-sm mb-3 me-5 pt-3">
                <div style={{ width: "180px" }}>
                  <select className='form-select' onChange={(e) => setSearchItem(e.target.value)}>
                    <option>All</option>
                    <option value="Desktop">Desktop Computer</option>
                    <option value="Gamingphone">Gaming Phone</option>
                    <option value="Videogame">Video Game</option>
                  </select>
                </div>
                <input type="text" className="form-control" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
                <button className="btn btn-outline-secondary" type="submit">Search</button>
              </div>
              <Link id='cart' to="/cart">Cart (<span style={{ color: 'white' }}>{cartCount}</span>)</Link>
              <div className='dropdown'>
                <button
                  id='btn'
                  className="btn btn-outline-none dropdown-toggle mt-3 pt-1"
                  style={{ backgroundColor: "dark" }}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </button>
                <ul className='dropdown-menu'>
                  <li><Link to="/Personalprofile" style={{ textDecoration: "none", color: 'lightgray' }}>Personal Info</Link></li>
                  <li><Link to="/purchases" style={{ textDecoration: "none", color: 'lightgray' }}>My Purchases</Link></li>
                  <li><button className="dropdown-item" onClick={() => setShowModal(true)}>Logout</button></li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Sign Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to sign out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSignOut}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavLogin;
