import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';





const DeleteIconWithTip = ({onDelete,PostId}) => {
 
    return (
        <section >
        <Tooltip title="Delete">
            <IconButton 
            aria-label="delete"
            onClick={
                () => { if (window.confirm('Are you sure you wish to delete this item?')) onDelete(PostId) }} 
                >
                <DeleteIcon
                fontSize="small"
                color="primary"
                />
            </IconButton>
        </Tooltip>
        </section>
    );
}

export default DeleteIconWithTip;


