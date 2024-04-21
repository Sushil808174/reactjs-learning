import { useState } from 'react'
import './App.css'

function App() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const [todoName, setTodoName] = useState('');
  const [todoDate, setTodoDate] = useState('');
  const [todos, setTodo] = useState([{id:1,name:'Todo 1', date: year+"/"+month+"/"+day},{id:2, name:'Todo 2', date: year+"/"+month+"/"+day}])
  
  const handleAddTodo = ()=>{
    const newTodo = {
      id: todos.length + 1,
      name: todoName,
      date: todoDate
    };
    setTodo([...todos, newTodo]);
    setTodoName('');
  }
  const handleDeleteTodo = (id)=>{
    setTodo(todos.filter((todo) => todo.id != id));
  }
  return (
    <center className='todo-container mt-3'>
      <h1 className='p-3'>Todo App</h1>
      <div class="container">
        <div class="row mb-2">
          <div class="col-6">
            <input className='form-control' type="text" value={todoName} onChange={(e) => setTodoName(e.target.value)} placeholder='Enter Todo Here'/>
          </div>
          <div class="col-4">
            <input className='form-control' type="date" value={todoDate} onChange={(e)=>setTodoDate(e.target.value)}/>
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-success kg-buttons" onClick={handleAddTodo}>Add</button>
          </div>
        </div>

          {todos.map((todo) =>
            <div class="row mb-2" key={todo.id}>
                <div class="col-6">
                  <h4>{todo.name}</h4>
                </div>
                <div class="col-4">
                  {todo.date}
                </div>
                <div class="col-2">
                <button type="button" class="btn btn-danger kg-buttons" onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
                </div>
            </div>
          )}
      </div>
    </center>
  )
}

export default App
