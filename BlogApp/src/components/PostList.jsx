//import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PostModal from '../components/PostModal';
//import PostItem from './PostItem';

import PostItemMui from './PostItemMui';

function PostList({ postList, onUpdate, onDelete, onSendData, onLoading, onDataSent }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [originalData, setOriginalData]=useState({})
    const [postId, setPostId]=useState('')

    useEffect(() => {
        onDataSent && handleModalClose();
    }, [onDataSent]);



    const handleModal = () => { setIsModalOpen(true) }
    const handleModalClose = () => { setIsModalOpen(false) }
    const handlePost=()=>{
        setIsEdit(false)
        setIsModalOpen(true)
    }
    const handlePrevalue=(id,data)=>{
        setOriginalData(data)
        setPostId(id)
        setIsEdit(true)
        setIsModalOpen(true)
    }

    return (
        <>
        <div>
            <button className='btn btn-primary btn-sm m-3' onClick={handlePost}>Post something...</button>
        </div>
            <div>
                <PostModal
                    isModalOpen={isModalOpen}
                    isEdit={isEdit}
                    originalData={originalData}
                    postId={postId}
                    onModalOpen={handleModal}
                    onModalClose={handleModalClose}
                    onSendData={onSendData}
                    onUpdateData={onUpdate}
                    onLoading={onLoading}
                    onDataSent={onDataSent}
                />
            </div>
            <div>
                {postList.map(post =>
                <PostItemMui
                    key={post.id}
                    Post={post}
                    Id={post.id}
                    PostTitle={post.title}
                    PostContent={post.content}
                    PostDate={post.date}
                    PostLiked={post.like}
                    onLikes={onUpdate}
                    onDelete={onDelete}
                    onEdit={handlePrevalue}
                />)}
            </div>
        </>
    )
}

export default PostList;
