import React from 'react'

const ViewItem = ({
        viewItem,
        changeImage,
        currentImg,
        expandedDesc,
        showMoreDesc,
        view,
        setView
}) => {
  return (
    <>
    {viewItem && (
        <div className="modal" tabIndex="-1" id='view' style={{ display: view ? 'block' : 'none' }}>
          <div className="modal-dialog-lg modal-dialog-centered" style={{width: "1000px", margin: "auto"}}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{viewItem.Name}</h5>
                <button type="button" className="btn-close" onClick={() => { setView(false); }}></button>
              </div>
              <div className="modal-body">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src={currentImg} className="img-fluid rounded-start" alt="cardpic" style={{width: "60%"}} />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 style={{ fontWeight: "600" }}>{viewItem.Name}</h5>
                      <h6>&#8369;{parseFloat(viewItem.price.replace(/,/g, '')).toLocaleString('en-US')}</h6>
                      <p style={{ cursor: 'pointer' }}>
                        <small>
                          {expandedDesc === viewItem ? (
                            <span>
                              {viewItem.description} <br />
                              <span style={{ color: 'blue', textDecoration: 'underline' }} onClick={() => showMoreDesc(viewItem)}>
                                Hide
                              </span>
                            </span>
                          ) : (
                            <span>
                              {viewItem.description.substring(0, 500)}...{' '}
                              <span style={{ color: 'blue', textDecoration: 'underline' }} onClick={() => showMoreDesc(viewItem)}>
                                Read more
                              </span>
                            </span>
                          )}
                        </small>
                      </p>
                      <div className='d-flex'>
                      <img
                          onClick={() => changeImage(viewItem.main_img)}
                          className='btn'
                          type='button'
                          src={viewItem.main_img}
                          alt='product'
                          style={{width: "100px", marginLeft: "20px"}}
                        />
                        <img
                          onClick={() => changeImage(viewItem.img1)}
                          className='btn'
                          type='button'
                          src={viewItem.img1}
                          alt='product'
                          style={{width: "100px", marginLeft: "20px"}}
                        />
                        <img
                          onClick={() => changeImage(viewItem.img2)}
                          className='btn'
                          type='button'
                          src={viewItem.img2}
                          alt='product'
                          style={{width: "100px", marginLeft: "20px"}}
                        />
                        <img
                          onClick={() => changeImage(viewItem.img3)}
                          className='btn'
                          type='button'
                          src={viewItem.img3}
                          alt='product'
                          style={{width: "100px", marginLeft: "20px"}}
                        />
                      </div>
                    </div>
                    <br /><br />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ViewItem;