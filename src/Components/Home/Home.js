import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoShow from '../../Features/TodoShow';

const Home = () => {
  
    return (
        <div>
            <h1 className='my-4'>Redux To Do app</h1>
            <AddTodo></AddTodo>
            <TodoShow></TodoShow>
        </div>
    );
};

export default Home;