import React from 'react';
import {Card, Button} from 'react-bootstrap';


const PostItem = (props) => {
    const updateLikeData={
        title:props.PostTitle,
        content:props.PostContent,
        date:props.PostDate,
        like:!props.PostLiked
    };
    return (
        <>
        <Card border="primary" style={{ width: '30rem' }} >
            <Card.Header as="h4"  >{props.PostDate}</Card.Header>
            <Card.Body>
                <Card.Title>{props.PostTitle}</Card.Title>
                <Card.Text>
                    {props.PostContent}
                </Card.Text>
                <Button disabled={props.PostLiked} variant="primary" onClick={()=>props.onLikes(props.Id,updateLikeData)}>Like</Button>
               
            </Card.Body>
        </Card>
        <br/>
        </>
    );
}

export default PostItem;