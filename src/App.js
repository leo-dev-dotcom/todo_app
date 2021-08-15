import './App.css';
import { Container } from '@material-ui/core';
// import ItemForm from './component/ItemForm';
import ItemList from './component/ItemList';
import { useState } from 'react';
import AddList from './component/AddList';

const Initial_Data = [
  {
    id: "1",
    item: "Gym",
    status: 'Done',
  },
  {
    id: "2",
    item: "Running",
    status: 'Done',


  }
]
function App() {
  const [data, setData] = useState(Initial_Data)
  const addItems = (item) => {
    setData((prevExpenses) => {
      return [item, ...prevExpenses];
    });
  };

  return (
    <Container maxWidth="sm"  >

      <h1>TodoList App</h1>

      <ItemList onAddItems={addItems} />
      <h4>All Tasks</h4>
      <AddList items={data} />

    </Container>
  );
}

export default App;
