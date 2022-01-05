import { fetchCall, fetchLoginCall } from '../utils/ajax';
import { API_CONSTANTS, API_METHODS } from '../constants/api-constant';

export const getLoginDetails = (callback, payload) => {
  const url = `${API_CONSTANTS.LOGIN_DATA}`;
  return fetchLoginCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};

export const getForgotPasswordDetails = (callback, payload) => {
  const url = `${API_CONSTANTS.FORGOT_PASSWORD}`;
  return fetchCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};

export const getChangePasswordDetails = (callback, payload) => {
  const url = `${API_CONSTANTS.CHANGE_PASSWORD}`;
  return fetchCall((response) => {
    callback(response);
  }, url, API_METHODS.PUT, payload);
};

export const getOtpDetails = (callback, payload) => {
  const url = `${API_CONSTANTS.OTP_VERIFICATION}`;
  return fetchCall((response) => {
    callback(response);
  }, url, API_METHODS.POST, payload);
};

export const getUserList = (callback) => {
  const url = `${API_CONSTANTS.USER_LIST}`;
  return fetchCall((response) => {
    callback(response);
  }, url, API_METHODS.POST);
};