import React from 'react';
import {Card, Button} from 'react-bootstrap';


const PostItem = (props) => {
    return (
        <>
        <Card border="primary" style={{ width: '30rem' }} >
            <Card.Header as="h4" >{props.PostDate}</Card.Header>
            <Card.Body>
                <Card.Title>{props.PostTitle}</Card.Title>
                <Card.Text>
                    {props.PostContent}
                </Card.Text>
                <Button variant="secondary">Like</Button>
            </Card.Body>
        </Card>
        <br/>
        </>
    );
}

export default PostItem;