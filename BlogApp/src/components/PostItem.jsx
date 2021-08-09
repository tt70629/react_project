import React from 'react';
import { Card, Button } from 'react-bootstrap';
import DeleteIconWithTip from '../icons/delete';
import { useStyles } from './Style';



const PostItem = (props) => {
    const classes=useStyles();
    const updateLikeData = {
        title: props.PostTitle,
        content: props.PostContent,
        date: props.PostDate,
        like: !props.PostLiked
    };
  
    return (
        <>
            <Card border="primary" style={{ width: '30rem' }} >
                <Card.Header as="h4"  >
                    {props.PostDate}
                    <div className={classes.iconButton} >
                    <DeleteIconWithTip  PostId={props.Id} onDelete={props.onDelete}/>
                    </div>
                    </Card.Header>
                <Card.Body>
                    <Card.Title>{props.PostTitle}</Card.Title>
                    <Card.Text>
                        {props.PostContent}
                    </Card.Text>
                    <Button
                        size='sm'
                        variant={!props.PostLiked?'primary':'secondary'}
                        onClick={() => props.onLikes(props.Id,updateLikeData)}
                    >{!props.PostLiked?'Like':'Unlike'}</Button>
                </Card.Body>
            </Card>
            <br />
        </>
    );
}

export default PostItem;