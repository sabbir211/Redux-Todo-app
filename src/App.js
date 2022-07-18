import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoShow from './Features/TodoShow';
import Home from './Components/Home/Home';
function App() {

  return (
    <div className="App">

      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/updateTodo' element={<TodoShow />} />
          {/* <Route path='/' element={<TodoShow />} /> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
