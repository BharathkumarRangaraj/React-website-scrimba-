mport React from "react";
import ReactDOM from "react-dom";
import "./App.css";

function Header() {
  return (
    <div>
      <header>
        <nav className="nav-items">
          <img className="image" src="./logo192.png" />
          <ul className="menus">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

function Main() {
  return (
    <div>
      <h1>Reason for i am so exitited to learn this js</h1>
      <ul>
        <li>Was first Realeased in 2013</li>
        <li>was originally created in Jordan Walke</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <footer>
        <small>
          <p> &copy; 2021 bharath developement. all rights are reserved</p>
        </small>
      </footer>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
