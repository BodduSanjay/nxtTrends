import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div>
      <div>
        <h1>Clothes That Get You Noticed</h1>
        <p>
          Fashion is part of the daily air and it does not quite help that it
          changes
        </p>
        <button type="button">Shop Now</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)
export default Home
