import React, { useState } from 'react';
import axios from 'axios';
import ListPost from '../components/PostList';
import ModalPost from '../components/ModalPost';

function PostPage() {
    const [isLoading, setisLoading] = useState(false);
    const [isDataSent, setisDataSent] = useState(false);
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


    return (
        <React.Fragment>
            <div><ModalPost onSendData={handleSendRequest} onLoading={isLoading} onDataSent={isDataSent} /></div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}><ListPost onDataSent={isDataSent} /></div>
            
        </React.Fragment>
    )
}
export default PostPage;