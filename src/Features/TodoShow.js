import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import UpdateModal from '../Components/UpadateModal/UpdateModal';
import { addTodo, deleteTodo } from './todoSlice';

const TodoShow = () => {
    const [todoId,setTodoId]=useState(null)
    const { todos } = useSelector(state => state.todoReducer)
    const dispatch = useDispatch()
    const deleteTodoHandler = (id) => {
        dispatch(deleteTodo(id))
    }
    return (
        <div>
            <Table className='text-white' bordered >
                <thead>
                    <tr>
                        <th>Serial No.</th>
                        <th>To Do Name</th>
                        <th>Status</th>
                        <th>Remove form list</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => {
                            return <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.todoName}</td>
                                <td>{todo.completed ? "Completed" : "Not complete"}</td>
                                <td><button className='btn btn-outline-danger' onClick={() => deleteTodoHandler(todo.id)}>Delete</button></td>
                                <td><button className='btn btn-outline-primary' onClick={()=>setTodoId(todo.id)}>Update</button></td>
                            </tr>
                        })
                    }


                </tbody>
            </Table>
            {
                todoId &&<UpdateModal todoId={todoId} settodoid={setTodoId}></UpdateModal>
            }
        </div>
    );
};

export default TodoShow;