import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState('');


  return (
    <div>
      <div className="container">
        <div className="box">
          <h2>A Simple <span>React</span> Calculator</h2>
          <form className="cal">
            <textarea 
            type="text"
            value={value}
            placeholder='|'
            />
            <div className='div'>
              <div className='row'>
                <input type='button' value="AC" className='AC' onClick={e=> setValue('')}/>
                <input type='button' value="DE" className='DE' onClick={e=> setValue(value.slice(0, -1))}/>
                <input type='button' value="." className='dot'  onClick={e=> setValue(value + e.target.value)}/>
                <input type='button' value="/" className='slash'  onClick={e=> setValue(value + e.target.value)}/>
              </div>
              <div className='row'>
                <input type='button' value="7" className='num' onClick={e=> setValue(value + e.target.value)}/>
                <input type='button' value="8" className='num' onClick={e=> setValue(value + e.target.value)}/>
                <input type='button' value="9" className='num'  onClick={e=> setValue(value + e.target.value)}/>
                <input type='button' value="+" className='plus'  onClick={e=> setValue(value + e.target.value)}/>
              </div>
              <div className='row'>
                <input type='button' value="4" className='num' onClick={e=> setValue(value + e.target.value)}/>
                <input type='button' value="5" className='num' onClick={e=> setValue(value + e.target.value)}/>
                <input type='button' value="6" className='num'  onClick={e=> setValue(value + e.target.value)}/>
                <input type='button' value="-" className='minus'  onClick={e=> setValue(value + e.target.value)}/>
              </div>
              <div className='row'>
                <input type='button' value="1" className='num' onClick={e=> setValue(value + e.target.value)}/>
                <input type='button' value="2" className='num' onClick={e=> setValue(value + e.target.value)}/>
                <input type='button' value="3" className='num'  onClick={e=> setValue(value + e.target.value)}/>
                <input type='button' value="*" className='times'  onClick={e=> setValue(value + e.target.value)}/>
              </div>
              <div className='row'>
                <input type='button' value="GAI" className='name' onClick={e=> setValue('By Gai Deng @2024')}/>
                <input type='button' value="00" className='zero'  onClick={e=> setValue(value + e.target.value)}/>
                <input type='button' value="0" className='num' onClick={e=> setValue(value + e.target.value)}/>
                <input type='button' value="=" className='equal'  onClick={e=>setValue(eval(value))}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;