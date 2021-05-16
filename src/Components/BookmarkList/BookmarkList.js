import {useEffect, useState} from 'react';
import Bookmark from './Bookmark/Bookmark';

import firebase from '../../firebase';
import 'firebase/firestore';
import 'firebase/auth';

function BookmarkList(props) {
    const [bookmarkList, setBookmarkList] = useState();
    const currentUser = props.user;
    const bookmarksListToShow = [];

    useEffect(() => {
        if(currentUser){
            console.log('hey')
            firebase.firestore().collection(currentUser.uid).get()
                .then(querySnapshot => {
                    let bookmarks = querySnapshot.docs.map(doc => doc.data());
                    setBookmarkList(bookmarks);
                    console.log(bookmarks);
                    console.log('hey');
                })
                    
        }
    }, [])

    if(bookmarkList){
        bookmarkList.forEach((bookmark)=>{
            bookmarksListToShow.push(
                (<Bookmark
                    key={bookmark.url}
                    title={bookmark.title}
                    url={bookmark.url}
                    desc={bookmark.desc}
                    />)
            );
        });
    }


    return (
        <div>
            {bookmarksListToShow}
        </div>
    )
}

export default BookmarkList
