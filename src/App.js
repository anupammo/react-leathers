import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <div className="App">
      <header className="bg-light">
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand href="#home" className="btn">           
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16">
              <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
            </svg> LETHER            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Carousel indicators={false} fade={true}>
          <Carousel.Item interval={4000} className="bg-warning pt-5">
            <div className="container mt-5">
              <div className="row">
                <div className="col-12">
                  <h1 className="text-center mt-5 mb-2 py-5 white">
                    <strong>Welcome to Leathers India LTD</strong>
                  </h1>
                  <p className="text-center px-5">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English.
                    </p>
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260"><path fill="#ffffff" fillOpacity="1" d="M0,96L120,133.3C240,171,480,245,720,250.7C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
          </Carousel.Item>
          <Carousel.Item interval={4000} className="bg-danger pt-5">
            <div className="container mt-5">
              <div className="row">
                <div className="col-12">
                  <h2 className="text-center h1 mt-5 mb-2 py-5 text-white">
                    <strong>Innovative Leathers Technology</strong>
                  </h2>
                  <p className="text-center text-white px-5">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English.
                    </p>
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260"><path fill="#ffffff" fillOpacity="1" d="M0,96L120,133.3C240,171,480,245,720,250.7C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
          </Carousel.Item>
          <Carousel.Item interval={4000} className="bg-primary pt-5">
            <div className="container mt-5">
              <div className="row">
                <div className="col-12">
                  <h2 className="text-center h1 mt-5 mb-2 py-5 text-white">
                    <strong>Best Sport Shoes Manufacturer</strong>
                  </h2>
                  <p className="text-center text-white px-5">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English.
                    </p>
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260"><path fill="#ffffff" fillOpacity="1" d="M0,96L120,133.3C240,171,480,245,720,250.7C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
          </Carousel.Item>
        </Carousel>
      </header>
      <section className="my-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="h2 text-center">World Class Leathers Goods Provider</h3>
              <p className="my-4 py-4 text-justify">
                It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like
                readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like). It is a long established fact that a reader will be
                distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like
                readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
                    </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5" id="products">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="h2 text-center mb-5">Products of Leathers</h3>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 shadow my-2">
                <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">Sport Shoes</h5>
                  <p className="card-text text-justify">Some quick example text to build on the card title and
                  make up the bulk of the card's content.</p>
                  <a href="#product" className="card-link text-center d-block">Check Details</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 shadow my-2">
                <img src="https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">Face Mask</h5>
                  <p className="card-text text-justify">Some quick example text to build on the card title and
                  make up the bulk of the card's content.</p>
                  <a href="#product" className="card-link text-center d-block">Check Details</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 shadow my-2">
                <img src="https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">Industrial Gloves</h5>
                  <p className="card-text text-justify">Some quick example text to build on the card title and
                  make up the bulk of the card's content.</p>
                  <a href="#product" className="card-link text-center d-block">Check Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="h2 text-center mb-5">Contact Leathers</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card border-0 shadow my-2">
                <div className="card-body my-4">
                  <address className="text-center">
                    <strong className="h3">Leathers India Ltd</strong>
                    <hr className="my-4" />
                                1355 Market St, Suite 900<br />
                                San Francisco, CA 94103<br />
                    <hr className="my-4" />
                    <abbr title="Phone">P:</abbr> (91) 233-444-7890
                                <br />
                    <a className="card-link" href="mailto:help@Leathersindia.com">help@Leathersindia.com</a>
                  </address>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-12">
              <div className="card border-0 shadow my-2">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="fname" className="text-dark"><i className="fas fa-id-card"></i> Full
                                                name</label>
                          <input type="text"
                            className="form-control rounded-0 border-dark bg-white border-left-0 border-bottom-0 border-right-0 shadow-none"
                            id="fname" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="mailid" className="text-dark"><i className="fas fa-envelope"></i> Email
                                                address</label>
                          <input type="email"
                            className="form-control rounded-0 border-dark bg-white border-left-0 border-bottom-0 border-right-0 shadow-none"
                            id="mailid" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="telno" className="text-dark"><i className="fas fa-phone-square-alt"></i>
                                                Mobile
                                                number</label>
                          <input type="tel"
                            className="form-control rounded-0 border-dark bg-white border-left-0 border-bottom-0 border-right-0 shadow-none"
                            id="telno" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="urmsg" className="text-dark"><i className="fas fa-comment-alt"></i> Your
                                                message</label>
                          <textarea rows="8"
                            className="form-control rounded-0 border-dark bg-white border-left-0 border-bottom-0 border-right-0 shadow-none"
                            id="urmsg"></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-outline-dark btn-block rounded-0 shadow-none">
                      <i className="far fa-paper-plane"></i> SEND
                                </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark mt-5 pt-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white">All Rights Reserved © Leathers India</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
