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
          type="input"
          name={this.props.inputName}
          value={this.state[this.props.inputName]}
          onChange={this.handleChange}
          {...this.props.inputAttributes}
        />
        <br />
      </label>
    )
  }
}