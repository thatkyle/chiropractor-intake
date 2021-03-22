import { h, render, Component } from 'preact'
import Input from './input'

export default class EmergencyContact extends Component {
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
        <p>IN CASE OF EMERGENCY, CONTACT</p>
        <Input
          labelName='Name'
          previousData={{ contactName: this.state.contactName }}
          onInputChange={this.handleInputChange}
          inputName='contactName'
        />
        <Input
          labelName='Relationship'
          previousData={{ contactRelationship: this.state.contactRelationship }}
          onInputChange={this.handleInputChange}
          inputName='contactRelationship'
        />        
        <Input
          labelName='Contact Number'
          previousData={{ contactPhoneNumber: this.state.contactPhoneNumber }}
          onInputChange={this.handleInputChange}
          inputName='contactPhoneNumber'
        />
      </form>
    );
  }
}