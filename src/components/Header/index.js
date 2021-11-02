// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      className="logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <div className="menu">
      <li className="menu-item">Home</li>
      <li className="menu-item">Products</li>
      <li className="menu-item">Cart</li>
      <button className="button" type="button">
        Logout
      </button>
    </div>
  </div>
)

export default Header
