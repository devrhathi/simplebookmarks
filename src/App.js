import React from 'react'
import MyNavbar from './Components/Navbar/MyNavbar';
import Search from './Components/Search/Search';

import Bookmark from './Components/BookmarkList/Bookmark/Bookmark';

function App() {
  return (
    <div className="app">
      <MyNavbar/>
      <Search/>
      <Bookmark/>
      {/* <BookmarkList/> */}
    </div>
  )
}

export default App
