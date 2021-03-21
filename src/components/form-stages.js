import Name from './name'
import Address from './address'
import Contact from './contact'
import Demographics from './demographics'
import Name2 from './name2'

export const components = {
  'name2': Name2,
  // 'name': Name,
  // 'address': Address,
  // 'contact': Contact,
  // 'demographics': Demographics,
  // 'employer',
  // 'spouse',
  // 'emergency',
  // 'referral',
  // 'complaint',
  // 'symptoms',
  // 'symptoms_chart',
  // 'symptoms_impact',
  // 'wellness_assessment',
  // 'children_and_pregnancy',
  // 'health_history',
  // 'allergies_medications_and_supplements',
  // 'disclaimers_and_signature'
}

export const order = [
  'name2',
  'name',
  'address',
  'contact',
  'demographics',
  'employer',
  'spouse',
  'emergency',
  'referral',
  'complaint',
  'symptoms',
  'symptoms_chart',
  'symptoms_impact',
  'wellness_assessment',
  'children_and_pregnancy',
  'health_history',
  'allergies_medications_and_supplements',
  'disclaimers_and_signature'
]