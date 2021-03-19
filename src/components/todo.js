import React, {useState} from 'react';

function Todo(){

    const [todos, setTodos] = useState([ ]);
    const [text, setText] = useState('');

    const handleTodos = e => {
        setText(e.target.value);
    }

    const addTodos = () => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };

    const completeTodos = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
      };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

    return(
        <div className="container">
            <h1 className="mt-3">Todos Assignment in React</h1>
            <input className="form-control" type="text" onChange={handleTodos} />
            <button className="btn-primary mt-2" onClick={() => addTodos()}> Add </button>
            <ul>
                {todos.map((todo,index) => (
                    <li className="mt-1" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
                        {todo.text} 
                    <button className="btn-primary ml-1" onClick={() => {completeTodos(index)}}> Complete </button> 
                    <button className="btn-secondary ml-1" onClick={() => {removeTodo(index)}}> Delete </button> 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;