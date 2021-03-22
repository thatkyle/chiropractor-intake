import { h, render, Component } from 'preact'
import Input from './input'

export default class Occupation extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.previousData
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(data) {
    this.setState(data, () => this.props.onFormChange(this.state))
  }

  render() {
    return (
      <form>
        <Input
          labelName='Employer / School'
          previousData={{ employerOrSchool: this.state.employerOrSchool }}
          onInputChange={this.handleInputChange}
          inputName='employerOrSchool'
        />
        <Input
          labelName='Occupation'
          previousData={{ occupation: this.state.occupation }}
          onInputChange={this.handleInputChange}
          inputName='occupation'
          inputAttributes={{ maxLength: '1' }}
        />
      </form>
    );
  }
}