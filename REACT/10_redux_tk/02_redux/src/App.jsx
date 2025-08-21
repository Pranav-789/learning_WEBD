import {useDispatch, useSelector} from 'react-redux'
import { increament, decreament, updateCounter } from './features/counterSlice';
import { useState } from 'react';
import { toggleTheme } from './features/themeSlice';
import Todo from './Todo';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)
  const theme = useSelector((state) => state.theme.themeMode);
  const [num, setNum] = useState(0);
  const handleUpdate = () => {
    if(num){
      dispatch(updateCounter(Number(num)));
    }
    setNum(0);
  }
  return (
    <div className={`${theme === 'dark' ? "bg-sky-900" : "bg-amber-400"} flex-col min-h-screen flex justify-center items-center`}>
      <p className='mb-4 text-lg'>Count: {count}</p>
      <div className='flex gap-5'>
        <button className="p-3 bg-gray-500 text-white text-lg rounded-lg" onClick={()=>dispatch(increament())}>+</button>
        <button className="p-3 bg-gray-600 text-white text-lg rounded-lg" onClick={()=>dispatch(decreament())}>-</button>
      </div>
      <div className='mt-8'>
        <input type="number" className='w-40 bg-white rounded-l-lg p-2' value={num} onChange={(e) => setNum(e.target.value)} onKeyDown={(e) => {if(e.key === 'Enter'){
          handleUpdate();
        }}}/>
        <button className='p-2 bg-green-400 rounded-r-lg hover:bg-green-300' onClick={handleUpdate}>update</button>
      </div>
      <div className='mt-8'>
        <button className='bg-teal-600 p-2 rounded-lg' onClick={()=> dispatch(toggleTheme())}>toggleTheme</button>
      </div>
      <Todo/>
    </div>
  );
}

export default App
