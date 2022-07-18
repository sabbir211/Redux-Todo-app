import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../../Features/todoSlice';
const UpdateModal = ({ todoId, settodoid }) => {
    const dispatch = useDispatch()
    const [complete, setComplete] = useState(true)
    const handleClose = () => settodoid(null);
    const { todos } = useSelector(state => state.todoReducer)
    const selectedTodo = todos.find(todo => todo.id === todoId)
    const nameRef = useRef()
    const handleUpdate = (id) => {
        const todoName = nameRef.current.value
        const completed = complete
        const data = { todoName,completed, id: todoId }
        dispatch(updateTodo(data))
        handleClose()
    }


    return (
        <>
            <Modal show={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update {selectedTodo.todoName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Update Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="change todo name"
                                autoFocus
                                ref={nameRef}
                            />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" onChange={(e) =>setComplete(e.value)}>
                            <option value={true}>Complete</option>
                            <option value={false}>Not Complete</option>
                        </Form.Select>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleUpdate(todoId)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UpdateModal;