import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    submitPermission: false,
    firstErrorMsg: false,
    secondErrorMsg: false,
    firstInput: '',
    secondInput: '',
  }

  firstChange = event => {
    this.setState({firstInput: event.target.value})
  }

  validatingFirst = () => {
    const {firstInput} = this.state
    return firstInput !== ''
  }

  firstBlur = () => {
    const value = this.validatingFirst()
    this.setState({firstErrorMsg: !value})
  }

  firstInput = () => {
    const {firstInput} = this.state
    return (
      <div>
        <label htmlFor="first">FIRST NAME</label>
        <input
          type="text"
          id="first"
          value={firstInput}
          onChange={this.firstChange}
          onBlur={this.firstBlur}
        />
      </div>
    )
  }

  secondChange = event => {
    this.setState({secondInput: event.target.value})
  }

  validatingSecond = () => {
    const {secondInput} = this.state
    return secondInput !== ''
  }

  secondBlur = () => {
    const value = this.validatingSecond()
    this.setState({secondErrorMsg: !value})
  }

  secondInput = () => {
    const {secondInput} = this.state
    return (
      <div>
        <label htmlFor="second">LAST NAME</label>
        <input
          type="text"
          id="second"
          value={secondInput}
          onChange={this.secondChange}
          onBlur={this.secondBlur}
        />
      </div>
    )
  }

  finalSubmission = event => {
    event.preventDefault()
    const {submitPermission, secondErrorMsg, firstErrorMsg} = this.state
    const data1 = this.validatingFirst()
    const data2 = this.validatingSecond()
    if (data1 && data2) {
      this.setState({submitPermission: true})
    } else {
      this.setState({
        submitPermission: false,
        firstErrorMsg: !data1,
        secondErrorMsg: !data2,
      })
    }
    console.log(data1)
    console.log(data2)
    console.log({submitPermission})
  }

  formContainer = () => {
    const {firstErrorMsg, secondErrorMsg} = this.state
    return (
      <form onSubmit={this.finalSubmission}>
        {this.firstInput()}
        {firstErrorMsg && <p>Required</p>}

        {this.secondInput()}
        {secondErrorMsg && <p>Required</p>}
        <button type="submit">Submit</button>
      </form>
    )
  }

  redirectingToMain = () => {
    this.setState({submitPermission: false, firstInput: '', secondInput: ''})
  }

  successContainer = () => {
    const {firstInput} = this.state
    return (
      <div>
        <p>Submitted Successfully</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <button onClick={this.redirectingToMain} type="button">
          Submit Another Response
        </button>
      </div>
    )
  }

  render() {
    const {submitPermission} = this.state
    return (
      <div>
        <h1>Registration</h1>
        {submitPermission ? this.successContainer() : this.formContainer()}
      </div>
    )
  }
}
export default RegistrationForm
