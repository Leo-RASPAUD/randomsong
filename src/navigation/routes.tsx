enum Routes {
  HOME = 'Home',
  PROFILE = 'Profile',
  SIGNUP = 'Sign up',
  LOGIN = 'Login',
  LOGOUT = 'Logout',
  SIGNUP_OR_REGISTER = 'Sign up / Register',
}

export type RoutesParamsList = {
  [Routes.HOME]: undefined;
  [Routes.PROFILE]: undefined;
  [Routes.SIGNUP]: undefined;
  [Routes.LOGIN]: undefined;
  [Routes.LOGOUT]: undefined;
  [Routes.SIGNUP_OR_REGISTER]: undefined;
};

export default Routes;
