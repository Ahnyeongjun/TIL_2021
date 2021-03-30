export const ATTENDANCE = {
  ATTENDANCE_NAVIGATION_URL: (schedule, floor) => {
    return `/saturn/attendance/navigation/${schedule}/${floor}`;
  },
  CHANGE_ATTENDANCE_STATE_URL: () => {
    return `/saturn/attendance/student-state`;
  },
  ATTENDANCE_LIST_URL: (schedule, floor, priority) => {
    return `/saturn/attendance/student-state/${schedule}/${floor}/${priority}`;
  },
  RECORD_BY_GRADE_URL: grade => {
    return `/saturn/attendance/record/${grade}`;
  }
};

export const AUTO_COMPLETE = {
  AUTO_COMPLETE_STUDENT_URL: text => {
    return `/mars/student/autocomplete/${text}`;
  }
};

export const PRE_REPORT = {
  PRE_REPORT_LIST_URL: date => {
    return `/mars/pre-absence/date/${date}`;
  },
  CREATE_PRE_REPORT_URL: () => {
    return `/mars/pre-absence`;
  },
  PUT_PRE_REPORT_URL: id => {
    return `/mars/pre-absence/${id}`;
  },
  DELETE_PRE_REPORT_URL: id => {
    return `/mars/pre-absence/${id}`;
  },
  GET_ALL_PRE_REPORT_URL: () => {
    return "/mars/pre-absence";
  }
};

export const WORKING_TEACHER = {
  REMAINING_DATE_URL: () => {
    return `/mars/working-teacher/user/remaining-date`;
  }
};

export const NOTICE_LIST = {
  NOTICE_LIST_URL: () => {
    return `/saturn/main/notice`;
  }
};

export const AUTH = {
  SIGN_UP_URL: () => {
    return `/saturn/auth/join`;
  },
  PW_CHANGE_URL: () => {
    return `/saturn/auth/password`;
  },
  AUTHENTICATE_URL: () => {
    return `/saturn/auth/authentication-number`;
  }
};
