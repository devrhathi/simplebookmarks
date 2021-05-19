export const authSignIn = (email, password) => {
  return {
    type: "Auth/SIGNIN",
    payload: { email, password },
  };
};

export const authSignUp = (email, password) => {
  return {
    type: "Auth/SIGNUP",
    payload: { email, password },
  };
};

export const setAuth = (auth) => {
  return {
    type: "Auth/SETAUTH",
    payload: { auth },
  };
};
