import { h, render, Component } from 'preact'

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.previousData
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => this.props.onInputChange(this.state))
  }

  render() {
    return (
      <label>
        {this.props.labelName}
        <br />
        <input
          name={this.props.inputName}
          type="input"
          value={this.state.firstName}
          onChange={this.handleChange} 
        />
        <br />
      </label>
    )
  }
}