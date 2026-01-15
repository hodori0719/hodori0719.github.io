import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ContentRenderer from './components/ContentRenderer';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
          <div className="container">
            <div className="sidebar">
              <div className="cart">
                <div className="logo">
                  <Link to="/"><img src={logo} alt="JuneYoo.dev"></img></Link>
                </div>
                <h1 className="mobile-header"><Link to="/">JUNE YOO</Link></h1>
                <Navbar/>
              </div>
            </div>
            <div className="body">
              <h1 className="header"><Link to="/">JUNE YOO</Link></h1>
              <ContentRenderer/>
              <div className="footer">
                <div className="copyright">© 2026 June Yoo</div>
                <div className="links">
                  <Link to="/about-this-site">
                    <svg className="information" height="20px" width="20px" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                    </svg>
                  </Link>
                  <a href="https://linkedin.com/in/juneyoo">
                    <svg className="linkedin" viewBox="0 0 128 128">
                    <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
                    </svg>
                  </a>
                  <Link to="/rss.xml" target="_blank" rel="noopener noreferrer">
                    <svg className="rss" height="20px" width="20px" viewBox="0 0 24 24">
                    <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56m0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9"></path>
                    <circle cx="6.18" cy="17.82" r="2.18"></circle>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/*<Graphic />*/}
        </div>
    );
}

export default App;
