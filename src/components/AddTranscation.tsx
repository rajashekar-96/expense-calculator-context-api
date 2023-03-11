import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTranscation = () => {

  const { setTranscation } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    function addTransaction(e) {
      e.preventDefault();
      setTranscation(prevState => {
        const id = prevState.length;
        return [...prevState,{id, text, amount}]
      });

    }

  return (
    <div>
        <h3>Add new transaction</h3>
      <form onSubmit={e => addTransaction(e)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
            type="text" 
            value={text} 
            placeholder="Enter text..." 
            onChange={e => setText(e.target.value)}
            />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input 
            type="number" 
            value={amount} 
            placeholder="Enter amount..."
            onChange={e => setAmount(parseInt(e.target.value))}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
