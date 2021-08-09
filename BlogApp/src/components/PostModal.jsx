import React, { useRef } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';


function PostModal(props) {

  

    const titleInput = useRef();
    const contentInput = useRef();
    const dateInput = useRef();
    const data=props.originalData;
    const id=props.postId;

   

    const handleUpdate= (event)=>{
        event.preventDefault();
        const enteredTitle = titleInput.current.value
        const enteredContent = contentInput.current.value
        const enteredDate = dateInput.current.value
        const updateData = {
            title: enteredTitle,
            content: enteredContent,
            date: enteredDate,
            like: data.like
        }
        props.onUpdateData(id,updateData)
        

    }
    const handlePost = (event) => {
        event.preventDefault();
        const enteredTitle = titleInput.current.value
        const enteredContent = contentInput.current.value
        const enteredDate = dateInput.current.value
        const data = {
            title: enteredTitle,
            content: enteredContent,
            date: enteredDate,
            like:false
        }
        props.onSendData(data);

        //props.onDataSent&&setIsModalOpen(false)
    }
    

    return (
        <React.Fragment>
            <Modal show={props.isModalOpen} onHide={props.onModalClose}  centered>
                <Modal.Header closeButton>
                    <Modal.Title>what am I thinking now...</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="mb-3">
                        <label  >Title: </label>
                        <input className="form-control" type="text" name='title' placeholder="Post title" ref={titleInput} defaultValue={props.isEdit?data.title:''}  />
                    </div>
                    <div className="mb-3">
                        <label  >Content: </label>
                        <textarea className="form-control" type="textarea" rows='7' name='content' placeholder="Post content" ref={contentInput} defaultValue={props.isEdit?data.content:''} />
                    </div>
                    <div className="mb-3">
                        <label  >Date: </label>
                        <input className="form-control" type="date" name='date' ref={dateInput} defaultValue={props.isEdit?data.date:''} />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={props.onModalClose}>Close
                        </Button>
                    <Button
                        variant="primary"
                        onClick={props.isEdit?handleUpdate:handlePost}
                        disabled={props.onLoading}
                    >
                        <Spinner
                            animation={!props.onLoading ? "false" : "border"}
                            role="status"
                            size="sm"
                        />
                        {props.onLoading? "Loading":"Post"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );

}

export default PostModal;