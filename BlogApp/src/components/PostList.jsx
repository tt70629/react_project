import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostItem from './PostItem';

function PostList(props) {

    const [postList, setpostList] = useState([])
    //const[dataSent, setdataSent]=useState(props.onDataSent)
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
                //console.log(posts);
            } catch (error) {
                console.log(error)
            }
        }
        fetchPostList();
    }, [props.onDataSent]);

    return (
        <div>{postList.map(post =>
            <PostItem
                key={post.id}
                PostTitle={post.title}
                PostContent={post.content}
                PostDate={post.date}
            />)}
        </div>
    )
}

export default PostList;
