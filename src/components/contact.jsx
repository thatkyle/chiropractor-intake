import { h, render, Component } from 'preact'
import Input from './input'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.previousData
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => this.props.onFormChange(this.state))
  }

  render() {
    return (
      <form>
        <Input
          labelName='Cell Phone'
          previousData={{ cellPhone: this.state.cellPhone }}
          onInputChange={this.handleInputChange}
          inputName='cellPhone'
        />
        <Input
          labelName='Home Phone'
          previousData={{ homePhone: this.state.homePhone }}
          onInputChange={this.handleInputChange}
          inputName='homePhone'
        />
        <Input
          labelName='Email Address'
          previousData={{ emailAddress: this.state.emailAddress }}
          onInputChange={this.handleInputChange}
          inputName='emailAddress'
        />
      </form>
    );
  }
}