import React, { useState,useEffect } from 'react';
import axios from 'axios';
import ListPost from '../components/PostList';
import ModalPost from '../components/PostModal';

function PostPage() {
    const [isLoading, setisLoading] = useState(false);
    const [isDataSent, setisDataSent] = useState(false);
    const [postList, setpostList] = useState([]);
    // send Post request
    const handleSendRequest = async (data) => {
        setisLoading(true)
        setisDataSent(false)
        try {
            const res = await axios.post('https://react-http-1-f0a3b-default-rtdb.asia-southeast1.firebasedatabase.app/post_test.json', data)
            res.statusText === 'OK' && setisLoading(false);
            res.statusText === 'OK' && setisDataSent(true);
        } catch (error) {
            console.log(error)
        }
    }
    // send Put request
    const handleLike = async (id,data) => {
        setisLoading(true)
        setisDataSent(false)
        try {
            const res = await axios.put(`https://react-http-1-f0a3b-default-rtdb.asia-southeast1.firebasedatabase.app/post_test/${id}.json`, data)
            res.statusText === 'OK' && setisLoading(false);
            res.statusText === 'OK' && setisDataSent(true);
        } catch (error) {
            console.log(error)
        }
    }
    // fetch post list everytime new post sent
    useEffect(() => {
        async function fetchPostList() {
            try {
                const res = await axios.get('https://react-http-1-f0a3b-default-rtdb.asia-southeast1.firebasedatabase.app/post_test.json');
                const posts = [];
                for (const key in res.data) {
                    const post = {
                        id: key,
                        ...res.data[key]
                    };
                    posts.push(post)
                }
                setpostList(posts)
                console.log(posts)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPostList();
    }, [isDataSent]);
    


    return (
        <React.Fragment>
            <div><ModalPost onSendData={handleSendRequest} onLoading={isLoading} onDataSent={isDataSent} /></div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                    <ListPost postList={postList} onLike={handleLike} /></div>
            
        </React.Fragment>
    )
}
export default PostPage;