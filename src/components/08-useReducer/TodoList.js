import React from 'react';
import { TodoListItem } from './TodoListItem';
import './styles.css';

export const TodoList = ({ todos = [], handleToggle, handleDelete }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, index) => (

                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        index={index}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle} />


                ))
            }
        </ul>
    )
}
