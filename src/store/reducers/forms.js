import { SAVE_FORM, NEXT_FORM_STAGE, PREVIOUS_FORM_STAGE } from '../action-types'
import formStages from '../../components/form-stages'

const formStagesOrder = [...formStages.keys()]

const initialState = {
  formStage: formStagesOrder[0],
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
        formStage: formStagesOrder[formStagesOrder.indexOf(action.payload) + 1]
      }
    }
    case PREVIOUS_FORM_STAGE: {
      return {
        ...state,
        formStage: formStagesOrder[formStagesOrder.indexOf(action.payload) - 1]
      }
    }
    default:
      return state
  }
}