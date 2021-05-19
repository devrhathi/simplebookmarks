import React, { useEffect, useState } from "react";
import MyNavbar from "./Components/Navbar/MyNavbar";
import Search from "./Components/Search/Search";

import BookmarkList from "./Components/BookmarkList/BookmarkList";
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    //check if firebase has auth
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  return (
    <div className="app">
      <MyNavbar user={currentUser} />
      <Search user={currentUser} />
      <BookmarkList user={currentUser} />
    </div>
  );
}

export default App;
