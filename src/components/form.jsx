import { h, render, Component } from 'preact'
import { connect } from 'react-redux'
import formStages from './form-stages'
import { saveForm, nextFormStage, previousFormStage }  from 'store/actions'

const mapStateToProps = (state) => state

// to do create selectors and only pass selected state to child form

class Form extends Component {
  constructor(props) {
    super(props);
    this.formStages = formStages
    this.updateForm = this.updateForm.bind(this)
  }

  updateForm = (data) => {
    this.setState(data)
  }

  handleNextFormStage = () => {
    this.props.saveForm(this.state)
    this.props.nextFormStage(this.props.forms.formStage)
  }
  handlePreviousFormStage = () => {
    this.props.saveForm(this.state)
    this.props.previousFormStage(this.props.forms.formStage)
  }

  render() {
    const FormStage = this.formStages.get(this.props.forms.formStage)
    return (
      <div>
        <FormStage
          onFormChange={this.updateForm}
          previousData={this.props.forms}
        />
        <button onClick={this.handlePreviousFormStage}>Back</button>
        <button onClick={this.handleNextFormStage}>Next</button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    saveForm,
    nextFormStage,
    previousFormStage
  }
)(Form)