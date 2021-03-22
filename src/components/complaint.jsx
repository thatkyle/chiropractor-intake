import { h, render, Component } from 'preact'

export default class Complaint extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.previousData
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => this.props.onFormChange(this.state))
  }

  render() {
    return (
      <form>
        <label>
          <p>What brings you in today?</p>
          <textarea
            rows='4'
            cols='50'
            name='complaint'
            value={this.state.complaint}
            onChange={this.handleInputChange}
          />
          <br />
        </label>
      </form>
    );
  }
}