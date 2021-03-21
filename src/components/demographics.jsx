import { h, render, Component } from 'preact'
import Input from './input'

export default class Demographics extends Component {
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
          labelName='Sex'
          previousData={{ gender: this.state.gender }}
          onInputChange={this.handleInputChange}
          inputName='gender'
        />
        <Input
          labelName='Age'
          previousData={{ age: this.state.age }}
          onInputChange={this.handleInputChange}
          inputName='age'
        />
        <Input
          labelName='Birthday'
          previousData={{ dob: this.state.dob }}
          onInputChange={this.handleInputChange}
          inputName='dob'
        />
        <Input
          labelName='Marital Status'
          previousData={{ maritalStatus: this.state.maritalStatus }}
          onInputChange={this.handleInputChange}
          inputName='maritalStatus'
        />
      </form>
    );
  }
}