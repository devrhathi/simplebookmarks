export const authLogin = (email, password) => {
  return {
    type: "Auth/LOGIN",
    payload: { email, password },
  };
};
