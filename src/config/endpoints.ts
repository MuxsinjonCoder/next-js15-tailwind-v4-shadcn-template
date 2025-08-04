export const AUTH = {
  REGISTER: "/users/register",
  VERIFYEMAILFORREGISTER: "/users/verify-email-for-register",
  RESENDCODE: "/users/resend-code",
  LOGIN: "/users/login",
};

export const PASSWORD = {
  FORGOTPASSWORD: "/users/forgot-password",
  CHANGEPASSWORD_BY_ID: "/users/change-password",
};

export const USERS = {
  GET_BY_PAGE: "/users/get-users-page",
  GETALL: "/users/get-all-users",
  GET_BY_ID: "/users/get-user-by-id",
  UPDATE_CREDENTIALS: "/users/update-user-credentials",
  DELETE_BY_ID: "/users/delete-user",
  TOOGLE_BLOCK_USER: "/users/toogle-block-user",
};

export const TESTS = {
  CREATE: "/tests/create-test-collection",
  GET_BY_ID: "/tests/get-test-by-id",
  START_TEST: "/tests/start-test",
  GET_USER_CREATED_TESTS: "/tests//get-user-created-tests-page",
  GET_TESTS_WITH_FILTER: "/tests/get-tests-filter",

  // analyz tests endpoints
  SUBMIT_TEST_RESULTS: "/tests/submit-test-results",
  ANALYZE_TEST_RESULTS: "/tests/get-user-solved-test",
  GET_ALL_USER_SOLVED_TESTS: "/tests/get-user-solved-tests-page",
};
