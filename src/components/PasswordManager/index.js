import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import DeleteList from '../DeleteList'

const initialList = [
  {
    id: uuidv4(),
    website: '',
    userNmame: '',
    password: '',
  },
]

class PasswordManager extends Component {
  state = {
    userList: [],
    website: '',
    userName: '',
    password: '',
    searchInput: '',
  }
  // add Password List ,search list, no password image //

  renderAuthButton = () => {
    const {userList, searchInput} = this.state
    const searchResults = userList.filter(each =>
      each.website.toLowercase().includes(searchInput.toLowercase()),
    )

    if (userList.length === 0 || searchResults.length === 0) {
      return (
        <div className="no-password">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            className="image_2"
            alt="no passwords"
          />
          <p className="heading">No Passwords</p>
        </div>
      )
    }
    return (
      <ul className="row-list">
        {searchResults.map(eachList => (
          <DeleteList
            key={eachList.id}
            listDetails={eachList}
            deleteUser={this.deleteUser}
          />
        ))}
      </ul>
    )
  }

  // form details adding //

  onAddDetails = event => {
    event.preventDefault()
    const {website, userName, password, userList} = this.state
    const newList = {
      id: uuidv4(),
      website,
      userName,
      password,
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, newList],
    }))
  }

  // delete password item//

  deleteUser = id => {
    const {userList} = this.state
    const filteredData = userList.filter(each => each.id !== id)
    this.setState({
      userList: filteredData,
    })
  }
  // all event listeners//

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {website, userName, password, userList, searchInput} = this.state

    return (
      <div className="cards-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo-image"
          />
        </div>
        <div className="container_multi">
          <div className="card-container_1">
            <div className="small-container">
              <h1 className="heading">Add New Password</h1>
              <form className="form-control" onSubmit={this.onAddDetails}>
                <div className="manager">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="image"
                  />
                  <input
                    type="text"
                    className="type-input"
                    placeholder="Enter Website"
                    onChange={this.onChangeWebsite}
                  />
                </div>
                <div className="manager">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="image"
                  />
                  <input
                    type="text"
                    className="type-input"
                    placeholder="Enter Username"
                    onChange={this.onChangeEmail}
                  />
                </div>
                <div className="manager">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="image"
                  />
                  <input
                    type="password"
                    className="type-input"
                    placeholder="Enter Password"
                    onChange={this.onChangePassword}
                  />
                </div>
                <div className="buttn-container">
                  <button className="buttn" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="image_2"
              alt="password manager"
            />
          </div>
          <div className="card-container">
            <div className="container">
              <div className="head">
                <p className="heading">
                  Your Passwords
                  <span className="zero">{userList.length}</span>
                </p>
              </div>
              <div className="manager">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="image_1"
                />
                <input
                  type="search"
                  className="type-input_1"
                  placeholder="Search"
                  onChange={this.onChangeSearchInput}
                  value={searchInput}
                />
              </div>
            </div>
            <hr className="line" />
            <div className="below-line">
              <div className="show">
                <input type="checkbox" id="password" className="check" />
                <label className="head_1" htmlFor="password">
                  Show passwords
                </label>
              </div>
              <ul>{this.renderAuthButton()}</ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
