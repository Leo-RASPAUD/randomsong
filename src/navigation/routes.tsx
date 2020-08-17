enum Routes {
  HOME = 'Home',
  PROFILE = 'Profile',
  SIGNUP = 'Sign up',
  LOGIN = 'Login',
  SIGNUP_OR_REGISTER = 'Sign up / Register',
}

export type TabParamsList = {
  [Routes.HOME]: undefined;
  [Routes.PROFILE]: undefined;
  [Routes.SIGNUP]: undefined;
  [Routes.LOGIN]: undefined;
  [Routes.SIGNUP_OR_REGISTER]: undefined;
};

export default Routes;
