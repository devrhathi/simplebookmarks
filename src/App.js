import React, { useEffect } from "react";
import MyNavbar from "./Components/Navbar/MyNavbar";
import Search from "./Components/Search/Search";
import BookmarkList from "./Components/BookmarkList/BookmarkList";
import { useDispatch } from "react-redux";
import { setAuth } from "./Redux/Actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      // setCurrentUser(JSON.parse(user));
      dispatch(setAuth(JSON.parse(user)));
    }
  });

  return (
    <div className="app">
      <MyNavbar />
      <Search />
      <BookmarkList />
    </div>
  );
}

export default App;
