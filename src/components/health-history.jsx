import { h, render, Component } from 'preact'
import Input from './input'

const conditions = [
  'AIDS/HIV',
  'Alcoholism',
  'Anxiety',
  'Arthritis',
  'Asthma/Allergies',
  'ADD/ADHD',
  'Back Pain',
  'Cardiovascular Issues',
  'Cancer',
  'Circulation Issues',
  'Childhood Illness',
  'Depression',
  'Diabetes',
  'Digestive Issues',
  '(Constipation/Diarrhea /IBS)',
  'Elbow/Wrist/Hand Issues',
  'Endocrine Issues (Thyroid)',
  'Foot/Ankle Issues',
  'Headaches / Migraines',
  'Heart Disease',
  'Hepatitis',
  'Hip Issues',
  'Immune Issues',
  'Lymphatic Issues',
  'Multiple Sclerosis',
  'Neck Pain',
  'Reproductive Issues',
  'Ringing in Ears',
  'Scoliosis',
  'Shoulder Issues',
  'Stroke',
  'TMJ Issues',
  'Urinary Issues',
  'Osteoporosis/Osteopenia',
  'Other',
]

export default class HealthHistory extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.previousData
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    let data = (event.target.name !== 'OtherInput')
      ? event.target.checked
      : event.target.value
    this.setState({
      [event.target.name]: data
    }, () => this.props.onFormChange(this.state))
  }

  render() {
    const checkbox = condition => 
      <input
        type="checkbox" 
        name={condition} 
        onChange={this.handleInputChange}
        checked={this.state[condition]}
      />
    return (
      <form>
        <p>Health & Illness History</p>
        <p>Please check the box beside any condition that you have or have had.</p>
        {conditions.map(condition =>
          (condition !== 'Other') ?
            <div>
              {checkbox(condition)}
              <label for={condition}> {condition}</label>
              <br />
            </div> :
            <div>
              {checkbox(condition)}
              <label for={condition}> {condition}: <input 
                  type='text'
                  name={condition + 'Input'}
                  value={this.state[condition + 'Input']}
                  disabled={!this.state[condition]}
                  onChange={this.handleInputChange}
                />
              </label>
              <br />
            </div>
        )}
      </form>
    );
  }
}