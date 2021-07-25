import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';


function PostModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false)
    useEffect(() => {
        props.onDataSent&& handleModalClose();
    }, [props.onDataSent]);

    const titleInput = useRef();
    const contentInput = useRef();
    const dateInput = useRef();

    const handleModal = () => {setIsModalOpen(true)}
    const handleModalClose = () => {setIsModalOpen(false)}
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
            <button className='btn btn-primary btn-sm m-3' onClick={handleModal}>Post something...</button>
            <Modal show={isModalOpen} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>what am I thinking now...</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="mb-3">
                        <label  >Title: </label>
                        <input className="form-control" type="text" name='title' placeholder="Post title" ref={titleInput} />
                    </div>
                    <div className="mb-3">
                        <label  >Content: </label>
                        <textarea className="form-control" type="textarea" rows='7' name='content' placeholder="Post content" ref={contentInput} />
                    </div>
                    <div className="mb-3">
                        <label  >Date: </label>
                        <input className="form-control" type="date" name='date' ref={dateInput} />
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleModalClose}>Close
                        </Button>
                    <Button
                        variant="primary"
                        onClick={handlePost}
                        disabled={props.onLoading}
                        style={{
                            backgroundColor: "#2183f8",
                        }}
                    >
                        <Spinner
                            animation={!props.onLoading ? "false" : "border"}
                            role="status"
                            size="sm"
                        />
                        {props.onLoading ? "Loading" : "Save changes"}
                    </Button>
                </Modal.Footer>
            </Modal>


        </React.Fragment>

    );

}

export default PostModal;