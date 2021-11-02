// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    return (
      <div>
        <div className="login-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </div>
          <div>
            <img
              className="login-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
            />
          </div>

          <form className="form-container" onSubmit={this.onSubmitForm}>
            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              className="input"
              type="text"
              id="username"
              onChange={this.onChangeUsername}
              value={username}
              placeholder="Username"
            />
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              type="password"
              id="password"
              onChange={this.onChangePassword}
              value={password}
              placeholder="Password"
            />
            <button className="login-button" type="submit">
              Login
            </button>
            {showSubmitError && <p>*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
