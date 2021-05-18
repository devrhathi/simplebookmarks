import {useEffect, useState} from 'react';
import Bookmark from './Bookmark/Bookmark';

import firebase from '../../firebase';
import 'firebase/firestore';
import 'firebase/auth';

function BookmarkList(props) {
    const [bookmarkList, setBookmarkList] = useState();
    const bookmarksListToShow = [];

    useEffect(() => {
        let detatchListener;
        if (props.user){
        detatchListener = firebase.firestore().collection(props.user.uid).onSnapshot(querySnapshot => {
            let bookmarks = querySnapshot.docs.map(doc => doc.data());
            setBookmarkList(bookmarks);
        });
    }
    return detatchListener;
}, [props.user]);


        // if(props.user){
        //     firebase.firestore().collection(props.user.uid).get()
        //         .then(querySnapshot => {
        //             let bookmarks = querySnapshot.docs.map(doc => doc.data());
        //             setBookmarkList(bookmarks);
        //         })
                    
        // }

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

    console.log(bookmarksListToShow);
    return (
        <div>
            {bookmarksListToShow.length > 0 ? bookmarksListToShow : (<h1 style={{textAlign:"center"}}>Loading...</h1>)}
        </div>
    )
}

export default BookmarkList
