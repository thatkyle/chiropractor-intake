import { h, render, Component } from 'preact'

export default class Address extends Component {
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
          Address
          <br />
          <input
            name="address"
            type="input"
            value={this.state.address}
            onChange={this.handleInputChange}
          />  
        </label>
        <br />
        <label>
          City
          <br />
          <input
            name="city"
            type="input"
            maxLength="1"
            value={this.state.city}
            onChange={this.handleInputChange}
            />
        </label>
        <br />
        <label>
          State
          <br />
          <input
            name="state"
            type="input"
            value={this.state.state}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}