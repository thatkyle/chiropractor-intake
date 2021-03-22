import { h, render, Component } from 'preact'
import Input from './input'

export default class Spouse extends Component {
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
          labelName="Spouse's Name"
          previousData={{ spouseName: this.state.spouseName }}
          onInputChange={this.handleInputChange}
          inputName='spouseName'
        />
        <Input
          labelName="Spouse's Employer"
          previousData={{ spouseEmployer: this.state.spouseEmployer }}
          onInputChange={this.handleInputChange}
          inputName='spouseEmployer'
        />        
        <Input
          labelName="Spouse's Occupation"
          previousData={{ spouseOccupation: this.state.spouseOccupation }}
          onInputChange={this.handleInputChange}
          inputName='spouseOccupation'
        />
      </form>
    );
  }
}