import { useState, useRef, useEffect } from 'react';

export const useStateCallback = (initialState) => {
  const [isSubmit, setIsSubmit] = useState(initialState);
  const cbRef = useRef(null);

  const setIsSubmitCallback = (isSubmit, cb) => {
    cbRef.current = cb;
    setIsSubmit(isSubmit);
  };

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(isSubmit);
      cbRef.current = null;
    }
  }, [isSubmit]);

  return [isSubmit, setIsSubmitCallback];
};

/**
 * Validate email
 *
 * @param {String} email
 *
 * @return {Boolean}
 */
export const validateEmail = (email) => {
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(EMAIL_REGEX)) return true;
  return false;
};

/**
 * Validate number and character
 *
 * @param {String} text
 *
 * @return {Boolean}
 */
export const validateNumberAndCharacter = (text) => {
  const NUMBER_CHARACTER_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (text.match(NUMBER_CHARACTER_REGEX)) return true;
  return false;
};