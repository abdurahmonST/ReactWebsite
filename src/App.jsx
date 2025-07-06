import './App.css';
import logo from './assets/logo.png'
import homePhoto from './assets/homePhoto.jpg'
import boxOne from './assets/secondPage.jpg'
import boxTwo from './assets/thirdPage.jpg'
import clientOne from './assets/client1.jpg'
import clientTwo from './assets/client2.jpg'
import blogOne from './assets/blog1.jpg'
import blogTwo from './assets/blog2.jpg'

function Design() {
  return (
    <div className='container'>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="this is logo" />
          </div>
          <div className="actions">
            <div className="links">
              <a href="#">HOME</a>
              <a href="#">PROJECT</a>
              <a href="#">SERVICES</a>
              <a href="#">ABOUT</a>
              <a href="#">BLOG</a>
              <a href="#">SHOP</a>
              <a href="#">CONTACT</a>
            </div>
              <button>Sign Up</button>
          </div>
        </nav>

        <section className="home">
          <div className="content">
            <div className="text">
              <p className='title'>MODERN INTERIOR</p>
              <h1>Create Your <br />Interior Design</h1>
              <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
              <button>CONTACT</button>
            </div>
            <div className="photo">
              <img src={homePhoto} alt="This is home page image" />
            </div>
          </div>
        </section>
      </header>

      <section className="service">
        <div className="text">
          <p>WHAT WE DO</p>
          <h2>Our Service</h2>
        </div>
        <div className="cards">
          <div className="card">
            <div className="text">
              <h2>Interior Design</h2>
              <p>Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
          <div className="card">
            <div className="text">
              <h2>Architecture</h2>
              <p>Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
          <div className="card">
            <div className="text">
              <h2>Planning</h2>
              <p>Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="boxes">

          <div className="box">
            <div className="photo">
              <img src={boxOne} alt="There is interior photo" />
            </div>
            <div className="text">
              <p className="title">ABOUT US</p>
              <h2>Interioris The Will of An Epoch Mextreo</h2>
              <p className="info">There are many variations of passages of Lorem Ipsum available, <br />
                  but the majority have suffered alteration in some form injected <br />
                  humour, or randomised words which don't look even slightly <br />
                  believable.If you are going to use a passage of Lorem Ipsum, <br />
                  sure there isn't anything embarrassing hidden the middleof text. <br />
                  All the Lorem Ipsum generators on the Internettend to repeat <br />
                  predefined chunks as necessary,making this the first true <br />
                  generator on the Internet. <br />
                </p>
              <button>LEARN MORE</button>
            </div>
          </div>

          <div className="box">
            <div className="text">
              <h2 className="number">20</h2>
              <h2>Years Of Successful <br />Working <br/>The Market</h2>
              <button>LEARN MORE</button>
            </div>
            <div className="photo">
              <img src={boxTwo} alt="There is interior photo" />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <p>TESTIMONIALS</p>
        <h2>Client says about us</h2>
        <div className="clients">
          <div className="client">
            <div className="photo">
              <img src={clientOne} alt="this is client one photo" />
            </div>
            <div className="text">
              <p className='title'>Louis Saville<span>/CEO at Google Inc</span></p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit, sed do eiusmod tempor incididunt ut labore <br />
                et dolore magna aliqua. <br />
              </p>
            </div>
          </div>

          <div className="client">
            <div className="photo">
              <img src={clientTwo} alt="this is client two photo" />
            </div>
            <div className="text">
              <p className='title'>Rekha Varadwaz<span>/Manager at Nike Inc</span></p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit, sed do eiusmod tempor incididunt ut labore <br />
                et dolore magna aliqua. <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ourBlog">
        <div className="text">
          <p>LATEST NEWS</p>
          <h2>From Our Blog</h2>
        </div>
        <div className="blogs">

          <div className="blog">
            <div className="photo">
              <img src={blogOne} alt="this is blog one photo" />
            </div>
            <h2>2020 Interior Design Trends</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button>CONTINUE READING...</button>
          </div>

          <div className="blog">
            <div className="photo">
              <img src={blogTwo} alt="this is blog one photo" />
            </div>
            <h2>28 Notable Product at ARC Interior Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button>CONTINUE READING...</button>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="text">
          <h2>DON'T FORGET TO SING UP</h2>
          <p>Find out early about all upcoming promotions and new product releases with <br />our newsletter.</p>
          <div className="inputSection">
            <input type="text" placeholder='Enter your email address.....'/>
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </section>
      
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <p>But i must explain to you all this mistaken
idea of dencouncing pleasure.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Our Company</a></li>
              <li><a href="#">Services We Provide</a></li>
              <li><a href="#">Career & Opportunity</a></li>
              <li><a href="#">Privacy & Policy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Company</a></li>
              <li><a href="#">Our Testimonials</a></li>
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Our mission</a></li>
              <li><a href="#">Get a free Quot</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="#">Sagarda Familia, Herba</a></li>
              <li><a href="#">Streen Front USA</a></li>
              <li><a href="#">brandoxide@gmail.com</a></li>
              <li><a href="#">002-568423591</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#">f</a>
              <a href="#">t</a>
              <a href="#">i</a>
              <a href="#">l</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Interioris. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default Design;