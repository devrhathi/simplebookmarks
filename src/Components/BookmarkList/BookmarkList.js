import { useEffect, useState } from "react";
import Bookmark from "./Bookmark/Bookmark";
import firebase from "../../firebase";
import "firebase/firestore";
import "firebase/auth";
import { useSelector } from "react-redux";

function BookmarkList() {
  const currentUser = useSelector((state) => state);

  const [bookmarkList, setBookmarkList] = useState();
  const bookmarksListToShow = [];

  console.log("re rendered bookmarklist, auth is");
  console.log(currentUser);

  useEffect(() => {
    let detatchListener;
    if (currentUser) {
      detatchListener = firebase
        .firestore()
        .collection(currentUser.uid)
        .onSnapshot((querySnapshot) => {
          let bookmarks = querySnapshot.docs.map((doc) => doc.data());
          setBookmarkList(bookmarks);
        });
    }
    return detatchListener;
  }, [currentUser]);

  if (bookmarkList) {
    bookmarkList.forEach((bookmark) => {
      bookmarksListToShow.push(
        <Bookmark
          key={bookmark.url}
          title={bookmark.title}
          url={bookmark.url}
          desc={bookmark.desc}
        />
      );
    });
  }

  return (
    <div>
      {bookmarksListToShow.length > 0 ? (
        bookmarksListToShow
      ) : (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      )}
    </div>
  );
}

export default BookmarkList;
