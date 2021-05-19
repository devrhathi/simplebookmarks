export default function authReducer(currentAuth = null, action) {
  switch (action.type) {
    case "Auth/SETAUTH":
      return action.payload.auth;

    default:
      return currentAuth;
  }
}
