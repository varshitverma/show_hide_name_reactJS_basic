// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showSecondName: false}

  showSecondNameBtn = () => {
    this.setState(prevState => ({
      showSecondName: !prevState.showSecondName,
    }))
  }

  showFirstNameBtn = () => {
    this.setState(prevState => ({
      showFirstName: !prevState.showFirstName,
    }))
  }

  render() {
    const {showFirstName, showSecondName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="btn-container">
            <button
              className="button"
              type="button"
              onClick={this.showFirstNameBtn}
            >
              Show/Hide Firstname
            </button>
            {showFirstName && <p className="card">Joe</p>}
          </div>
          <div className="btn-container">
            <button
              className="button"
              type="button"
              onClick={this.showSecondNameBtn}
            >
              Show/Hide Lastname
            </button>
            {showSecondName && <p className="card">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
