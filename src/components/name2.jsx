import { h, render, Component } from 'preact'
import Input from './input'

export default class Name2 extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.previousData
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = (data) => {
    this.setState(data, () => this.props.onFormChange(this.state))
  }

  render() {
    console.log(this.state)
    return (
      <form>
        <Input
          labelName="First Name"
          inputName="firstName"
          previousData={{firstName: this.state.firstName}}
          onInputChange={this.handleInputChange}
        />
      </form>
    );
  }
}