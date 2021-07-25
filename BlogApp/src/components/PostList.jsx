import React from 'react';
import PostItem from './PostItem';

function PostList(props) {

   

    return (
        <div>{props.postList.map(post =>
            <PostItem
                key={post.id}
                Post={post}
                Id={post.id}
                PostTitle={post.title}
                PostContent={post.content}
                PostDate={post.date}
                PostLiked={post.like}
                onLikes={props.onLike}
            />)}
        </div>
    )
}

export default PostList;
