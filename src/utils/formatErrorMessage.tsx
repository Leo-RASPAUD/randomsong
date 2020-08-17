const formatErrorMessage = (error: string | { message: string }): string => {
  console.log(error);
  if (typeof error === 'string') {
    return error;
  } else if (error.message) {
    return error.message;
  } else {
    return 'Error while signing in';
  }
};

export default formatErrorMessage;
