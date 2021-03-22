import { h, render, Component } from 'preact'
import './symptoms.css'

export default class Symptoms extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.previousData
    this.handleInputChange = this.handleInputChange.bind(this)
    this.setState({ symptomsIntensity: 5, ...this.state })
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
          <p>If you are already experiencing symptoms, what are they?</p>
          <textarea
            name='symptoms'
            value={this.state.symptoms}
            rows='4'
            cols='50'
            onChange={this.handleInputChange}
          />
        </label>
        <p>How bad is it? How intense are your symptoms?</p>
        <input 
          name='symptomsIntensity'
          type='range'
          min='1'
          max='10'
          value={this.state.symptomsIntensity}
          class='slider'
          onInput={this.handleInputChange}
        />
        <span>{this.state.symptomsIntensity}</span>
      </form>
    );
  }
}