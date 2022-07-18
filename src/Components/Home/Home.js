import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoShow from '../../Features/TodoShow';
import Users from '../Users/Users';

const Home = () => {

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center '>
                <div>
                    <h1 className='my-4'>Redux To Do app</h1>
                    <AddTodo></AddTodo>
                    <TodoShow></TodoShow>
                </div>
            </div>
            <Users></Users>
        </div>
    );
};

export default Home;