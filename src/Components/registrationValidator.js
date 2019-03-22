import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import isNull from 'lodash/isNull';
export default function validateinput(data, formType) {
  let errors = {};
  
  if (formType === 'signPageValidation') {
    if (Validator.isEmpty(data.username)) {
      errors.username = true;
    }
    if (Validator.isEmpty(data.email)) {
      errors.email = true;
    }
    if (Validator.isEmpty(data.password)) {
      errors.password = true;
    }
  } else if (formType === 'loginPageValidation') {
    if (Validator.isEmpty(data.email)) {
      errors.email = true;
    }
    if (Validator.isEmpty(data.password)) {
      errors.password = true;
    }
  } else if (formType === 'loginPageValidation') {
    if (Validator.isEmpty(data.password)) {
      errors.password = true;
    }
    if (Validator.isEmpty(data.voterId)) {
      errors.voterId = true;
    }
  } else if (formType === 'UserDetailsValidation') {
    if (Validator.isEmpty(data.name)) {
      errors.name = true;
    }
    if (Validator.isEmpty(data.gender)) {
      errors.gender = true;
    }
    if (Validator.isEmpty(data.profession)) {
      errors.profession = true;
    }
    if (isNull(data.profileimage)) {
      errors.file = true;
    }
  } else if (formType === 'AdminLoginValidation') {
    if (Validator.isEmpty(data.email)) {
      errors.email = true;
    }
    if (Validator.isEmpty(data.password)) {
      errors.password = true;
    }
  } else if (formType === 'votingSessionForm') {
    if (Validator.isEmpty(data.date)) {
      errors.date = true;
    }
    if (Validator.isEmpty(data.time)) {
      errors.time = true;
    }
    if (Validator.isEmpty(data.time2)) {
      errors.time2 = true;
    }
  } else if (formType === 'voterProfileDisplay') {

    if (isNull(data.file)) {
      errors.file = true;
    }
  } else if (formType === 'addVoter') {
    if (Validator.isEmpty(data.email)) {
      errors.email = true;
    }
  }
  return {

    errors,
    isValid: isEmpty(errors)
  };
}