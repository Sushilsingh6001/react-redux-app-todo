import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList';
import SearchBar from './Components/SearchBar';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <>
      <Container>
        <Typography variant='h4' align='center' gutterBottom>
          ToDo App
        </Typography>
        <SearchBar />
        <TodoList />
      </Container>

    </>
  );
}

export default App;
