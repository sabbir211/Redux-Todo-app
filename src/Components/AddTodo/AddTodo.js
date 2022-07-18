import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import TodoShow from '../../Features/TodoShow';
import { useForm } from "react-hook-form";
import { addTodo } from '../../Features/todoSlice';

const AddTodo = () => {
    const { register, handleSubmit, reset } = useForm();

    const { todos } = useSelector(state => state.todoReducer)
    const dispatch = useDispatch()
    const addTodoHandler = (data) => {
        const id = todos.length + 1
        const allData = { ...data, id: id, completed: false }
        dispatch(addTodo(allData))
        reset()
    }

    return (
        <div className='text-white'>
            <Form onSubmit={handleSubmit(addTodoHandler)}>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Enter todo name"
                        aria-label="Enter todo name"
                        aria-describedby="basic-addon2"
                        {...register("todoName")}
                    />
                    <Button variant="outline-secondary" id="button-addon2" type="submit">
                        Add To Do
                    </Button>
                </InputGroup>
            </Form>
          
        </div>
    );
};

export default AddTodo;