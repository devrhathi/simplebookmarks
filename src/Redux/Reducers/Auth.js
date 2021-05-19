import firebase from "../../firebase";
import "firebase/auth";

//for signing user in
async function authSignIn(email, password) {
  let user = await firebase.auth().signInWithEmailAndPassword(email, password);
  console.log(user);
  console.log("REDUX CALLED!");
  return user.user;
}

function authReducer(currentAuth = null, action) {
  if (action.type === "Auth/LOGIN")
    return authSignIn(action.payload.email, action.payload.password);
}

export default authReducer;
