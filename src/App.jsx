import './App.css';
import logo from './assets/logo.png'
import homePhoto from './assets/homePhoto.jpg'

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
      </section>
    </div>
  )
}

export default Design;