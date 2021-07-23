export const errorCode = async (code: number, desc = '') => {
  let body;

  switch (code) {
    case 101:
      body = {
        errorMessage: 'invalid_account',
        errorCode: 'E101',
        errorDescription: 'id 및 password가 일치하지 않음',
      };
      break;

    case 102:
      body = {
        errorMessage: 'invalid_account',
        errorCode: 'E102',
        errorDescription: '이미 존재하는 계정',
      };
      break;

    case 105:
      body = {
        errorMessage: 'invalid_account',
        errorCode: 'E105',
        errorDescription: '잘못된 이메일 형식',
      };
      break;

    case 108:
      body = {
        errorMessage: 'invalid_account',
        errorCode: 'E108',
        errorDescription: '존재하지 않는 정보',
      };
      break;

    case 109:
      body = {
        errorMessage: 'invalid_account',
        errorCode: 'E109',
        errorDescription: '권한 없음',
      };
      break;

    case 302:
      body = {
        errorMessage: 'invalid_grant',
        errorCode: 'E302',
        errorDescription: '잘못되거나 만료된 access_token',
      };
      break;

    case 303:
      body = {
        errorMessage: 'invalid_grant',
        errorCode: 'E303',
        errorDescription: '중복 데이터 존재',
      };
      break;

    case 401:
      body = {
        errorMessage: 'invalid_form',
        errorCode: 'E401',
        errorDescription: '잘못된 형식의 요청 또는 권한 없음',
      };
      break;

    case 402:
      body = {
        errorMessage: 'invalid_from',
        errorCode: 'E402',
        errorDescription: '잘못되거나 만료된 요청',
      };
      break;

    case 501:
      body = {
        errorMessage: 'does_not_exist',
        errorCode: 'E501',
        errorDescription: '존재하지 않는 파일',
      };
      break;

    case 601:
      body = {
        errorMessage: 'invalid_post',
        errorCode: 'E601',
        errorDescription: '존재하지 않는 글',
      };
      break;

    default:
      break;
  }

  if (desc !== '' && body) {
    body.errorDescription = desc;
  }
  return body;
};
