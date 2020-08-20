// eslint-disable-next-line
const formatErrorMessage = (error: string | any): string => {
  console.log(error);
  if (typeof error === 'string') {
    return error;
  } else if (error.errors && Array.isArray(error.errors) && error.errors.length > 0) {
    return error.errors[0].message;
  } else if (error.message) {
    return error.message;
  } else {
    return 'Error';
  }
};

export default formatErrorMessage;
