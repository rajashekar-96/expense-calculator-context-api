import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TranscationList = () => {
    const {transactions} = useContext(GlobalContext);
    const sign = transactions.map(transaction => transaction.amount < 0 ? '-' : '+')
  return (
    <div>
        <h3>History</h3>
    <ul className="list">
        {transactions.map((transaction,index) => (
            <li className={transaction.amount > 0 ? "plus": "minus"}>
            {transaction.text} <span>{sign[index]}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
          </li> 
        ))}
       
    </ul></div>
  )
}
