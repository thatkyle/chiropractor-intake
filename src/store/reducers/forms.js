import { SAVE_FORM, NEXT_FORM_STAGE, PREVIOUS_FORM_STAGE } from '../action-types'
import { order } from '../../components/form-stages'

const initialState = {
  formStage: 'name',
  firstName: '',
  middleInitial: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
}

export default function formsReducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_FORM: {
      return {
        ...state,
        ...action.payload
      }
    }
    case NEXT_FORM_STAGE: {
      return {
        ...state,
        formStage: order[order.indexOf(action.payload) + 1]
      }
    }
    case PREVIOUS_FORM_STAGE: {
      return {
        ...state,
        formStage: order[order.indexOf(action.payload) - 1]
      }
    }
    default:
      return state
  }
}