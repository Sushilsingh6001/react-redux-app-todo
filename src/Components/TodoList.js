import { Button, List, ListItem, ListItemText, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from '../redux/todoSlice'

const TodoList = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);
    const [editing, setEditing] = useState(null)

    const searchQuery = useSelector((state) => state.todo.search);

    const handleSubmit = () => {
        if (text.trim() === '') {
            alert('text are required')
            return;
        }
        if (editing !== null) {
            dispatch(updateTodo({
                id: editing,
                text
            }))
            setText('')
            setEditing(null)
        } else {
            dispatch(addTodo({
                id: Date.now(),
                text
            }))
            setText('')
        }
    }
    const handleEdit = (todo) => {
        setText(todo.text)
        setEditing(todo.id)
    }
    // searchQuery 
    const filterTodo = todos.filter(todo =>
        todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    )
    console.log(todos)
    return (
        <>
            <div>
                <TextField
                    label='New Todo'
                    variant='outlined'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    fullWidth
                    margin='normal'
                />
                <Button variant='contained' color='primary' onClick={handleSubmit}>
                    {editing !== null ? 'Update' : 'Add'}
                </Button>
                <List>
                    {filterTodo.map((todo) => {
                        return (
                            <ListItem key={todo.id}>
                                <ListItemText>{todo.text}</ListItemText>
                                <Button variant='contained' color='success' sx={{ m: 2 }} onClick={() => handleEdit(todo)}>Edit</Button>
                                <Button variant='contained' color='error' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
                            </ListItem>
                        )
                    })}

                </List>

            </div>
        </>
    )
}

export default TodoList