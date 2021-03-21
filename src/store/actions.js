import { SAVE_FORM, NEXT_FORM_STAGE, PREVIOUS_FORM_STAGE } from './action-types'

export const saveForm = data => ({
  type: SAVE_FORM,
  payload: data,
})

export const nextFormStage = formStage => ({
  type: NEXT_FORM_STAGE,
  payload: formStage
})

export const previousFormStage = formStage => ({
  type: PREVIOUS_FORM_STAGE,
  payload: formStage
})