import './App.css';
import {useState} from 'react'
import Hello from './Hello';

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1);
  }
  return ( 
    <>
    {/* nó sẽ không bị thay đổi khi props của nó ko thay đổi  */}
    <Hello count={count}/>
    {/* count ở đây là props truyền vào, nó sẽ re-render chỉ cần 1 TRONG NHIỀU props thay đổi */}

    <h1>{count}</h1>

    <button onClick={increase}>Click me</button>
    </>
  );
}

export default App;
