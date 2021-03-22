import { h, render, Component } from 'preact'
import Input from './input'

export default class Referral extends Component {
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
          labelName='Who may we thank for referring you?'
          previousData={{ referral: this.state.referral }}
          onInputChange={this.handleInputChange}
          inputName='referral'
        />
      </form>
    );
  }
}