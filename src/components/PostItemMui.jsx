import React from 'react';
import DeleteIconWithTip from '../icons/delete';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardActions, CardContent, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStyles } from './Style';



const PostItemMui = (props) => {
    const classes=useStyles();
    const updateData={
        title: props.PostTitle,
        content: props.PostContent,
        date: props.PostDate,
        like:props.PostLiked
    }
    const updateLikeData = {
        title: props.PostTitle,
        content: props.PostContent,
        date: props.PostDate,
        like: !props.PostLiked
    };

    return (
        <>
            <Card className={classes.root} >
                <CardHeader
                    action={
                        <DeleteIconWithTip 
                        fontSize="small"
                        PostId={props.Id} 
                        onDelete={props.onDelete} />
                        
                    }
                    
                    title={props.PostTitle}
                    subheader={props.PostDate} />
                <CardContent className={classes.content}>
                    <Typography  
                    variant="body2" 
                    color="textSecondary" 
                    component="div"
                    style={{whiteSpace: 'pre-line'}} 
                    >
                        {props.PostContent}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton 
                    aria-label="add to favorites"
                    color={!props.PostLiked ? "primary" : "secondary"}
                    onClick={() => props.onLikes(props.Id, updateLikeData)}>
                        <FavoriteIcon
                        fontSize="small" />
                    </IconButton>
                    <button onClick={()=>{props.onEdit(props.Id, updateData)}}>edit</button>
                </CardActions>
            </Card>
                <br />
        </>
    );
}

export default PostItemMui;