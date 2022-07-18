import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [
        { id: 1, todoName: "Learn redux", completed: true },
        { id: 2, todoName: "Learn React-toolkit", completed: true },
        { id: 3, todoName: "Learn React-redux ", completed: true },
    ]
}
const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        showAllTodos: state => state,
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            const restTodos = state.todos.filter(todo => todo.id !== action.payload)
            state.todos = restTodos
        },
        updateTodo: (state, action) => {
            const { id, todoName, completed } = action.payload
            const selectedTodo = state.todos.find(todo => todo.id === id)
            selectedTodo.completed=completed
            if(todoName){
                selectedTodo.todoName = todoName
            }
            
        }


    }
})

export const { showAllTodos, addTodo, deleteTodo,updateTodo } = todoSlice.actions
export default todoSlice.reducer