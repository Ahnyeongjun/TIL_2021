export const SET_MAIN_TEXT_REMAINING_DATE =
  "main_text/SET_MAIN_TEXT_REMAINING_DATE";

export const GET_MAIN_TEXT_REMAINING_DATE_SAGA =
  "main_text/GET_MAIN_TEXT_REMAINING_DATE_SAGA";

export const setMainTextRemainingDate = payload => ({
  type: SET_MAIN_TEXT_REMAINING_DATE,
  payload
});

export const getMainTextRemainingDateSaga = () => ({
  type: GET_MAIN_TEXT_REMAINING_DATE_SAGA
});
