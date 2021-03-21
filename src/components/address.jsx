import { h, render, Component } from 'preact'
import Input from './input'

export default class Address extends Component {
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
          labelName='Address'
          previousData={{ address: this.state.address }}
          onInputChange={this.handleInputChange}
          inputName='address'
        />
        <Input
          labelName='City'
          previousData={{ city: this.state.city }}
          onInputChange={this.handleInputChange}
          inputName='city'
          inputAttributes={{ maxLength: '1' }}
        />
        <Input
          labelName='State'
          previousData={{ state: this.state.state }}
          onInputChange={this.handleInputChange}
          inputName='state'
        />
      </form>
    );
  }
}