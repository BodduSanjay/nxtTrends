import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', isCorrect: false, errorMsg: ''}

  changeUserName = event => {
    this.setState({userName: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const {history} = this.props
      history.push('/')
    } else {
      this.setState({isCorrect: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {userName, password, isCorrect} = this.state

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <label htmlFor="Username">USERNAME</label>
          <input
            id="Username"
            type="text"
            value={userName}
            placeholder="USERNAME"
            onChange={this.changeUserName}
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="PASSWORD"
            onChange={this.changePassword}
          />
          <button type="submit">Login</button>
          {isCorrect && <p>{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
