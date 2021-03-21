import { h, render, Component } from 'preact'

export default class Contact extends Component {
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
          Home Phone
          <br />
          <input
            name="home_phone"
            type="input"
            value={this.state.homePhone}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Cell Phone
          <br />
          <input
            name="cell_phone"
            type="input"
            value={this.state.cellPhone}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Email Address
          <br />
          <input
            name="email"
            type="input"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}