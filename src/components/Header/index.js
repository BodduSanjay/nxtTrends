// Write your JS code here
import './index.css'

const Header = () => (
  <div>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="d-none">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>
          <button type="button">Logout</button>
        </li>
      </ul>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="d-display"
      />
    </div>
    <div className="d-display">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
      />
    </div>
  </div>
)
export default Header
