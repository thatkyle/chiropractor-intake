import { h, render, Component } from 'preact'

export default class Demographics extends Component {
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
          Sex
          <br />
          <input
            name="gender"
            type="input"
            value={this.state.gender}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Age
          <br />
          <input
            name="age"
            type="input"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Birthday
          <br />
          <input
            name="dob"
            type="input"
            value={this.state.dob}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Marital Status
          <br />
          <input
            name="marital_status"
            type="input"
            value={this.state.maritalStatus}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}