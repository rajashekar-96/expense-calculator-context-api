import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TranscationList = () => {
    const {transcations} = useContext(GlobalContext);
    const sign = transcations.map(transcation => transcation.amount < 0 ? '-' : '+')
  return (
    <div>
        <h3>History</h3>
    <ul className="list">
        {transcations.map((transcation,index) => (
            <li className={transcation.amount > 0 ? "plus": "minus"}>
            {transcation.text} <span>{sign[index]}${Math.abs(transcation.amount)}</span><button className="delete-btn">x</button>
          </li> 
        ))}
       
    </ul></div>
  )
}
