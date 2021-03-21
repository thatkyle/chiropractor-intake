import { h, render, Component } from 'preact'
import Input from './input'

export default class Name extends Component {
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
          labelName='First Name'
          previousData={{ firstName: this.state.firstName }}
          onInputChange={this.handleInputChange}
          inputName='firstName'
        />
        <Input
          labelName='Middle Initial'
          previousData={{ middleInitial: this.state.middleInitial }}
          onInputChange={this.handleInputChange}
          inputName='middleInitial'
          inputAttributes={{ maxLength: '1' }}
        />
        <Input
          labelName='Last Name'
          previousData={{ lastName: this.state.lastName }}
          onInputChange={this.handleInputChange}
          inputName='lastName'
        />
      </form>
    );
  }
}