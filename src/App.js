// import logo from './logo.svg';
import './App.css';
import { addTo, deleteTodd, remove } from './actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
function App() {

  const [data, setdata] = useState('')
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list)

  const add = () => {
    return (dispatch(addTo(data)), setdata(''))
  }
  const del = (id) => {
    return (dispatch(deleteTodd(id)))
  }

  return (
    <div className="App">
          <h1>ToDo List</h1>

            <input type="text" placeholder="Add Items Here" value={data} onChange={(e) => setdata(e.target.value)} />
            <button onClick={add}>+</button>

          {
            list.map((item) => (
              <li key={item.id} >
              <h3 style={{ display: 'inline', margin: '20px' }}>{item.data}</h3>
              <button onClick={() => del(item.id)}>Delete</button>
            </li>))
          }
          <button style={{ display: 'block'}} onClick={() => dispatch(remove())}>Remove All</button>

    </div>
  );
}
export default App;
