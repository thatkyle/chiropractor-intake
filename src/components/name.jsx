import { h, render, Component } from 'preact'

export default class Name extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.previousData
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => this.props.onFormChange(this.state))
  }

  render() {
    return (
      <form>
        <label>
          First Name
          <br />
          <input
            name="firstName"
            type="input"
            value={this.state.firstName}
            onChange={this.handleInputChange} 
          />
        </label>
        <br />
        <label>
          Middle Initial
          <br />
          <input
            name="middleInitial"
            type="input"
            maxLength="1"
            value={this.state.middleInitial}
            onChange={this.handleInputChange} 
            />
        </label>
        <br />
        <label>
          Last Name
          <br />
          <input
            name="lastName"
            type="input"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}